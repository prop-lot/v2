/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitVoteInputOptions } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: submitIdeaVote
// ====================================================

export interface submitIdeaVote_submitIdeaVote_voter {
  __typename: "User";
  wallet: string;
}

export interface submitIdeaVote_submitIdeaVote {
  __typename: "Vote";
  id: string;
  voterId: string;
  ideaId: string;
  direction: number;
  voterWeight: number;
  voter: submitIdeaVote_submitIdeaVote_voter;
}

export interface submitIdeaVote {
  submitIdeaVote: submitIdeaVote_submitIdeaVote;
}

export interface submitIdeaVoteVariables {
  options: SubmitVoteInputOptions;
}
