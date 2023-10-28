import { gql } from "@apollo/client";

export const PROPLOT_FILTER_FRAGMENT = gql`
fragment filterProperties on PropLotFilter {
  id
  type
  label
  options {
    id
    label
    selected
    value
    icon
    count
  }
}
`

export const GET_PROPLOT_QUERY = gql`
  query getPropLot($options: PropLotInputOptions!) {
    propLot: getPropLot(options: $options) {
      list {
        ... on Candidate {
          slug
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
      dateFilter {
        ...filterProperties
      }
      tagFilter {
        ...filterProperties
      }
      listFilter {
        ...filterProperties
      }
      appliedFilterTags {
        param
        displayName
      }
      metadata {
        requestUUID
        appliedFilters
      }
    }
  }

  ${PROPLOT_FILTER_FRAGMENT}
`;
