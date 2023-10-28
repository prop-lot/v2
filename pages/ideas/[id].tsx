import { useEffect, useState } from "react";

import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import { Col, Row, Container } from "react-bootstrap";

import { useAccount, useEnsName } from "wagmi";
import { useShortAddress } from "@/utils/addressAndENSDisplayUtils";
import moment from "moment";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { useLazyQuery, ApolloQueryResult } from "@apollo/client";
import { GET_IDEA_QUERY } from "@/graphql/queries/ideaQuery";
import { virtualTagColorMap } from "@/utils/virtualTagColors";
import IdeaVoteControls from "@/components/IdeaVoteControls";
import CandidateRow from "@/components/CandidateRow";
import {
  DELEGATED_VOTES_BY_OWNER_SUB,
  GET_ALL_CANDIDATE_DATA,
} from "@/graphql/subgraph";
import prisma from "@/lib/prisma";
import { Community } from "@prisma/client";
import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import { client } from "@/lib/apollo";
import { getTimeToClose } from "@/graphql/utils/queryUtils";

import {
  GetIdeaQuery,
  Idea,
} from "@/graphql/types/__generated__/types";
import {
  DelegatedVotesQuery,
  GetAllCandidateDataQuery
} from "@/graphql/types/__generated__/subgraphTypes";

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href: string, title: string, text: string) => {
  const html = linkRenderer.call(renderer, href, title, text);
  return html.replace(
    /^<a /,
    `<a target="_blank" rel="noreferrer noopener nofollow" `
  );
};

marked.setOptions({
  renderer: renderer,
});

const ProfileLink = ({ id }: { id: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { data: creatorEns } = useEnsName({
    address: id as `0x${string}`,
    cacheTime: 6_000,
    onError: (err) => {
      console.log(err);
    },
  });
  const shortAddress = useShortAddress(id);

  const profileName = creatorEns || shortAddress;

  return (
    <a
      className="text-[#2B83F6] underline cursor-pointer"
      href={`/profile/${id}`}
    >
      {isMounted && profileName}
    </a>
  );
};

export const IdeaCard = ({ idea }: { idea: Idea }) => {
  const { address } = useAccount();
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { daysLeft, hoursLeft } = getTimeToClose(idea);

  const buttonClass = isClient
    ? address
      ? "!bg-white !text-light-green"
      : "!bg-grey/20 !text-grey !cursor-default"
    : "";

  return (
    <div className="flex flex-col items-center gap-md self-stretch p-md rounded-xl border border-grey bg-white">
      <div className="flex justify-between gap-md self-stretch">
        <div className="text-black text-lg font-bold">Idea status</div>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9999 12.0004L11.9999 16.8004M11.9999 8.44258V8.40039M2.3999 12.0004C2.3999 6.69846 6.69797 2.40039 11.9999 2.40039C17.3018 2.40039 21.5999 6.69846 21.5999 12.0004C21.5999 17.3023 17.3018 21.6004 11.9999 21.6004C6.69797 21.6004 2.3999 17.3023 2.3999 12.0004Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch">
        <div className="self-stretch text-black font-inter text-4xl font-bold leading-[44px]">
          {idea.closed ? "Closed" : "Open"}
        </div>
        <div className="self-stretch text-slate font-inter text-sm font-semibold">
          {daysLeft > 0
            ? `Closes in ${daysLeft} day${daysLeft > 1 ? "s" : ""}`
            : `Closes in ${hoursLeft} hour${hoursLeft > 1 ? "s" : ""}`}
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch">
        <button
          className={`${buttonClass} !border-grey border-[1px] !text-sm !rounded-[10px] !font-inter !font-bold !pt-sm !pb-sm !pl-md !pr-md self-center w-full`}
          onClick={() => {
            router.push(`/candidate/new?ideaId=${idea.id}`);
          }}
        >
          Submit a proposal
        </button>
      </div>
      {isClient && !address && (
        <div className="self-stretch text-slate font-inter text-sm">
          Connect wallet to propose
        </div>
      )}

      <div className="flex items-center gap-sm self-stretch">
        <div className="flex flex-col justify-center items-start">
          <div className="text-light-green text-sm font-semibold">
            {idea.candidates?.length === 1
              ? `1 proposal`
              : `${idea.candidates?.length} proposals`}
          </div>
          <div className="self-stretch text-slate text-sm">
            {idea.candidates?.length === 1 ? `has` : `have`} been submitted
          </div>
        </div>
      </div>
    </div>
  );
};

export const VotingCard = ({
  idea,
  tokenBalance,
}: {
  idea: Idea;
  tokenBalance: number;
}) => {
  const { address } = useAccount();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-md self-stretch p-md rounded-xl border border-grey bg-white">
      <div className="self-stretch text-black text-lg font-bold">
        Voter sentiment
      </div>
      <div className="flex items-center gap-md self-stretch justify-between">
        <IdeaVoteControls idea={idea} nounBalance={tokenBalance} />
      </div>
      <div className="flex items-center gap-md self-stretch">
        <div className="nouns_dao_votes text-slate text-sm font-semibold">
          Nouns DAO votes
        </div>
      </div>
      <div className="flex flex-col items-start gap-md self-stretch p-2 rounded-xl bg-grey/40">
        <div className="flex justify-between self-stretch">
          <div className="text-black text-sm font-semibold">Upvotes</div>
          <div className="flex text-slate text-sm">X</div>
        </div>
        <div className="flex justify-between self-stretch">
          <div className="text-black text-sm font-semibold">Downvotes</div>
          <div className="flex text-slate text-sm">X</div>
        </div>
        <div className="flex justify-between self-stretch">
          <div className="text-black text-sm font-semibold">Consensus</div>
          <div className="flex text-slate text-sm">{idea.consensus}%</div>
        </div>
      </div>
      {isClient && !address && (
        <div className="self-stretch text-slate text-sm">
          Connect wallet to vote
        </div>
      )}
    </div>
  );
};

const IdeaPage = ({
  community,
  idea,
}: {
  community: Community;
  idea: GetIdeaQuery['getIdea'];
}) => {
  if (!idea) {
    throw new Error("Idea is required");
  }

  const router = useRouter();
  const { id } = router.query as { id: string };
  const { address } = useAccount();

  const [getDelegatedVotes, { data: getDelegatedVotesData }] = useLazyQuery<DelegatedVotesQuery>(
    DELEGATED_VOTES_BY_OWNER_SUB,
    {
      context: {
        clientName: community?.uname as SUPPORTED_SUBDOMAINS,
      },
    }
  );

  const [getAllCandidateData, { data: canadidatesData }] = useLazyQuery<GetAllCandidateDataQuery>(
    GET_ALL_CANDIDATE_DATA,
    {
      context: {
        clientName: community?.uname as SUPPORTED_SUBDOMAINS,
      },
    }
  );

  useEffect(() => {
    if (address) {
      getDelegatedVotes({
        variables: {
          id: address.toLowerCase(),
        },
      });
    }
  }, [address, getDelegatedVotes]);

  useEffect(() => {
    const slugs = idea.candidates?.map((candidate) => candidate.slug);

    if (slugs?.length === 1) {
      getAllCandidateData({
        variables: {
          candidateSlugs: slugs,
        },
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const tokenBalance = getDelegatedVotesData?.delegate?.delegatedVotes || 0; // todo: replace
  const hasTokens = tokenBalance > 0;
  const creatorTokenWeight = idea.votes?.find(
    (vote) => vote.voterId === idea.creatorId
  )?.voterWeight;

  return (
    <div className="mt-xl">
      <Row className="align-items-center bg-grey/30">
        <Container fluid={"lg"} className="font-inter bg-white px-xl">
          <Col lg={20} className="max-w-screen-xl mx-auto">
            <Row>
              <Link
                className="cursor-pointer text-dark-grey flex flex-row mb-sm items-center"
                href="/ideas"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-xs cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-sm">Back</span>
              </Link>
            </Row>

            {idea.headerImage && (
              <div className="flex flex-row w-full h-[320px] justify-center items-center flex-shrink-0 rounded-lg border border-[#A9B9CC] aspect-w-16 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="object-cover w-full h-full rounded-lg"
                  alt="Header image"
                  data-twic-src={`image:${idea.headerImage}`}
                  src={`${process.env.NEXT_PUBLIC_TWIC_PICS_DOMAIN}/${idea.headerImage}?twic=v1/output=preview`}
                />
              </div>
            )}

            <Row className=" flex gap-lg">
              <Col>
                <Row>
                  <div className="flex flex-col mb-md">
                    <div className="flex flex-row gap-sm flex-wrap text-sm text-dark-grey items-center">
                      {idea.creatorId && (
                        <ProfileLink id={idea.creatorId} />
                      )}
                      {` | ${moment(idea.createdAt).format(
                        "MMM Do YYYY"
                      )}`}
                      {idea.tags?.map((tag) => {
                        return (
                          <span
                            key={tag.type}
                            className={`${
                              virtualTagColorMap[tag.type]?.colors ||
                              "text-black bg-grey"
                            } text-xs font-bold rounded-[6px] px-sm py-xs flex`}
                          >
                            {tag.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Row>
                <div className="flex flex-col gap-lg">
                  <div className="flex flex-col gap-md">
                    <h1 className="text-[36px] font-bold">
                      {idea.title}
                    </h1>
                    <p className="font-semibold text-base">
                      {idea.tldr}
                    </p>
                  </div>

                  <div className="flex flex-col gap-md">
                    <h3 className="font-bold text-lg">Details</h3>
                    <div
                      className="prose-base text-base text-slate"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          marked.parse(idea.description),
                          {
                            ADD_ATTR: ["target"],
                          }
                        ),
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={4} className="md:max-w-[350px] flex flex-col gap-lg">
                <IdeaCard idea={idea as Idea} />
                <VotingCard idea={idea as Idea} tokenBalance={tokenBalance} />
              </Col>
            </Row>
          </Col>
        </Container>

        <Row className="flex gap-lg bg-white !px-0">
          <div className="border-t border-b border-grey items-normal sm:items-center mt-lg">
            <div className="max-w-screen-xl mx-auto w-full flex flex-row gap-lg p-md items-normal justify-between sm:items-center py-md px-xl">
              <div className="flex flex-row gap-sm">
                <div className="flex flex-col-reverse gap-lg sm:flex-row justify-between items-end sm:items-center">
                  <div className="flex flex-1 flex-row items-center overflow-scroll gap-md">
                    <button
                      onClick={() => {}}
                      key={"proposals"}
                      className="flex gap-sm !bg-grey/80 !text-black !border-none !text-sm !rounded-[10px] !font-inter !pt-sm !pb-sm !pl-md !pr-md self-center"
                    >
                      Proposals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

        <Row className="max-w-screen-xl mx-auto py-xl px-xl flex gap-lg overflow-x-scroll">
          {canadidatesData?.proposalCandidates?.map((candidate) => {
            return <CandidateRow key={candidate.id} {...candidate} />;
          })}
        </Row>
      </Row>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const community = await prisma.community.findFirst({
    where: {
      uname: "nouns",
    },
  });

  if (!community || !context.params?.id) {
    return {
      notFound: true,
    };
  }

  try {
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const host = context.req.headers.host;
    // We set a different uri locally as routing to subdomains here doesn't work unless you add 127.0.0.1 lilnouns.localhost to your /etc/hosts
    // we could add that as a requirement to the readme but this also works.
    const uri =
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/graphql`
        : `${protocol}://${host}/api/graphql`;

    const ideaData: ApolloQueryResult<GetIdeaQuery> = await client.query({
      query: GET_IDEA_QUERY,
      variables: { ideaId: context.params.id },
      fetchPolicy: "no-cache",
      context: {
        clientName: "PropLot",
        uri,
        headers: {
          "proplot-cd": "nouns", // Used for local dev as this query doesn't run on the subdomain
          "proplot-tz": Intl.DateTimeFormat().resolvedOptions().timeZone,
          Cookie: context.req.headers.cookie || "",
        },
      },
    });

    if (!ideaData.data.getIdea) {
      throw new Error(`Can't find idea ${context.params.id}`)
    }

    return {
      props: {
        community: JSON.parse(JSON.stringify(community)),
        idea: ideaData.data.getIdea,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}

export default IdeaPage;
