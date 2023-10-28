import { gql } from "@apollo/client";

export const GET_IDEA_QUERY = gql`
  query getIdea($ideaId: String!) {
    getIdea(options: { ideaId: $ideaId }) {
      id
      title
      tldr
      creatorId
      description
      votecount
      createdAt
      createdAtBlock
      deleted
      expiryDate
      expiryOption
      headerImage
      ideaStats {
        comments
      }
      closed
      consensus
      tags {
        type
        label
      }
      votes {
        id
        voterId
        ideaId
        direction
        voterWeight
        voter {
          wallet
        }
      }
      candidates {
        slug
        proposerId
        ideaId
        id
      }
    }
  }
`;
