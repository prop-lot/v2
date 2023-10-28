import { gql } from "@apollo/client";

export const DELEGATED_VOTES_BY_OWNER_SUB = gql`
  query delegatedVotes($id: ID!) {
    delegate(id: $id) {
      delegatedVotes
    }
  }
`;

export const DELEGATED_VOTES_BY_OWNER_SUB_AT_BLOCK = gql`
  query delegateVotesAtBlock($id: ID!, $block: Block_height) {
    delegate(id: $id, block: $block) {
      delegatedVotes
    }
  }
`;

export const TOKEN_BALANCES_BY_OWNER_SUB = gql`
  query tokenBalances($id: ID!) {
    delegate(id: $id) {
      delegatedVotes
    }

    account(id: $id) {
      tokenBalance
      tokens: nouns {
        id
        seed {
          background
          body
          accessory
          head
          glasses
        }
      }
    }
  }
`;

export const GET_CURRENT_AUCTION = gql`
query getCurrentAuction {
  auctions(where: { settled_not: true }) {
      id
      noun {
        id
        seed {
          id
          background
          body
          accessory
          head
          glasses
        }
      }
      amount
    }
  }
`;

export const GET_PREVIOUS_AUCTIONS = gql`
  query getPreviousAuctions($nounIds: [ID!]!) {
    auctions(
      orderDirection: desc
      orderBy: id
      where: { noun_: { id_in: $nounIds } }
    ) {
      id
      noun {
        id
        seed {
          id
          background
          body
          accessory
          head
          glasses
        }
      }
      amount
    }
  }
`;

export const GET_RECENT_PROPOSALS = gql`
  query getRecentProposals($recentTimestamp: BigInt) {
    proposals(
      where: { createdTimestamp_gt: $recentTimestamp }
      orderBy: id
      orderDirection: desc
    ) {
      id
      title
      status
    }
  }
`;

export const GET_GOVERNANCE_DATA = gql`
query getGovernanceData {
  governance(id: "GOVERNANCE") {
      currentTokenHolders
      delegatedVotes
    }
  }
`;

export const GET_CANDIDATE_DATA = gql`
  query getCandidateData($candidateId: ID!) {
    proposalCandidate(id: $candidateId) {
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
  }
`;

export const GET_CANDIDATE_VOTES = gql`
  query getCandidateVotes($candidateId: ID!) {
    candidateFeedbacks(where: { candidate_: { id: $candidateId } }) {
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
  }
`;

export const GET_ALL_CANDIDATE_DATA = gql`
  query getAllCandidateData($candidateSlugs: [String!]) {
    proposalCandidates(where: { slug_in: $candidateSlugs }) {
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
  }
`;
