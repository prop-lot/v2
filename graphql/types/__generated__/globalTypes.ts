/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum FilterType {
  MULTI_SELECT = "MULTI_SELECT",
  SINGLE_SELECT = "SINGLE_SELECT",
}

export enum IdeaExpiryOption {
  FOURTEEN_DAYS = "FOURTEEN_DAYS",
  SEVEN_DAYS = "SEVEN_DAYS",
  TWENTY_EIGHT_DAYS = "TWENTY_EIGHT_DAYS",
}

export enum TagType {
  ARCHIVED = "ARCHIVED",
  CLOSED = "CLOSED",
  COMMUNITY = "COMMUNITY",
  CONSENSUS = "CONSENSUS",
  CREATIVE = "CREATIVE",
  DISCUSSION = "DISCUSSION",
  GOVERNANCE = "GOVERNANCE",
  HARDWARE = "HARDWARE",
  INFO = "INFO",
  NEW = "NEW",
  OTHER = "OTHER",
  PUBLIC_GOOD = "PUBLIC_GOOD",
  SOFTWARE = "SOFTWARE",
}

export interface PropLotInputOptions {
  filters?: string[] | null;
  requestUUID: string;
}

export interface PropLotProfileInputOptions {
  filters?: string[] | null;
  wallet: string;
  requestUUID: string;
}

export interface SubmitCandidateInputOptions {
  slug: string;
  ideaId: string;
}

export interface SubmitCommentInputOptions {
  ideaId: string;
  body: string;
  parentId?: number | null;
}

export interface SubmitIdeaInputOptions {
  title: string;
  tldr: string;
  description: string;
  tags?: TagType[] | null;
  expiryOption: IdeaExpiryOption;
  headerImage?: string | null;
}

export interface SubmitVoteInputOptions {
  direction: number;
  ideaId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
