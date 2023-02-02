import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Comment = {
  __typename?: 'Comment';
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  idea?: Maybe<Idea>;
  ideaId: Scalars['Int'];
  parent?: Maybe<CommentParent>;
  parentId?: Maybe<Scalars['Int']>;
  replies?: Maybe<Array<Comment>>;
};

export type CommentParent = {
  __typename?: 'CommentParent';
  authorId: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  ideaId: Scalars['Int'];
};

export type FilterOption = {
  __typename?: 'FilterOption';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  selected: Scalars['Boolean'];
  value: Scalars['String'];
};

export enum FilterType {
  MultiSelect = 'MULTI_SELECT',
  SingleSelect = 'SINGLE_SELECT'
}

export type Idea = {
  __typename?: 'Idea';
  closed: Scalars['Boolean'];
  comments?: Maybe<Array<Comment>>;
  consensus?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Date'];
  createdAtBlock: Scalars['Int'];
  creatorId: Scalars['String'];
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Int'];
  ideaStats?: Maybe<IdeaStats>;
  tags?: Maybe<Array<IdeaTags>>;
  title: Scalars['String'];
  tldr: Scalars['String'];
  votecount: Scalars['Int'];
  votes?: Maybe<Array<Vote>>;
};

export type IdeaInputOptions = {
  ideaId?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Sort_Type>;
};

export type IdeaStats = {
  __typename?: 'IdeaStats';
  comments?: Maybe<Scalars['Int']>;
};

export type IdeaTags = {
  __typename?: 'IdeaTags';
  label: Scalars['String'];
  type: TagType;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitIdea: Idea;
  submitIdeaVote: Vote;
};


export type MutationSubmitIdeaArgs = {
  options: SubmitIdeaInputOptions;
};


export type MutationSubmitIdeaVoteArgs = {
  options: SubmitVoteInputOptions;
};

export type PropLotFilter = {
  __typename?: 'PropLotFilter';
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  options: Array<FilterOption>;
  type: FilterType;
};

export type PropLotInputOptions = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  requestUUID: Scalars['String'];
};

export type PropLotListItems = Comment | Idea;

export type PropLotProfileInputOptions = {
  filters?: InputMaybe<Array<Scalars['String']>>;
  requestUUID: Scalars['String'];
  wallet: Scalars['String'];
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
  dateFilter?: Maybe<PropLotFilter>;
  ideas?: Maybe<Array<Idea>>;
  metadata: PropLotResponseMetadata;
  sortFilter?: Maybe<PropLotFilter>;
  tagFilter?: Maybe<PropLotFilter>;
};

export type PropLotResponseMetadata = {
  __typename?: 'PropLotResponseMetadata';
  appliedFilters?: Maybe<Array<Scalars['String']>>;
  requestUUID: Scalars['String'];
};

export type PropLotUserProfile = {
  __typename?: 'PropLotUserProfile';
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getIdea?: Maybe<Idea>;
  getIdeas?: Maybe<Array<Idea>>;
  getPropLot: PropLotResponse;
  getPropLotProfile: PropLotProfileResponse;
  getUser?: Maybe<User>;
};


export type QueryGetIdeaArgs = {
  options: IdeaInputOptions;
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
  Latest = 'LATEST',
  Oldest = 'OLDEST',
  VotesAsc = 'VOTES_ASC',
  VotesDesc = 'VOTES_DESC'
}

export type SubmitIdeaInputOptions = {
  description: Scalars['String'];
  tags?: InputMaybe<Array<TagType>>;
  title: Scalars['String'];
  tldr: Scalars['String'];
};

export type SubmitVoteInputOptions = {
  direction: Scalars['Int'];
  ideaId: Scalars['Int'];
};

export enum TagType {
  Archived = 'ARCHIVED',
  Closed = 'CLOSED',
  Community = 'COMMUNITY',
  Consensus = 'CONSENSUS',
  Discussion = 'DISCUSSION',
  Governance = 'GOVERNANCE',
  Info = 'INFO',
  New = 'NEW',
  Nouns = 'NOUNS',
  Other = 'OTHER',
  Quorum = 'QUORUM',
  Request = 'REQUEST',
  Suggestion = 'SUGGESTION'
}

export type User = {
  __typename?: 'User';
  userStats?: Maybe<UserStats>;
  wallet: Scalars['String'];
};

export type UserInputOptions = {
  wallet: Scalars['String'];
};

export type UserStats = {
  __typename?: 'UserStats';
  downvotesReceived?: Maybe<Scalars['Int']>;
  netVotesReceived?: Maybe<Scalars['Int']>;
  totalComments?: Maybe<Scalars['Int']>;
  totalDownvotes?: Maybe<Scalars['Int']>;
  totalIdeas?: Maybe<Scalars['Int']>;
  totalUpvotes?: Maybe<Scalars['Int']>;
  totalVotes?: Maybe<Scalars['Int']>;
  upvotesReceived?: Maybe<Scalars['Int']>;
};

export type Vote = {
  __typename?: 'Vote';
  direction: Scalars['Int'];
  id: Scalars['Int'];
  ideaId: Scalars['Int'];
  voter: User;
  voterId: Scalars['String'];
  voterWeight: Scalars['Int'];
};



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

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentParent: ResolverTypeWrapper<CommentParent>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  FilterOption: ResolverTypeWrapper<FilterOption>;
  FilterType: FilterType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Idea: ResolverTypeWrapper<Idea>;
  IdeaInputOptions: IdeaInputOptions;
  IdeaStats: ResolverTypeWrapper<IdeaStats>;
  IdeaTags: ResolverTypeWrapper<IdeaTags>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PropLotFilter: ResolverTypeWrapper<PropLotFilter>;
  PropLotInputOptions: PropLotInputOptions;
  PropLotListItems: ResolversTypes['Comment'] | ResolversTypes['Idea'];
  PropLotProfileInputOptions: PropLotProfileInputOptions;
  PropLotProfileResponse: ResolverTypeWrapper<Omit<PropLotProfileResponse, 'list'> & { list?: Maybe<Array<ResolversTypes['PropLotListItems']>> }>;
  PropLotResponse: ResolverTypeWrapper<PropLotResponse>;
  PropLotResponseMetadata: ResolverTypeWrapper<PropLotResponseMetadata>;
  PropLotUserProfile: ResolverTypeWrapper<PropLotUserProfile>;
  Query: ResolverTypeWrapper<{}>;
  SORT_TYPE: Sort_Type;
  String: ResolverTypeWrapper<Scalars['String']>;
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
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  CommentParent: CommentParent;
  Date: Scalars['Date'];
  FilterOption: FilterOption;
  Float: Scalars['Float'];
  Idea: Idea;
  IdeaInputOptions: IdeaInputOptions;
  IdeaStats: IdeaStats;
  IdeaTags: IdeaTags;
  Int: Scalars['Int'];
  Mutation: {};
  PropLotFilter: PropLotFilter;
  PropLotInputOptions: PropLotInputOptions;
  PropLotListItems: ResolversParentTypes['Comment'] | ResolversParentTypes['Idea'];
  PropLotProfileInputOptions: PropLotProfileInputOptions;
  PropLotProfileResponse: Omit<PropLotProfileResponse, 'list'> & { list?: Maybe<Array<ResolversParentTypes['PropLotListItems']>> };
  PropLotResponse: PropLotResponse;
  PropLotResponseMetadata: PropLotResponseMetadata;
  PropLotUserProfile: PropLotUserProfile;
  Query: {};
  String: Scalars['String'];
  SubmitIdeaInputOptions: SubmitIdeaInputOptions;
  SubmitVoteInputOptions: SubmitVoteInputOptions;
  User: User;
  UserInputOptions: UserInputOptions;
  UserStats: UserStats;
  Vote: Vote;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idea?: Resolver<Maybe<ResolversTypes['Idea']>, ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['CommentParent']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentParent'] = ResolversParentTypes['CommentParent']> = {
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FilterOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilterOption'] = ResolversParentTypes['FilterOption']> = {
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdeaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Idea'] = ResolversParentTypes['Idea']> = {
  closed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  consensus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  submitIdea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType, RequireFields<MutationSubmitIdeaArgs, 'options'>>;
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
  __resolveType: TypeResolveFn<'Comment' | 'Idea', ParentType, ContextType>;
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
  dateFilter?: Resolver<Maybe<ResolversTypes['PropLotFilter']>, ParentType, ContextType>;
  ideas?: Resolver<Maybe<Array<ResolversTypes['Idea']>>, ParentType, ContextType>;
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
  getIdeas?: Resolver<Maybe<Array<ResolversTypes['Idea']>>, ParentType, ContextType, RequireFields<QueryGetIdeasArgs, 'options'>>;
  getPropLot?: Resolver<ResolversTypes['PropLotResponse'], ParentType, ContextType, RequireFields<QueryGetPropLotArgs, 'options'>>;
  getPropLotProfile?: Resolver<ResolversTypes['PropLotProfileResponse'], ParentType, ContextType, RequireFields<QueryGetPropLotProfileArgs, 'options'>>;
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
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  voterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voterWeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentParent?: CommentParentResolvers<ContextType>;
  Date?: GraphQLScalarType;
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

