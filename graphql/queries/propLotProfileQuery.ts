import { gql } from '@apollo/client';
import { PROPLOT_FILTER_FRAGMENT } from './propLotQuery'

export const GET_PROPLOT_PROFILE_QUERY = gql`
  query getPropLotProfile($options: PropLotProfileInputOptions!) {
    propLotProfile: getPropLotProfile(options: $options) {
      profile {
        user {
          wallet
          userStats {
            totalVotes
            totalUpvotes
            totalDownvotes
            totalComments
            totalIdeas
            netVotesReceived
            downvotesReceived
            upvotesReceived
          }
        }
      }
      list {
        ... on Comment {
          id
          body
          ideaId
          parentId
          authorId
          createdAt
          deleted
          parent {
            id
            body
            ideaId
            authorId
            createdAt
          }
          idea {
            id
            title
            creatorId
            closed
            consensus
          }
        }
        ... on Idea {
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
        }
      }
      sortFilter {
        ...filterProperties
      }
      tabFilter {
        ...filterProperties
      }
      metadata {
        requestUUID
        appliedFilters
      }
    }
  }
  ${PROPLOT_FILTER_FRAGMENT}
`;
