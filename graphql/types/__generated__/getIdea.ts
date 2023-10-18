/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IdeaExpiryOption, TagType } from "./globalTypes";

// ====================================================
// GraphQL query operation: getIdea
// ====================================================

export interface getIdea_getIdea_ideaStats {
  __typename: "IdeaStats";
  comments: number | null;
}

export interface getIdea_getIdea_tags {
  __typename: "IdeaTags";
  type: TagType;
  label: string;
}

export interface getIdea_getIdea_votes_voter {
  __typename: "User";
  wallet: string;
}

export interface getIdea_getIdea_votes {
  __typename: "Vote";
  id: string;
  voterId: string;
  ideaId: string;
  direction: number;
  voterWeight: number;
  voter: getIdea_getIdea_votes_voter;
}

export interface getIdea_getIdea_candidates {
  __typename: "Candidate";
  slug: string;
  proposerId: string;
  ideaId: string;
  id: string;
}

export interface getIdea_getIdea {
  __typename: "Idea";
  id: string;
  title: string;
  tldr: string;
  creatorId: string;
  description: string;
  votecount: number;
  createdAt: any;
  deleted: boolean;
  expiryDate: any;
  expiryOption: IdeaExpiryOption;
  headerImage: string | null;
  ideaStats: getIdea_getIdea_ideaStats | null;
  closed: boolean;
  consensus: number | null;
  tags: getIdea_getIdea_tags[] | null;
  votes: getIdea_getIdea_votes[] | null;
  candidates: getIdea_getIdea_candidates[] | null;
}

export interface getIdea {
  getIdea: getIdea_getIdea | null;
}

export interface getIdeaVariables {
  ideaId: string;
}
