import { useRouter } from "next/router";
import { useEnsName } from "wagmi";
import { useShortAddress } from "@/utils/addressAndENSDisplayUtils";
import { useEffect, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_CANDIDATE_DATA } from "@/graphql/subgraph";
import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface CandidateRowProps {
  slug: string;
  proposer: string;
  latestVersion: {
    content: {
      title: string;
    };
  };
}

export const CandidateRowContainer = ({ slug }: { slug: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [getAllCandidateData, { data: canadidatesData }] = useLazyQuery(
    GET_ALL_CANDIDATE_DATA,
    {
      context: {
        clientName: SUPPORTED_SUBDOMAINS.NOUNS,
      },
    }
  );

  useEffect(() => {
    if (slug && isVisible) {
      getAllCandidateData({
        variables: {
          candidateSlugs: [slug],
        },
      });
    }
  }, [slug, isVisible, getAllCandidateData]);

  const canadidateData = canadidatesData?.proposalCandidates?.[0];

  if (!canadidateData || canadidateData?.length === 0) {
    return (
      <div
        ref={ref}
        className="flex flex-row w-full cursor-pointer p-md bg-white gap-sm min-w-[800px]"
      ></div>
    );
  }

  return <CandidateRow ref={ref} {...canadidateData} />;
};

const CandidateRow: React.FC<CandidateRowProps> = ({ slug, proposer, latestVersion }) => {
  const router = useRouter();

  const { data: creatorEns } = useEnsName({
    address: proposer as `0x${string}`,
    cacheTime: 6_000,
    onError: (err) => {
      console.log(err);
    },
  });
  const shortAddress = useShortAddress(proposer);

  const userName = creatorEns || shortAddress;

  let statusTag = "";
  let voteTypeTitle = "";
  const step: number = 0;

  if (step === 0) {
    statusTag = "Consensus check";
    voteTypeTitle = "Consensus vote";
  } else if (step === 1) {
    statusTag = "Onchain vote";
    voteTypeTitle = "Onchain vote";
  }

  return (
    <div
      className="flex flex-row w-full border border-grey rounded-[10px] cursor-pointer p-md bg-white gap-sm min-w-[800px]"
      onClick={() => {
        router.push(`/candidate/${slug}`);
      }}
    >
      <>
        <div className="font-ptRootUI font-medium text-base flex flex-row flex-1 justify-content-start align-items-start">
          <div className="flex flex-1 flex-row gap-lg">
            <div className="flex flex-col flex-0">
              <span className="flex text-light-green overflow-hidden">
                <span className="font-bold truncate">{userName}</span>
              </span>
            </div>
            <div className="flex flex-col flex-1 justify-content-start align-items-start gap-sm">
              <span className="font-bold text-black flex flex-1">
                {latestVersion.content.title}
              </span>
              <div className="flex flex-row items-center flex-wrap gap-sm text-sm text-slate">
                {voteTypeTitle}: For:
                <span className="font-semibold text-light-green">34</span>
                Against:
                <span className="font-semibold text-red">12</span> Abstain:
                <span className="font-semibold">2</span>
              </div>
            </div>

            <div className="flex-col justify-center items-center gap-xs inline-flex">
              <div className="flex flex-row flex-1 items-center gap-sm">
                <div className="w-full px-md py-sm rounded-lg bg-green/10 flex items-center justify-center font-semibold whitespace-nowrap h-8">
                  <span className="text-sm">{statusTag}</span>
                </div>
                <div className="w-full px-md py-sm rounded-lg bg-grey flex items-center justify-center font-semibold whitespace-nowrap h-8">
                  <span className="text-sm">
                    {latestVersion.content.contentSignatures.length} of X
                    sponsors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CandidateRow;
