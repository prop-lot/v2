/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitCandidateInputOptions } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: submitCandidate
// ====================================================

export interface submitCandidate_submitCandidate {
  __typename: "Candidate";
  id: string;
}

export interface submitCandidate {
  submitCandidate: submitCandidate_submitCandidate;
}

export interface submitCandidateVariables {
  options: SubmitCandidateInputOptions;
}
