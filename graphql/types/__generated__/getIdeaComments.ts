/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getIdeaComments
// ====================================================

export interface getIdeaComments_getIdeaComments_replies_replies {
  __typename: "Comment";
  body: string;
  id: string;
  deleted: boolean;
  parentId: string | null;
  ideaId: string;
  createdAt: any;
  authorId: string;
}

export interface getIdeaComments_getIdeaComments_replies {
  __typename: "Comment";
  body: string;
  id: string;
  deleted: boolean;
  parentId: string | null;
  ideaId: string;
  createdAt: any;
  authorId: string;
  replies: getIdeaComments_getIdeaComments_replies_replies[] | null;
}

export interface getIdeaComments_getIdeaComments {
  __typename: "Comment";
  body: string;
  id: string;
  parentId: string | null;
  deleted: boolean;
  ideaId: string;
  createdAt: any;
  authorId: string;
  replies: getIdeaComments_getIdeaComments_replies[] | null;
}

export interface getIdeaComments {
  getIdeaComments: getIdeaComments_getIdeaComments[] | null;
}

export interface getIdeaCommentsVariables {
  ideaId: string;
}
