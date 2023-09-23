/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteIdeaComment
// ====================================================

export interface deleteIdeaComment_deleteIdeaComment_replies_replies {
  __typename: "Comment";
  body: string;
  id: string;
  deleted: boolean;
  authorId: string;
  parentId: string | null;
  ideaId: string;
  createdAt: any;
}

export interface deleteIdeaComment_deleteIdeaComment_replies {
  __typename: "Comment";
  body: string;
  id: string;
  deleted: boolean;
  authorId: string;
  parentId: string | null;
  ideaId: string;
  createdAt: any;
  replies: deleteIdeaComment_deleteIdeaComment_replies_replies[] | null;
}

export interface deleteIdeaComment_deleteIdeaComment {
  __typename: "Comment";
  body: string;
  authorId: string;
  deleted: boolean;
  id: string;
  parentId: string | null;
  ideaId: string;
  createdAt: any;
  replies: deleteIdeaComment_deleteIdeaComment_replies[] | null;
}

export interface deleteIdeaComment {
  deleteIdeaComment: deleteIdeaComment_deleteIdeaComment;
}

export interface deleteIdeaCommentVariables {
  id: string;
}
