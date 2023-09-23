/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitIdeaInputOptions } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: submitIdea
// ====================================================

export interface submitIdea_submitIdea {
  __typename: "Idea";
  id: string;
}

export interface submitIdea {
  submitIdea: submitIdea_submitIdea;
}

export interface submitIdeaVariables {
  options: SubmitIdeaInputOptions;
}
