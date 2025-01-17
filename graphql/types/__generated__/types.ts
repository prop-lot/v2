import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AppliedFilter = {
  __typename?: 'AppliedFilter';
  displayName: Scalars['String']['output'];
  param: Scalars['String']['output'];
};

export type Candidate = {
  __typename?: 'Candidate';
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  idea?: Maybe<Idea>;
  ideaId: Scalars['String']['output'];
  proposerId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  authorId: Scalars['String']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  idea?: Maybe<Idea>;
  ideaId: Scalars['String']['output'];
  parent?: Maybe<CommentParent>;
  parentId?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Comment>>;
};

export type CommentParent = {
  __typename?: 'CommentParent';
  authorId: Scalars['String']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  ideaId: Scalars['String']['output'];
};

export type DeleteDataResponse = {
  __typename?: 'DeleteDataResponse';
  id?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FilterOption = {
  __typename?: 'FilterOption';
  count?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  selected: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export enum FilterType {
  MULTI_SELECT = 'MULTI_SELECT',
  SINGLE_SELECT = 'SINGLE_SELECT'
}

export type Idea = {
  __typename?: 'Idea';
  candidates?: Maybe<Array<Candidate>>;
  closed: Scalars['Boolean']['output'];
  comments?: Maybe<Array<Comment>>;
  consensus?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Date']['output'];
  createdAtBlock: Scalars['Int']['output'];
  creatorId: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  expiryDate: Scalars['Date']['output'];
  expiryOption: IdeaExpiryOption;
  headerImage?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  ideaStats?: Maybe<IdeaStats>;
  tags?: Maybe<Array<IdeaTags>>;
  title: Scalars['String']['output'];
  tldr: Scalars['String']['output'];
  votecount: Scalars['Int']['output'];
  votes?: Maybe<Array<Vote>>;
};

export type IdeaCommentInputOptions = {
  ideaId: Scalars['String']['input'];
};

export enum IdeaExpiryOption {
  FOURTEEN_DAYS = 'FOURTEEN_DAYS',
  SEVEN_DAYS = 'SEVEN_DAYS',
  TWENTY_EIGHT_DAYS = 'TWENTY_EIGHT_DAYS'
}

export type IdeaInputOptions = {
  ideaId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Sort_Type>;
};

export type IdeaStats = {
  __typename?: 'IdeaStats';
  comments?: Maybe<Scalars['Int']['output']>;
};

export type IdeaTags = {
  __typename?: 'IdeaTags';
  label: Scalars['String']['output'];
  type: TagType;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteIdea: DeleteDataResponse;
  deleteIdeaComment: Comment;
  submitCandidate: Candidate;
  submitIdea: Idea;
  submitIdeaComment: Comment;
  submitIdeaVote: Vote;
};


export type MutationDeleteIdeaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteIdeaCommentArgs = {
  id: Scalars['String']['input'];
};


export type MutationSubmitCandidateArgs = {
  options: SubmitCandidateInputOptions;
};


export type MutationSubmitIdeaArgs = {
  options: SubmitIdeaInputOptions;
};


export type MutationSubmitIdeaCommentArgs = {
  options: SubmitCommentInputOptions;
};


export type MutationSubmitIdeaVoteArgs = {
  options: SubmitVoteInputOptions;
};

export type PropLotFilter = {
  __typename?: 'PropLotFilter';
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  options: Array<FilterOption>;
  type: FilterType;
};

export type PropLotInputOptions = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  requestUUID: Scalars['String']['input'];
};

export type PropLotListItems = Candidate | Comment | Idea;

export type PropLotProfileInputOptions = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  requestUUID: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};

export type PropLotProfileResponse = {
  __typename?: 'PropLotProfileResponse';
  list?: Maybe<Array<PropLotListItems>>;
  metadata: PropLotResponseMetadata;
  profile: PropLotUserProfile;
  sortFilter?: Maybe<PropLotFilter>;
  tabFilter?: Maybe<PropLotFilter>;
};

export type PropLotResponse = {
  __typename?: 'PropLotResponse';
  appliedFilterTags?: Maybe<Array<AppliedFilter>>;
  dateFilter?: Maybe<PropLotFilter>;
  list?: Maybe<Array<PropLotListItems>>;
  listFilter?: Maybe<PropLotFilter>;
  metadata: PropLotResponseMetadata;
  sortFilter?: Maybe<PropLotFilter>;
  tagFilter?: Maybe<PropLotFilter>;
};

export type PropLotResponseMetadata = {
  __typename?: 'PropLotResponseMetadata';
  appliedFilters?: Maybe<Array<Scalars['String']['output']>>;
  requestUUID: Scalars['String']['output'];
};

export type PropLotUserProfile = {
  __typename?: 'PropLotUserProfile';
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getIdea?: Maybe<Idea>;
  getIdeaComments?: Maybe<Array<Comment>>;
  getIdeas?: Maybe<Array<Idea>>;
  getPropLot: PropLotResponse;
  getPropLotProfile: PropLotProfileResponse;
  getTags?: Maybe<Array<IdeaTags>>;
  getUser?: Maybe<User>;
};


export type QueryGetIdeaArgs = {
  options: IdeaInputOptions;
};


export type QueryGetIdeaCommentsArgs = {
  options: IdeaCommentInputOptions;
};


export type QueryGetIdeasArgs = {
  options: IdeaInputOptions;
};


export type QueryGetPropLotArgs = {
  options: PropLotInputOptions;
};


export type QueryGetPropLotProfileArgs = {
  options: PropLotProfileInputOptions;
};


export type QueryGetUserArgs = {
  options: UserInputOptions;
};

export enum Sort_Type {
  LATEST = 'LATEST',
  OLDEST = 'OLDEST',
  VOTES_ASC = 'VOTES_ASC',
  VOTES_DESC = 'VOTES_DESC'
}

export type SubmitCandidateInputOptions = {
  ideaId: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type SubmitCommentInputOptions = {
  body: Scalars['String']['input'];
  ideaId: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
};

export type SubmitIdeaInputOptions = {
  description: Scalars['String']['input'];
  expiryOption: IdeaExpiryOption;
  headerImage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagType>>;
  title: Scalars['String']['input'];
  tldr: Scalars['String']['input'];
};

export type SubmitVoteInputOptions = {
  direction: Scalars['Int']['input'];
  ideaId: Scalars['String']['input'];
};

export enum TagType {
  ARCHIVED = 'ARCHIVED',
  CLOSED = 'CLOSED',
  COMMUNITY = 'COMMUNITY',
  CONSENSUS = 'CONSENSUS',
  CREATIVE = 'CREATIVE',
  DISCUSSION = 'DISCUSSION',
  GOVERNANCE = 'GOVERNANCE',
  HARDWARE = 'HARDWARE',
  INFO = 'INFO',
  NEW = 'NEW',
  OTHER = 'OTHER',
  PUBLIC_GOOD = 'PUBLIC_GOOD',
  SOFTWARE = 'SOFTWARE'
}

export type User = {
  __typename?: 'User';
  userStats?: Maybe<UserStats>;
  wallet: Scalars['String']['output'];
};

export type UserInputOptions = {
  wallet: Scalars['String']['input'];
};

export type UserStats = {
  __typename?: 'UserStats';
  downvotesReceived?: Maybe<Scalars['Int']['output']>;
  netVotesReceived?: Maybe<Scalars['Int']['output']>;
  totalComments?: Maybe<Scalars['Int']['output']>;
  totalDownvotes?: Maybe<Scalars['Int']['output']>;
  totalIdeas?: Maybe<Scalars['Int']['output']>;
  totalUpvotes?: Maybe<Scalars['Int']['output']>;
  totalVotes?: Maybe<Scalars['Int']['output']>;
  upvotesReceived?: Maybe<Scalars['Int']['output']>;
};

export type Vote = {
  __typename?: 'Vote';
  direction: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  ideaId: Scalars['String']['output'];
  voter: User;
  voterId: Scalars['String']['output'];
  voterWeight: Scalars['Int']['output'];
};

export type GetIdeaCommentsQueryVariables = Exact<{
  ideaId: Scalars['String']['input'];
}>;


export type GetIdeaCommentsQuery = { __typename?: 'Query', getIdeaComments?: Array<{ __typename?: 'Comment', body: string, id: string, parentId?: string | null, deleted: boolean, ideaId: string, createdAt: any, authorId: string, replies?: Array<{ __typename?: 'Comment', body: string, id: string, deleted: boolean, parentId?: string | null, ideaId: string, createdAt: any, authorId: string, replies?: Array<{ __typename?: 'Comment', body: string, id: string, deleted: boolean, parentId?: string | null, ideaId: string, createdAt: any, authorId: string }> | null }> | null }> | null };

export type GetIdeaQueryVariables = Exact<{
  ideaId: Scalars['String']['input'];
}>;


export type GetIdeaQuery = { __typename?: 'Query', getIdea?: { __typename?: 'Idea', id: string, title: string, tldr: string, creatorId: string, description: string, votecount: number, createdAt: any, createdAtBlock: number, deleted: boolean, expiryDate: any, expiryOption: IdeaExpiryOption, headerImage?: string | null, closed: boolean, consensus?: number | null, ideaStats?: { __typename?: 'IdeaStats', comments?: number | null } | null, tags?: Array<{ __typename?: 'IdeaTags', type: TagType, label: string }> | null, votes?: Array<{ __typename?: 'Vote', id: string, voterId: string, ideaId: string, direction: number, voterWeight: number, voter: { __typename?: 'User', wallet: string } }> | null, candidates?: Array<{ __typename?: 'Candidate', slug: string, proposerId: string, ideaId: string, id: string }> | null } | null };

export type SubmitIdeaVoteMutationVariables = Exact<{
  options: SubmitVoteInputOptions;
}>;


export type SubmitIdeaVoteMutation = { __typename?: 'Mutation', submitIdeaVote: { __typename?: 'Vote', id: string, voterId: string, ideaId: string, direction: number, voterWeight: number, voter: { __typename?: 'User', wallet: string } } };

export type SubmitIdeaMutationVariables = Exact<{
  options: SubmitIdeaInputOptions;
}>;


export type SubmitIdeaMutation = { __typename?: 'Mutation', submitIdea: { __typename?: 'Idea', id: string } };

export type SubmitCandidateMutationVariables = Exact<{
  options: SubmitCandidateInputOptions;
}>;


export type SubmitCandidateMutation = { __typename?: 'Mutation', submitCandidate: { __typename?: 'Candidate', id: string } };

export type SubmitIdeaCommentMutationVariables = Exact<{
  options: SubmitCommentInputOptions;
}>;


export type SubmitIdeaCommentMutation = { __typename?: 'Mutation', submitIdeaComment: { __typename?: 'Comment', id: string, body: string, parent?: { __typename?: 'CommentParent', id: string, body: string } | null } };

export type DeleteIdeaCommentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteIdeaCommentMutation = { __typename?: 'Mutation', deleteIdeaComment: { __typename?: 'Comment', body: string, authorId: string, deleted: boolean, id: string, parentId?: string | null, ideaId: string, createdAt: any, replies?: Array<{ __typename?: 'Comment', body: string, id: string, deleted: boolean, authorId: string, parentId?: string | null, ideaId: string, createdAt: any, replies?: Array<{ __typename?: 'Comment', body: string, id: string, deleted: boolean, authorId: string, parentId?: string | null, ideaId: string, createdAt: any }> | null }> | null } };

export type DeleteIdeaMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteIdeaMutation = { __typename?: 'Mutation', deleteIdea: { __typename?: 'DeleteDataResponse', id?: string | null, success?: boolean | null } };

export type GetPropLotProfileQueryVariables = Exact<{
  options: PropLotProfileInputOptions;
}>;


export type GetPropLotProfileQuery = { __typename?: 'Query', propLotProfile: { __typename?: 'PropLotProfileResponse', profile: { __typename?: 'PropLotUserProfile', user: { __typename?: 'User', wallet: string, userStats?: { __typename?: 'UserStats', totalVotes?: number | null, totalUpvotes?: number | null, totalDownvotes?: number | null, totalComments?: number | null, totalIdeas?: number | null, netVotesReceived?: number | null, downvotesReceived?: number | null, upvotesReceived?: number | null } | null } }, list?: Array<{ __typename?: 'Candidate' } | { __typename?: 'Comment', id: string, body: string, ideaId: string, parentId?: string | null, authorId: string, createdAt: any, deleted: boolean, parent?: { __typename?: 'CommentParent', id: string, body: string, ideaId: string, authorId: string, createdAt: any } | null, idea?: { __typename?: 'Idea', id: string, title: string, creatorId: string, closed: boolean, consensus?: number | null } | null } | { __typename?: 'Idea', id: string, title: string, tldr: string, creatorId: string, description: string, votecount: number, createdAt: any, createdAtBlock: number, deleted: boolean, expiryDate: any, expiryOption: IdeaExpiryOption, closed: boolean, consensus?: number | null, ideaStats?: { __typename?: 'IdeaStats', comments?: number | null } | null, tags?: Array<{ __typename?: 'IdeaTags', type: TagType, label: string }> | null, votes?: Array<{ __typename?: 'Vote', id: string, voterId: string, ideaId: string, direction: number, voterWeight: number, voter: { __typename?: 'User', wallet: string } }> | null }> | null, sortFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, tabFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, metadata: { __typename?: 'PropLotResponseMetadata', requestUUID: string, appliedFilters?: Array<string> | null } } };

export type FilterPropertiesFragment = { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> };

export type GetPropLotQueryVariables = Exact<{
  options: PropLotInputOptions;
}>;


export type GetPropLotQuery = { __typename?: 'Query', propLot: { __typename?: 'PropLotResponse', list?: Array<{ __typename?: 'Candidate', slug: string } | { __typename?: 'Comment' } | { __typename?: 'Idea', id: string, title: string, tldr: string, creatorId: string, description: string, votecount: number, createdAt: any, createdAtBlock: number, deleted: boolean, expiryDate: any, expiryOption: IdeaExpiryOption, closed: boolean, consensus?: number | null, ideaStats?: { __typename?: 'IdeaStats', comments?: number | null } | null, tags?: Array<{ __typename?: 'IdeaTags', type: TagType, label: string }> | null, votes?: Array<{ __typename?: 'Vote', id: string, voterId: string, ideaId: string, direction: number, voterWeight: number, voter: { __typename?: 'User', wallet: string } }> | null }> | null, sortFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, dateFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, tagFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, listFilter?: { __typename?: 'PropLotFilter', id: string, type: FilterType, label?: string | null, options: Array<{ __typename?: 'FilterOption', id: string, label?: string | null, selected: boolean, value: string, icon?: string | null, count?: number | null }> } | null, appliedFilterTags?: Array<{ __typename?: 'AppliedFilter', param: string, displayName: string }> | null, metadata: { __typename?: 'PropLotResponseMetadata', requestUUID: string, appliedFilters?: Array<string> | null } } };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'IdeaTags', label: string, type: TagType }> | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  PropLotListItems: ( Candidate ) | ( Comment ) | ( Idea );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AppliedFilter: ResolverTypeWrapper<AppliedFilter>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Candidate: ResolverTypeWrapper<Candidate>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentParent: ResolverTypeWrapper<CommentParent>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DeleteDataResponse: ResolverTypeWrapper<DeleteDataResponse>;
  FilterOption: ResolverTypeWrapper<FilterOption>;
  FilterType: FilterType;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Idea: ResolverTypeWrapper<Idea>;
  IdeaCommentInputOptions: IdeaCommentInputOptions;
  IdeaExpiryOption: IdeaExpiryOption;
  IdeaInputOptions: IdeaInputOptions;
  IdeaStats: ResolverTypeWrapper<IdeaStats>;
  IdeaTags: ResolverTypeWrapper<IdeaTags>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PropLotFilter: ResolverTypeWrapper<PropLotFilter>;
  PropLotInputOptions: PropLotInputOptions;
  PropLotListItems: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PropLotListItems']>;
  PropLotProfileInputOptions: PropLotProfileInputOptions;
  PropLotProfileResponse: ResolverTypeWrapper<Omit<PropLotProfileResponse, 'list'> & { list?: Maybe<Array<ResolversTypes['PropLotListItems']>> }>;
  PropLotResponse: ResolverTypeWrapper<Omit<PropLotResponse, 'list'> & { list?: Maybe<Array<ResolversTypes['PropLotListItems']>> }>;
  PropLotResponseMetadata: ResolverTypeWrapper<PropLotResponseMetadata>;
  PropLotUserProfile: ResolverTypeWrapper<PropLotUserProfile>;
  Query: ResolverTypeWrapper<{}>;
  SORT_TYPE: Sort_Type;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubmitCandidateInputOptions: SubmitCandidateInputOptions;
  SubmitCommentInputOptions: SubmitCommentInputOptions;
  SubmitIdeaInputOptions: SubmitIdeaInputOptions;
  SubmitVoteInputOptions: SubmitVoteInputOptions;
  TagType: TagType;
  User: ResolverTypeWrapper<User>;
  UserInputOptions: UserInputOptions;
  UserStats: ResolverTypeWrapper<UserStats>;
  Vote: ResolverTypeWrapper<Vote>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AppliedFilter: AppliedFilter;
  Boolean: Scalars['Boolean']['output'];
  Candidate: Candidate;
  Comment: Comment;
  CommentParent: CommentParent;
  Date: Scalars['Date']['output'];
  DeleteDataResponse: DeleteDataResponse;
  FilterOption: FilterOption;
  Float: Scalars['Float']['output'];
  Idea: Idea;
  IdeaCommentInputOptions: IdeaCommentInputOptions;
  IdeaInputOptions: IdeaInputOptions;
  IdeaStats: IdeaStats;
  IdeaTags: IdeaTags;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PropLotFilter: PropLotFilter;
  PropLotInputOptions: PropLotInputOptions;
  PropLotListItems: ResolversUnionTypes<ResolversParentTypes>['PropLotListItems'];
  PropLotProfileInputOptions: PropLotProfileInputOptions;
  PropLotProfileResponse: Omit<PropLotProfileResponse, 'list'> & { list?: Maybe<Array<ResolversParentTypes['PropLotListItems']>> };
  PropLotResponse: Omit<PropLotResponse, 'list'> & { list?: Maybe<Array<ResolversParentTypes['PropLotListItems']>> };
  PropLotResponseMetadata: PropLotResponseMetadata;
  PropLotUserProfile: PropLotUserProfile;
  Query: {};
  String: Scalars['String']['output'];
  SubmitCandidateInputOptions: SubmitCandidateInputOptions;
  SubmitCommentInputOptions: SubmitCommentInputOptions;
  SubmitIdeaInputOptions: SubmitIdeaInputOptions;
  SubmitVoteInputOptions: SubmitVoteInputOptions;
  User: User;
  UserInputOptions: UserInputOptions;
  UserStats: UserStats;
  Vote: Vote;
};

export type AppliedFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppliedFilter'] = ResolversParentTypes['AppliedFilter']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  param?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idea?: Resolver<Maybe<ResolversTypes['Idea']>, ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idea?: Resolver<Maybe<ResolversTypes['Idea']>, ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['CommentParent']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentParent'] = ResolversParentTypes['CommentParent']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteDataResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteDataResponse'] = ResolversParentTypes['DeleteDataResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilterOption'] = ResolversParentTypes['FilterOption']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdeaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Idea'] = ResolversParentTypes['Idea']> = {
  candidates?: Resolver<Maybe<Array<ResolversTypes['Candidate']>>, ParentType, ContextType>;
  closed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  consensus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  expiryOption?: Resolver<ResolversTypes['IdeaExpiryOption'], ParentType, ContextType>;
  headerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ideaStats?: Resolver<Maybe<ResolversTypes['IdeaStats']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IdeaTags']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tldr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votecount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votes?: Resolver<Maybe<Array<ResolversTypes['Vote']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdeaStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdeaStats'] = ResolversParentTypes['IdeaStats']> = {
  comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdeaTagsResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdeaTags'] = ResolversParentTypes['IdeaTags']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TagType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteIdea?: Resolver<ResolversTypes['DeleteDataResponse'], ParentType, ContextType, RequireFields<MutationDeleteIdeaArgs, 'id'>>;
  deleteIdeaComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationDeleteIdeaCommentArgs, 'id'>>;
  submitCandidate?: Resolver<ResolversTypes['Candidate'], ParentType, ContextType, RequireFields<MutationSubmitCandidateArgs, 'options'>>;
  submitIdea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType, RequireFields<MutationSubmitIdeaArgs, 'options'>>;
  submitIdeaComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationSubmitIdeaCommentArgs, 'options'>>;
  submitIdeaVote?: Resolver<ResolversTypes['Vote'], ParentType, ContextType, RequireFields<MutationSubmitIdeaVoteArgs, 'options'>>;
};

export type PropLotFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotFilter'] = ResolversParentTypes['PropLotFilter']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['FilterOption']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FilterType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropLotListItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotListItems'] = ResolversParentTypes['PropLotListItems']> = {
  __resolveType: TypeResolveFn<'Candidate' | 'Comment' | 'Idea', ParentType, ContextType>;
};

export type PropLotProfileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotProfileResponse'] = ResolversParentTypes['PropLotProfileResponse']> = {
  list?: Resolver<Maybe<Array<ResolversTypes['PropLotListItems']>>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['PropLotResponseMetadata'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['PropLotUserProfile'], ParentType, ContextType>;
  sortFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  tabFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropLotResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotResponse'] = ResolversParentTypes['PropLotResponse']> = {
  appliedFilterTags?: Resolver<Maybe<Array<ResolversTypes['AppliedFilter']>>, ParentType, ContextType>;
  dateFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  list?: Resolver<Maybe<Array<ResolversTypes['PropLotListItems']>>, ParentType, ContextType>;
  listFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['PropLotResponseMetadata'], ParentType, ContextType>;
  sortFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  tagFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropLotResponseMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotResponseMetadata'] = ResolversParentTypes['PropLotResponseMetadata']> = {
  appliedFilters?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  requestUUID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropLotUserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropLotUserProfile'] = ResolversParentTypes['PropLotUserProfile']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  getIdea?: Resolver<Maybe<ResolversTypes['Idea']>, ParentType, ContextType, RequireFields<QueryGetIdeaArgs, 'options'>>;
  getIdeaComments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<QueryGetIdeaCommentsArgs, 'options'>>;
  getIdeas?: Resolver<Maybe<Array<ResolversTypes['Idea']>>, ParentType, ContextType, RequireFields<QueryGetIdeasArgs, 'options'>>;
  getPropLot?: Resolver<ResolversTypes['PropLotResponse'], ParentType, ContextType, RequireFields<QueryGetPropLotArgs, 'options'>>;
  getPropLotProfile?: Resolver<ResolversTypes['PropLotProfileResponse'], ParentType, ContextType, RequireFields<QueryGetPropLotProfileArgs, 'options'>>;
  getTags?: Resolver<Maybe<Array<ResolversTypes['IdeaTags']>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'options'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  userStats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = {
  downvotesReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  netVotesReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalComments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDownvotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalIdeas?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalUpvotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  upvotesReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  direction?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  voterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voterWeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AppliedFilter?: AppliedFilterResolvers<ContextType>;
  Candidate?: CandidateResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentParent?: CommentParentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeleteDataResponse?: DeleteDataResponseResolvers<ContextType>;
  FilterOption?: FilterOptionResolvers<ContextType>;
  Idea?: IdeaResolvers<ContextType>;
  IdeaStats?: IdeaStatsResolvers<ContextType>;
  IdeaTags?: IdeaTagsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PropLotFilter?: PropLotFilterResolvers<ContextType>;
  PropLotListItems?: PropLotListItemsResolvers<ContextType>;
  PropLotProfileResponse?: PropLotProfileResponseResolvers<ContextType>;
  PropLotResponse?: PropLotResponseResolvers<ContextType>;
  PropLotResponseMetadata?: PropLotResponseMetadataResolvers<ContextType>;
  PropLotUserProfile?: PropLotUserProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
};

