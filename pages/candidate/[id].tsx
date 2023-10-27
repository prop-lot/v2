import { Row, Container, Col } from "react-bootstrap";
import { GetServerSidePropsContext } from "next";
import { useLazyQuery } from "@apollo/client";
import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import { DELEGATED_VOTES_BY_OWNER_SUB } from "@/graphql/subgraph";
import { useAccount } from "wagmi";

import CandidateProposalProgress from "../../components/CandidateProposalProgress";
import CandidateConsensusVote from "../../components/CandidateConsensusVote";
import CandidateSponsors from "../../components/CandidateSponsors";
import CandidateVoteGrid from "../../components/CandidateVoteGrid";
import { SupportedTokenGetterMap } from "../../utils/supportedTokenUtils";

// example URL http://localhost:3000/candidate/0x57a39aa135a688cf18ece526f1d3597a11e1b32a-candidate-to-proposal
// todo - types
const CandidateIndexPage = ({
  proposalCandidate,
  votes,
}: {
  proposalCandidate: any;
  votes: any;
}) => {
  const [_title, ...description] =
    proposalCandidate.latestVersion.content.description.split("\n\n");

  // TODO: can make this better so the data is more readable
  const processActions = (
    calldatas: string[],
    targets: string[],
    values: string[]
  ) => {
    const actions = [];
    for (let i = 0; i < calldatas.length; i++) {
      actions.push({
        calldata: calldatas[i],
        target: targets[i],
        value: values[i],
      });
    }
    return actions.map((action, index) => (
      <div key={index} className="mb-4">
        <h4 className="mb-1 font-bold uppercase">{index + 1}.</h4>
        <p className="mb-1 text-gray-500">Target: {action.target}</p>
        <p className="mb-1 text-gray-500">Value: {action.value}</p>
        <p className="mb-1 text-gray-500">Call Data: {action.calldata}</p>
      </div>
    ));
  };

  return (
    <>
      <Container fluid={"lg"} className="mt-8 mb-12">
        <Row className="align-items-center">
          <Col lg={10} className="mx-auto">
            <main className="grid grid-cols-3 gap-20">
              <section className="col-span-2">
                <h1 className="mb-6 text-4xl font-bold">
                  {proposalCandidate.latestVersion.content.title}
                </h1>
                <h3 className="mb-2 text-2xl font-bold">Details</h3>
                {description.map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-500">
                    {paragraph}
                  </p>
                ))}
                <h3 className="mt-6 mb-2 text-2xl font-bold">
                  On-chain Actions
                </h3>
                {processActions(
                  proposalCandidate.latestVersion.content.calldatas || [],
                  proposalCandidate.latestVersion.content.targets || [],
                  proposalCandidate.latestVersion.content.values || []
                )}
              </section>
              <section className="col-span-1 flex flex-col space-y-4">
                <CandidateProposalProgress candidate={proposalCandidate} />
                <CandidateConsensusVote
                  candidate={proposalCandidate}
                  votes={votes}
                  // pretty sure this will always be true on proplot unless we are showing candidate view to real proposals
                  // can only give feedback to a candidate or a proposal that is UPDATABLE
                  // isOpenToFeedback={proposalCandidate.proposalIdToUpdate && originalProposal?.status !== ProposalState.UPDATABLE ? false : true;}
                  isOpenToFeedback={true}
                />
                <CandidateSponsors candidate={proposalCandidate} />
              </section>
            </main>
          </Col>
        </Row>
      </Container>

      <section className="col-span-3">
        <CandidateVoteGrid votes={votes} />
      </section>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string };

  const supportedTokenConfig =
    SupportedTokenGetterMap["nouns" as SUPPORTED_SUBDOMAINS];

  try {
    const proposalCandidates = await supportedTokenConfig.getAllCandidateData([
      id,
    ]);

    const proposalCandidate = proposalCandidates?.[0];

    const votesResponse = await supportedTokenConfig.getCandidateVotes(
      proposalCandidate.id
    );

    const orderedVotes = votesResponse.reduce(
      (acc: any, vote: any) => {
        if (vote.supportDetailed === 0) {
          acc.against.push(vote);
        } else if (vote.supportDetailed === 1) {
          acc.for.push(vote);
        } else if (vote.supportDetailed === 2) {
          acc.abstain.push(vote);
        }
        return acc;
      },
      { for: [], against: [], abstain: [] }
    );

    return {
      props: {
        proposalCandidate,
        votes: orderedVotes,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default CandidateIndexPage;
