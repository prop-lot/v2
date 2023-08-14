import { Row, Container, Col } from "react-bootstrap";
import { GetServerSidePropsContext } from "next";

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

// todo - types
const CandidateIndexPage = ({
  proposalCandidate,
}: {
  proposalCandidate: any;
}) => {
  console.log(proposalCandidate);
  const [title, ...description] =
    proposalCandidate.latestVersion.content.description.split("\n\n");
  return (
    <Container fluid={"lg"} className="mt-8 mb-12">
      <Row className="align-items-center">
        <Col lg={10} className="mx-auto">
          <main className="grid grid-cols-3">
            <section className="col-span-2">
              <h1 className="mb-4 text-2xl font-bold">{title}</h1>
              {description.map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
            <section className="col-span-1 flex flex-col space-y-4">
              <div className="p-4 border rounded">
                <h3 className="font-bold text-lg">Proposal Stage</h3>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-bold text-lg">Consensus Vote</h3>
              </div>
              <div className="p-4 border rounded"></div>
            </section>
          </main>
        </Col>
      </Row>
    </Container>
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

    return {
      props: {
        proposalCandidate,
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
