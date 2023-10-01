import { Row, Container, Col } from "react-bootstrap";
import { GetServerSidePropsContext } from "next";
import { useLazyQuery } from "@apollo/client";
import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import { DELEGATED_VOTES_BY_OWNER_SUB } from "@/graphql/subgraph";
import { useAccount, useEnsName } from "wagmi";

import CandidateProposalProgress from "../../components/CandidateProposalProgress";
import CandidateConsensusVote from "../../components/CandidateConsensusVote";
import CandidateSponsors from "../../components/CandidateSponsors";
import CandidateVoteGrid from "../../components/CandidateVoteGrid";

const QUERY = `
query GetProposalCandidateById($id: ID!) {
  proposalCandidate(id: $id) {
    id
    slug
    proposer
    lastUpdatedTimestamp
    createdTransactionHash
    canceled
    versions {
      content {
        title
      }
    }
    latestVersion {
      content {
        title
        description
        targets
        values
        signatures
        calldatas
        encodedProposalHash
        proposalIdToUpdate
        contentSignatures {
          id
          signer {
            id
            proposals {
              id
            }
          }
          sig
          expirationTimestamp
          canceled
          reason
        }
      }
    }
  }
}`;

const VOTES_QUERY = `
query GetVotesWithFeedback($candidateId: ID!) {
  candidateFeedbacks(where: {candidate_: {id: $candidateId}}) {
    supportDetailed
    votes
    reason
    createdTimestamp
    voter {
      id
    }
    candidate {
      id
    }
  }
}`;

// example URL http://localhost:3000/candidate/0x57a39aa135a688cf18ece526f1d3597a11e1b32a-candidate-to-proposal
// todo - types
const CandidateIndexPage = ({
  proposalCandidate,
  votes,
}: {
  proposalCandidate: any;
  votes: any;
}) => {
  console.log(proposalCandidate);

  const { address } = useAccount();

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

  const [getDelegatedVotes, { data: getDelegatedVotesData }] = useLazyQuery(
    DELEGATED_VOTES_BY_OWNER_SUB,
    {
      context: {
        clientName: "nouns" as SUPPORTED_SUBDOMAINS,
      },
    }
  );

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
  const { id } = context.query;

  try {
    const response = await fetch(
      // make const in config
      "https://api.goldsky.com/api/public/project_cldf2o9pqagp43svvbk5u3kmo/subgraphs/nouns-v3-goerli/0.1.6/gn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: QUERY,
          variables: {
            id: id,
          },
        }),
      }
    );

    const data = await response.json();
    const proposalCandidate = data.data.proposalCandidate;

    const votesResponse = await fetch(
      // make const in config
      "https://api.goldsky.com/api/public/project_cldf2o9pqagp43svvbk5u3kmo/subgraphs/nouns-v3-goerli/0.1.6/gn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: VOTES_QUERY,
          variables: {
            candidateId: proposalCandidate.id,
          },
        }),
      }
    );

    const votesData = await votesResponse.json();
    const votes = votesData.data.candidateFeedbacks;

    const orderedVotes = votes.reduce(
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
