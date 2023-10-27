import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Account = {
  __typename?: 'Account';
  /** Delegate address of the token holder which will participate in votings. Delegates don't need to hold any tokens and can even be the token holder itself. */
  delegate?: Maybe<Delegate>;
  /** An Account is any address that holds any amount of Nouns, the id used is the blockchain address. */
  id: Scalars['ID'];
  /** The Nouns owned by this account */
  nouns: Array<Noun>;
  /** Noun balance of this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  tokenBalance: Scalars['BigInt'];
  /** Noun balance of this address expressed in the smallest unit of the Nouns ERC721 Token */
  tokenBalanceRaw: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  totalTokensHeld: Scalars['BigInt'];
  /** Total amount of Nouns ever held by this address expressed in the smallest unit of the Nouns ERC721 Token */
  totalTokensHeldRaw: Scalars['BigInt'];
};


export type AccountNounsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Noun_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_?: InputMaybe<Delegate_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_ends_with?: InputMaybe<Scalars['String']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_not?: InputMaybe<Scalars['String']>;
  delegate_not_contains?: InputMaybe<Scalars['String']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegate_starts_with?: InputMaybe<Scalars['String']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_?: InputMaybe<Noun_Filter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  tokenBalance?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalanceRaw_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeldRaw_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeldRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokensHeld_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_not?: InputMaybe<Scalars['BigInt']>;
  totalTokensHeld_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Account_OrderBy {
  delegate = 'delegate',
  delegate__delegatedVotes = 'delegate__delegatedVotes',
  delegate__delegatedVotesRaw = 'delegate__delegatedVotesRaw',
  delegate__id = 'delegate__id',
  delegate__tokenHoldersRepresentedAmount = 'delegate__tokenHoldersRepresentedAmount',
  id = 'id',
  nouns = 'nouns',
  tokenBalance = 'tokenBalance',
  tokenBalanceRaw = 'tokenBalanceRaw',
  totalTokensHeld = 'totalTokensHeld',
  totalTokensHeldRaw = 'totalTokensHeldRaw'
}

export type Auction = {
  __typename?: 'Auction';
  /** The current highest bid amount */
  amount: Scalars['BigInt'];
  /** The account with the current highest bid */
  bidder?: Maybe<Account>;
  /** The auction bids */
  bids: Array<Bid>;
  /** The time that the auction is scheduled to end */
  endTime: Scalars['BigInt'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The Noun */
  noun: Noun;
  /** Whether or not the auction has been settled */
  settled: Scalars['Boolean'];
  /** The time that the auction started */
  startTime: Scalars['BigInt'];
};


export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Bid_Filter>;
};

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_?: InputMaybe<Account_Filter>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bids_?: InputMaybe<Bid_Filter>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  settled?: InputMaybe<Scalars['Boolean']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  settled_not?: InputMaybe<Scalars['Boolean']>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Auction_OrderBy {
  amount = 'amount',
  bidder = 'bidder',
  bidder__id = 'bidder__id',
  bidder__tokenBalance = 'bidder__tokenBalance',
  bidder__tokenBalanceRaw = 'bidder__tokenBalanceRaw',
  bidder__totalTokensHeld = 'bidder__totalTokensHeld',
  bidder__totalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  bids = 'bids',
  endTime = 'endTime',
  id = 'id',
  noun = 'noun',
  noun__id = 'noun__id',
  settled = 'settled',
  startTime = 'startTime'
}

export type Bid = {
  __typename?: 'Bid';
  /** Bid amount */
  amount: Scalars['BigInt'];
  /** The auction being bid in */
  auction: Auction;
  /** Bidder account */
  bidder?: Maybe<Account>;
  /** Block number of the bid */
  blockNumber: Scalars['BigInt'];
  /** The timestamp of the block the bid is in */
  blockTimestamp: Scalars['BigInt'];
  /** Bid transaction hash */
  id: Scalars['ID'];
  /** The Noun being bid on */
  noun: Noun;
  /** Index of transaction within block */
  txIndex: Scalars['BigInt'];
};

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  auction?: InputMaybe<Scalars['String']>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars['String']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_ends_with?: InputMaybe<Scalars['String']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_gt?: InputMaybe<Scalars['String']>;
  auction_gte?: InputMaybe<Scalars['String']>;
  auction_in?: InputMaybe<Array<Scalars['String']>>;
  auction_lt?: InputMaybe<Scalars['String']>;
  auction_lte?: InputMaybe<Scalars['String']>;
  auction_not?: InputMaybe<Scalars['String']>;
  auction_not_contains?: InputMaybe<Scalars['String']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_starts_with?: InputMaybe<Scalars['String']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_?: InputMaybe<Account_Filter>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  txIndex?: InputMaybe<Scalars['BigInt']>;
  txIndex_gt?: InputMaybe<Scalars['BigInt']>;
  txIndex_gte?: InputMaybe<Scalars['BigInt']>;
  txIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txIndex_lt?: InputMaybe<Scalars['BigInt']>;
  txIndex_lte?: InputMaybe<Scalars['BigInt']>;
  txIndex_not?: InputMaybe<Scalars['BigInt']>;
  txIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Bid_OrderBy {
  amount = 'amount',
  auction = 'auction',
  auction__amount = 'auction__amount',
  auction__endTime = 'auction__endTime',
  auction__id = 'auction__id',
  auction__settled = 'auction__settled',
  auction__startTime = 'auction__startTime',
  bidder = 'bidder',
  bidder__id = 'bidder__id',
  bidder__tokenBalance = 'bidder__tokenBalance',
  bidder__tokenBalanceRaw = 'bidder__tokenBalanceRaw',
  bidder__totalTokensHeld = 'bidder__totalTokensHeld',
  bidder__totalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  noun = 'noun',
  noun__id = 'noun__id',
  txIndex = 'txIndex'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CandidateFeedback = {
  __typename?: 'CandidateFeedback';
  /** The proposal candidate this feedback is provided on */
  candidate: ProposalCandidate;
  /** The feedback's creation block */
  createdBlock: Scalars['BigInt'];
  /** This feedback's creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID'];
  /** The optional feedback reason free text */
  reason?: Maybe<Scalars['String']>;
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int'];
  /** The voter account providing the feedback */
  voter: Delegate;
  /** Amount of votes voter had when feedback was submitted */
  votes: Scalars['BigInt'];
};

export type CandidateFeedback_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CandidateFeedback_Filter>>>;
  candidate?: InputMaybe<Scalars['String']>;
  candidate_?: InputMaybe<ProposalCandidate_Filter>;
  candidate_contains?: InputMaybe<Scalars['String']>;
  candidate_contains_nocase?: InputMaybe<Scalars['String']>;
  candidate_ends_with?: InputMaybe<Scalars['String']>;
  candidate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  candidate_gt?: InputMaybe<Scalars['String']>;
  candidate_gte?: InputMaybe<Scalars['String']>;
  candidate_in?: InputMaybe<Array<Scalars['String']>>;
  candidate_lt?: InputMaybe<Scalars['String']>;
  candidate_lte?: InputMaybe<Scalars['String']>;
  candidate_not?: InputMaybe<Scalars['String']>;
  candidate_not_contains?: InputMaybe<Scalars['String']>;
  candidate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  candidate_not_ends_with?: InputMaybe<Scalars['String']>;
  candidate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  candidate_not_in?: InputMaybe<Array<Scalars['String']>>;
  candidate_not_starts_with?: InputMaybe<Scalars['String']>;
  candidate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  candidate_starts_with?: InputMaybe<Scalars['String']>;
  candidate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<CandidateFeedback_Filter>>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  supportDetailed?: InputMaybe<Scalars['Int']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum CandidateFeedback_OrderBy {
  candidate = 'candidate',
  candidate__canceled = 'candidate__canceled',
  candidate__canceledBlock = 'candidate__canceledBlock',
  candidate__canceledTimestamp = 'candidate__canceledTimestamp',
  candidate__createdBlock = 'candidate__createdBlock',
  candidate__createdTimestamp = 'candidate__createdTimestamp',
  candidate__createdTransactionHash = 'candidate__createdTransactionHash',
  candidate__id = 'candidate__id',
  candidate__lastUpdatedBlock = 'candidate__lastUpdatedBlock',
  candidate__lastUpdatedTimestamp = 'candidate__lastUpdatedTimestamp',
  candidate__proposer = 'candidate__proposer',
  candidate__slug = 'candidate__slug',
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  id = 'id',
  reason = 'reason',
  supportDetailed = 'supportDetailed',
  voter = 'voter',
  voter__delegatedVotes = 'voter__delegatedVotes',
  voter__delegatedVotesRaw = 'voter__delegatedVotesRaw',
  voter__id = 'voter__id',
  voter__tokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  votes = 'votes'
}

export type Delegate = {
  __typename?: 'Delegate';
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** A Delegate is any address that has been delegated with voting tokens by a token holder, id is the blockchain address of said delegate */
  id: Scalars['ID'];
  /** Nouns that this delegate represents */
  nounsRepresented: Array<Noun>;
  /** Proposals that the delegate has created */
  proposals: Array<Proposal>;
  /** Token holders that this delegate represents */
  tokenHoldersRepresented: Array<Account>;
  tokenHoldersRepresentedAmount: Scalars['Int'];
  /** Votes that a delegate has made in different proposals */
  votes: Array<Vote>;
};


export type DelegateNounsRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Noun_Filter>;
};


export type DelegateProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Proposal_Filter>;
};


export type DelegateTokenHoldersRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Account_Filter>;
};


export type DelegateVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Delegate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegate_Filter>>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nounsRepresented?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_?: InputMaybe<Noun_Filter>;
  nounsRepresented_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nounsRepresented_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  or?: InputMaybe<Array<InputMaybe<Delegate_Filter>>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  tokenHoldersRepresentedAmount?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_gte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenHoldersRepresentedAmount_lt?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_lte?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_not?: InputMaybe<Scalars['Int']>;
  tokenHoldersRepresentedAmount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenHoldersRepresented_?: InputMaybe<Account_Filter>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Delegate_OrderBy {
  delegatedVotes = 'delegatedVotes',
  delegatedVotesRaw = 'delegatedVotesRaw',
  id = 'id',
  nounsRepresented = 'nounsRepresented',
  proposals = 'proposals',
  tokenHoldersRepresented = 'tokenHoldersRepresented',
  tokenHoldersRepresentedAmount = 'tokenHoldersRepresentedAmount',
  votes = 'votes'
}

export type DelegationEvent = {
  __typename?: 'DelegationEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt'];
  /** The txn hash of this event + nounId */
  id: Scalars['ID'];
  /** New delegate address */
  newDelegate: Delegate;
  /** The Noun being delegated */
  noun: Noun;
  /** Previous delegate address */
  previousDelegate: Delegate;
};

export type DelegationEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newDelegate?: InputMaybe<Scalars['String']>;
  newDelegate_?: InputMaybe<Delegate_Filter>;
  newDelegate_contains?: InputMaybe<Scalars['String']>;
  newDelegate_contains_nocase?: InputMaybe<Scalars['String']>;
  newDelegate_ends_with?: InputMaybe<Scalars['String']>;
  newDelegate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newDelegate_gt?: InputMaybe<Scalars['String']>;
  newDelegate_gte?: InputMaybe<Scalars['String']>;
  newDelegate_in?: InputMaybe<Array<Scalars['String']>>;
  newDelegate_lt?: InputMaybe<Scalars['String']>;
  newDelegate_lte?: InputMaybe<Scalars['String']>;
  newDelegate_not?: InputMaybe<Scalars['String']>;
  newDelegate_not_contains?: InputMaybe<Scalars['String']>;
  newDelegate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newDelegate_not_ends_with?: InputMaybe<Scalars['String']>;
  newDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newDelegate_not_in?: InputMaybe<Array<Scalars['String']>>;
  newDelegate_not_starts_with?: InputMaybe<Scalars['String']>;
  newDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newDelegate_starts_with?: InputMaybe<Scalars['String']>;
  newDelegate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<DelegationEvent_Filter>>>;
  previousDelegate?: InputMaybe<Scalars['String']>;
  previousDelegate_?: InputMaybe<Delegate_Filter>;
  previousDelegate_contains?: InputMaybe<Scalars['String']>;
  previousDelegate_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDelegate_ends_with?: InputMaybe<Scalars['String']>;
  previousDelegate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDelegate_gt?: InputMaybe<Scalars['String']>;
  previousDelegate_gte?: InputMaybe<Scalars['String']>;
  previousDelegate_in?: InputMaybe<Array<Scalars['String']>>;
  previousDelegate_lt?: InputMaybe<Scalars['String']>;
  previousDelegate_lte?: InputMaybe<Scalars['String']>;
  previousDelegate_not?: InputMaybe<Scalars['String']>;
  previousDelegate_not_contains?: InputMaybe<Scalars['String']>;
  previousDelegate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousDelegate_not_ends_with?: InputMaybe<Scalars['String']>;
  previousDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousDelegate_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousDelegate_not_starts_with?: InputMaybe<Scalars['String']>;
  previousDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousDelegate_starts_with?: InputMaybe<Scalars['String']>;
  previousDelegate_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum DelegationEvent_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newDelegate = 'newDelegate',
  newDelegate__delegatedVotes = 'newDelegate__delegatedVotes',
  newDelegate__delegatedVotesRaw = 'newDelegate__delegatedVotesRaw',
  newDelegate__id = 'newDelegate__id',
  newDelegate__tokenHoldersRepresentedAmount = 'newDelegate__tokenHoldersRepresentedAmount',
  noun = 'noun',
  noun__id = 'noun__id',
  previousDelegate = 'previousDelegate',
  previousDelegate__delegatedVotes = 'previousDelegate__delegatedVotes',
  previousDelegate__delegatedVotesRaw = 'previousDelegate__delegatedVotesRaw',
  previousDelegate__id = 'previousDelegate__id',
  previousDelegate__tokenHoldersRepresentedAmount = 'previousDelegate__tokenHoldersRepresentedAmount'
}

export type DynamicQuorumParams = {
  __typename?: 'DynamicQuorumParams';
  /** The block from which proposals are using DQ, based on when we first see configuration being set */
  dynamicQuorumStartBlock?: Maybe<Scalars['BigInt']>;
  /** Unique entity used to store the latest dymanic quorum params */
  id: Scalars['ID'];
  /** Max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int'];
  /** Min quorum basis points */
  minQuorumVotesBPS: Scalars['Int'];
  /** The dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt'];
};

export type DynamicQuorumParams_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DynamicQuorumParams_Filter>>>;
  dynamicQuorumStartBlock?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_gt?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_gte?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dynamicQuorumStartBlock_lt?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_lte?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_not?: InputMaybe<Scalars['BigInt']>;
  dynamicQuorumStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<DynamicQuorumParams_Filter>>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DynamicQuorumParams_OrderBy {
  dynamicQuorumStartBlock = 'dynamicQuorumStartBlock',
  id = 'id',
  maxQuorumVotesBPS = 'maxQuorumVotesBPS',
  minQuorumVotesBPS = 'minQuorumVotesBPS',
  quorumCoefficient = 'quorumCoefficient'
}

export type EscrowDeposit = {
  __typename?: 'EscrowDeposit';
  createdAt: Scalars['BigInt'];
  fork: Fork;
  id: Scalars['ID'];
  owner: Delegate;
  proposalIDs: Array<Scalars['BigInt']>;
  reason?: Maybe<Scalars['String']>;
  tokenIDs: Array<Scalars['BigInt']>;
};

export type EscrowDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowDeposit_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fork?: InputMaybe<Scalars['String']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_ends_with?: InputMaybe<Scalars['String']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_gt?: InputMaybe<Scalars['String']>;
  fork_gte?: InputMaybe<Scalars['String']>;
  fork_in?: InputMaybe<Array<Scalars['String']>>;
  fork_lt?: InputMaybe<Scalars['String']>;
  fork_lte?: InputMaybe<Scalars['String']>;
  fork_not?: InputMaybe<Scalars['String']>;
  fork_not_contains?: InputMaybe<Scalars['String']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_starts_with?: InputMaybe<Scalars['String']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<EscrowDeposit_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposalIDs?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum EscrowDeposit_OrderBy {
  createdAt = 'createdAt',
  fork = 'fork',
  fork__executed = 'fork__executed',
  fork__executedAt = 'fork__executedAt',
  fork__forkID = 'fork__forkID',
  fork__forkToken = 'fork__forkToken',
  fork__forkTreasury = 'fork__forkTreasury',
  fork__forkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  fork__id = 'fork__id',
  fork__tokensForkingCount = 'fork__tokensForkingCount',
  fork__tokensInEscrowCount = 'fork__tokensInEscrowCount',
  id = 'id',
  owner = 'owner',
  owner__delegatedVotes = 'owner__delegatedVotes',
  owner__delegatedVotesRaw = 'owner__delegatedVotesRaw',
  owner__id = 'owner__id',
  owner__tokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  proposalIDs = 'proposalIDs',
  reason = 'reason',
  tokenIDs = 'tokenIDs'
}

export type EscrowWithdrawal = {
  __typename?: 'EscrowWithdrawal';
  createdAt: Scalars['BigInt'];
  fork: Fork;
  id: Scalars['ID'];
  owner: Delegate;
  tokenIDs: Array<Scalars['BigInt']>;
};

export type EscrowWithdrawal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowWithdrawal_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fork?: InputMaybe<Scalars['String']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_ends_with?: InputMaybe<Scalars['String']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_gt?: InputMaybe<Scalars['String']>;
  fork_gte?: InputMaybe<Scalars['String']>;
  fork_in?: InputMaybe<Array<Scalars['String']>>;
  fork_lt?: InputMaybe<Scalars['String']>;
  fork_lte?: InputMaybe<Scalars['String']>;
  fork_not?: InputMaybe<Scalars['String']>;
  fork_not_contains?: InputMaybe<Scalars['String']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_starts_with?: InputMaybe<Scalars['String']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<EscrowWithdrawal_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum EscrowWithdrawal_OrderBy {
  createdAt = 'createdAt',
  fork = 'fork',
  fork__executed = 'fork__executed',
  fork__executedAt = 'fork__executedAt',
  fork__forkID = 'fork__forkID',
  fork__forkToken = 'fork__forkToken',
  fork__forkTreasury = 'fork__forkTreasury',
  fork__forkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  fork__id = 'fork__id',
  fork__tokensForkingCount = 'fork__tokensForkingCount',
  fork__tokensInEscrowCount = 'fork__tokensInEscrowCount',
  id = 'id',
  owner = 'owner',
  owner__delegatedVotes = 'owner__delegatedVotes',
  owner__delegatedVotesRaw = 'owner__delegatedVotesRaw',
  owner__id = 'owner__id',
  owner__tokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  tokenIDs = 'tokenIDs'
}

export type EscrowedNoun = {
  __typename?: 'EscrowedNoun';
  escrowDeposit: EscrowDeposit;
  fork: Fork;
  id: Scalars['ID'];
  noun: Noun;
  owner: Delegate;
};

export type EscrowedNoun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EscrowedNoun_Filter>>>;
  escrowDeposit?: InputMaybe<Scalars['String']>;
  escrowDeposit_?: InputMaybe<EscrowDeposit_Filter>;
  escrowDeposit_contains?: InputMaybe<Scalars['String']>;
  escrowDeposit_contains_nocase?: InputMaybe<Scalars['String']>;
  escrowDeposit_ends_with?: InputMaybe<Scalars['String']>;
  escrowDeposit_ends_with_nocase?: InputMaybe<Scalars['String']>;
  escrowDeposit_gt?: InputMaybe<Scalars['String']>;
  escrowDeposit_gte?: InputMaybe<Scalars['String']>;
  escrowDeposit_in?: InputMaybe<Array<Scalars['String']>>;
  escrowDeposit_lt?: InputMaybe<Scalars['String']>;
  escrowDeposit_lte?: InputMaybe<Scalars['String']>;
  escrowDeposit_not?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_contains?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_contains_nocase?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_ends_with?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_in?: InputMaybe<Array<Scalars['String']>>;
  escrowDeposit_not_starts_with?: InputMaybe<Scalars['String']>;
  escrowDeposit_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  escrowDeposit_starts_with?: InputMaybe<Scalars['String']>;
  escrowDeposit_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork?: InputMaybe<Scalars['String']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_ends_with?: InputMaybe<Scalars['String']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_gt?: InputMaybe<Scalars['String']>;
  fork_gte?: InputMaybe<Scalars['String']>;
  fork_in?: InputMaybe<Array<Scalars['String']>>;
  fork_lt?: InputMaybe<Scalars['String']>;
  fork_lte?: InputMaybe<Scalars['String']>;
  fork_not?: InputMaybe<Scalars['String']>;
  fork_not_contains?: InputMaybe<Scalars['String']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_starts_with?: InputMaybe<Scalars['String']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<EscrowedNoun_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum EscrowedNoun_OrderBy {
  escrowDeposit = 'escrowDeposit',
  escrowDeposit__createdAt = 'escrowDeposit__createdAt',
  escrowDeposit__id = 'escrowDeposit__id',
  escrowDeposit__reason = 'escrowDeposit__reason',
  fork = 'fork',
  fork__executed = 'fork__executed',
  fork__executedAt = 'fork__executedAt',
  fork__forkID = 'fork__forkID',
  fork__forkToken = 'fork__forkToken',
  fork__forkTreasury = 'fork__forkTreasury',
  fork__forkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  fork__id = 'fork__id',
  fork__tokensForkingCount = 'fork__tokensForkingCount',
  fork__tokensInEscrowCount = 'fork__tokensInEscrowCount',
  id = 'id',
  noun = 'noun',
  noun__id = 'noun__id',
  owner = 'owner',
  owner__delegatedVotes = 'owner__delegatedVotes',
  owner__delegatedVotesRaw = 'owner__delegatedVotesRaw',
  owner__id = 'owner__id',
  owner__tokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount'
}

export type Fork = {
  __typename?: 'Fork';
  escrowDeposits: Array<EscrowDeposit>;
  escrowWithdrawals: Array<EscrowWithdrawal>;
  escrowedNouns: Array<EscrowedNoun>;
  executed?: Maybe<Scalars['Boolean']>;
  executedAt?: Maybe<Scalars['BigInt']>;
  /** The fork ID as int, to make it easier to query for the latest fork */
  forkID: Scalars['BigInt'];
  forkToken?: Maybe<Scalars['Bytes']>;
  forkTreasury?: Maybe<Scalars['Bytes']>;
  forkingPeriodEndTimestamp?: Maybe<Scalars['BigInt']>;
  /** The fork ID given by the escrow contract */
  id: Scalars['ID'];
  joinedNouns: Array<ForkJoinedNoun>;
  tokensForkingCount: Scalars['Int'];
  tokensInEscrowCount: Scalars['Int'];
};


export type ForkEscrowDepositsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EscrowDeposit_Filter>;
};


export type ForkEscrowWithdrawalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EscrowWithdrawal_Filter>;
};


export type ForkEscrowedNounsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EscrowedNoun_Filter>;
};


export type ForkJoinedNounsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ForkJoinedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ForkJoinedNoun_Filter>;
};

export type ForkJoin = {
  __typename?: 'ForkJoin';
  createdAt: Scalars['BigInt'];
  fork: Fork;
  id: Scalars['ID'];
  owner: Delegate;
  proposalIDs: Array<Scalars['BigInt']>;
  reason?: Maybe<Scalars['String']>;
  tokenIDs: Array<Scalars['BigInt']>;
};

export type ForkJoin_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ForkJoin_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fork?: InputMaybe<Scalars['String']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_ends_with?: InputMaybe<Scalars['String']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_gt?: InputMaybe<Scalars['String']>;
  fork_gte?: InputMaybe<Scalars['String']>;
  fork_in?: InputMaybe<Array<Scalars['String']>>;
  fork_lt?: InputMaybe<Scalars['String']>;
  fork_lte?: InputMaybe<Scalars['String']>;
  fork_not?: InputMaybe<Scalars['String']>;
  fork_not_contains?: InputMaybe<Scalars['String']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_starts_with?: InputMaybe<Scalars['String']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ForkJoin_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposalIDs?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIDs?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIDs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ForkJoin_OrderBy {
  createdAt = 'createdAt',
  fork = 'fork',
  fork__executed = 'fork__executed',
  fork__executedAt = 'fork__executedAt',
  fork__forkID = 'fork__forkID',
  fork__forkToken = 'fork__forkToken',
  fork__forkTreasury = 'fork__forkTreasury',
  fork__forkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  fork__id = 'fork__id',
  fork__tokensForkingCount = 'fork__tokensForkingCount',
  fork__tokensInEscrowCount = 'fork__tokensInEscrowCount',
  id = 'id',
  owner = 'owner',
  owner__delegatedVotes = 'owner__delegatedVotes',
  owner__delegatedVotesRaw = 'owner__delegatedVotesRaw',
  owner__id = 'owner__id',
  owner__tokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount',
  proposalIDs = 'proposalIDs',
  reason = 'reason',
  tokenIDs = 'tokenIDs'
}

export type ForkJoinedNoun = {
  __typename?: 'ForkJoinedNoun';
  fork: Fork;
  forkJoin: ForkJoin;
  id: Scalars['ID'];
  noun: Noun;
  owner: Delegate;
};

export type ForkJoinedNoun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ForkJoinedNoun_Filter>>>;
  fork?: InputMaybe<Scalars['String']>;
  forkJoin?: InputMaybe<Scalars['String']>;
  forkJoin_?: InputMaybe<ForkJoin_Filter>;
  forkJoin_contains?: InputMaybe<Scalars['String']>;
  forkJoin_contains_nocase?: InputMaybe<Scalars['String']>;
  forkJoin_ends_with?: InputMaybe<Scalars['String']>;
  forkJoin_ends_with_nocase?: InputMaybe<Scalars['String']>;
  forkJoin_gt?: InputMaybe<Scalars['String']>;
  forkJoin_gte?: InputMaybe<Scalars['String']>;
  forkJoin_in?: InputMaybe<Array<Scalars['String']>>;
  forkJoin_lt?: InputMaybe<Scalars['String']>;
  forkJoin_lte?: InputMaybe<Scalars['String']>;
  forkJoin_not?: InputMaybe<Scalars['String']>;
  forkJoin_not_contains?: InputMaybe<Scalars['String']>;
  forkJoin_not_contains_nocase?: InputMaybe<Scalars['String']>;
  forkJoin_not_ends_with?: InputMaybe<Scalars['String']>;
  forkJoin_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  forkJoin_not_in?: InputMaybe<Array<Scalars['String']>>;
  forkJoin_not_starts_with?: InputMaybe<Scalars['String']>;
  forkJoin_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  forkJoin_starts_with?: InputMaybe<Scalars['String']>;
  forkJoin_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_?: InputMaybe<Fork_Filter>;
  fork_contains?: InputMaybe<Scalars['String']>;
  fork_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_ends_with?: InputMaybe<Scalars['String']>;
  fork_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_gt?: InputMaybe<Scalars['String']>;
  fork_gte?: InputMaybe<Scalars['String']>;
  fork_in?: InputMaybe<Array<Scalars['String']>>;
  fork_lt?: InputMaybe<Scalars['String']>;
  fork_lte?: InputMaybe<Scalars['String']>;
  fork_not?: InputMaybe<Scalars['String']>;
  fork_not_contains?: InputMaybe<Scalars['String']>;
  fork_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fork_not_ends_with?: InputMaybe<Scalars['String']>;
  fork_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fork_not_in?: InputMaybe<Array<Scalars['String']>>;
  fork_not_starts_with?: InputMaybe<Scalars['String']>;
  fork_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fork_starts_with?: InputMaybe<Scalars['String']>;
  fork_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<ForkJoinedNoun_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Delegate_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ForkJoinedNoun_OrderBy {
  fork = 'fork',
  forkJoin = 'forkJoin',
  forkJoin__createdAt = 'forkJoin__createdAt',
  forkJoin__id = 'forkJoin__id',
  forkJoin__reason = 'forkJoin__reason',
  fork__executed = 'fork__executed',
  fork__executedAt = 'fork__executedAt',
  fork__forkID = 'fork__forkID',
  fork__forkToken = 'fork__forkToken',
  fork__forkTreasury = 'fork__forkTreasury',
  fork__forkingPeriodEndTimestamp = 'fork__forkingPeriodEndTimestamp',
  fork__id = 'fork__id',
  fork__tokensForkingCount = 'fork__tokensForkingCount',
  fork__tokensInEscrowCount = 'fork__tokensInEscrowCount',
  id = 'id',
  noun = 'noun',
  noun__id = 'noun__id',
  owner = 'owner',
  owner__delegatedVotes = 'owner__delegatedVotes',
  owner__delegatedVotesRaw = 'owner__delegatedVotesRaw',
  owner__id = 'owner__id',
  owner__tokenHoldersRepresentedAmount = 'owner__tokenHoldersRepresentedAmount'
}

export type Fork_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Fork_Filter>>>;
  escrowDeposits_?: InputMaybe<EscrowDeposit_Filter>;
  escrowWithdrawals_?: InputMaybe<EscrowWithdrawal_Filter>;
  escrowedNouns_?: InputMaybe<EscrowedNoun_Filter>;
  executed?: InputMaybe<Scalars['Boolean']>;
  executedAt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gt?: InputMaybe<Scalars['BigInt']>;
  executedAt_gte?: InputMaybe<Scalars['BigInt']>;
  executedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedAt_lt?: InputMaybe<Scalars['BigInt']>;
  executedAt_lte?: InputMaybe<Scalars['BigInt']>;
  executedAt_not?: InputMaybe<Scalars['BigInt']>;
  executedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  executed_not?: InputMaybe<Scalars['Boolean']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forkID?: InputMaybe<Scalars['BigInt']>;
  forkID_gt?: InputMaybe<Scalars['BigInt']>;
  forkID_gte?: InputMaybe<Scalars['BigInt']>;
  forkID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  forkID_lt?: InputMaybe<Scalars['BigInt']>;
  forkID_lte?: InputMaybe<Scalars['BigInt']>;
  forkID_not?: InputMaybe<Scalars['BigInt']>;
  forkID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  forkToken?: InputMaybe<Scalars['Bytes']>;
  forkToken_contains?: InputMaybe<Scalars['Bytes']>;
  forkToken_gt?: InputMaybe<Scalars['Bytes']>;
  forkToken_gte?: InputMaybe<Scalars['Bytes']>;
  forkToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forkToken_lt?: InputMaybe<Scalars['Bytes']>;
  forkToken_lte?: InputMaybe<Scalars['Bytes']>;
  forkToken_not?: InputMaybe<Scalars['Bytes']>;
  forkToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  forkToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forkTreasury?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_contains?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_gt?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_gte?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forkTreasury_lt?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_lte?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_not?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_not_contains?: InputMaybe<Scalars['Bytes']>;
  forkTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  forkingPeriodEndTimestamp?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  forkingPeriodEndTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  forkingPeriodEndTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  joinedNouns_?: InputMaybe<ForkJoinedNoun_Filter>;
  or?: InputMaybe<Array<InputMaybe<Fork_Filter>>>;
  tokensForkingCount?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_gt?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_gte?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensForkingCount_lt?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_lte?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_not?: InputMaybe<Scalars['Int']>;
  tokensForkingCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensInEscrowCount?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_gt?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_gte?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokensInEscrowCount_lt?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_lte?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_not?: InputMaybe<Scalars['Int']>;
  tokensInEscrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Fork_OrderBy {
  escrowDeposits = 'escrowDeposits',
  escrowWithdrawals = 'escrowWithdrawals',
  escrowedNouns = 'escrowedNouns',
  executed = 'executed',
  executedAt = 'executedAt',
  forkID = 'forkID',
  forkToken = 'forkToken',
  forkTreasury = 'forkTreasury',
  forkingPeriodEndTimestamp = 'forkingPeriodEndTimestamp',
  id = 'id',
  joinedNouns = 'joinedNouns',
  tokensForkingCount = 'tokensForkingCount',
  tokensInEscrowCount = 'tokensInEscrowCount'
}

export type Governance = {
  __typename?: 'Governance';
  /** Total number of delegates participating on the governance currently */
  currentDelegates: Scalars['BigInt'];
  /** Total number of token holders currently */
  currentTokenHolders: Scalars['BigInt'];
  /** Total number of votes delegated expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt'];
  /** Total number of votes delegated expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt'];
  /** Unique entity used to keep track of common aggregated data */
  id: Scalars['ID'];
  /** Number of proposals created */
  proposals: Scalars['BigInt'];
  /** Number of proposals currently queued for execution */
  proposalsQueued: Scalars['BigInt'];
  /** Total number of delegates that held delegated votes */
  totalDelegates: Scalars['BigInt'];
  /** Total number of token holders */
  totalTokenHolders: Scalars['BigInt'];
  /** The proposal ID from which vote snapshots are taken at vote start instead of proposal creation */
  voteSnapshotBlockSwitchProposalId: Scalars['BigInt'];
};

export type Governance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Governance_Filter>>>;
  currentDelegates?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_not?: InputMaybe<Scalars['BigInt']>;
  currentDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  currentTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Governance_Filter>>>;
  proposals?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_gte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalsQueued_lt?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_lte?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_not?: InputMaybe<Scalars['BigInt']>;
  proposalsQueued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_gt?: InputMaybe<Scalars['BigInt']>;
  proposals_gte?: InputMaybe<Scalars['BigInt']>;
  proposals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_lt?: InputMaybe<Scalars['BigInt']>;
  proposals_lte?: InputMaybe<Scalars['BigInt']>;
  proposals_not?: InputMaybe<Scalars['BigInt']>;
  proposals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_gte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDelegates_lt?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_lte?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_not?: InputMaybe<Scalars['BigInt']>;
  totalDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_gte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalTokenHolders_lt?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_lte?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_not?: InputMaybe<Scalars['BigInt']>;
  totalTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteSnapshotBlockSwitchProposalId?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_gt?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_gte?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteSnapshotBlockSwitchProposalId_lt?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_lte?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_not?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlockSwitchProposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Governance_OrderBy {
  currentDelegates = 'currentDelegates',
  currentTokenHolders = 'currentTokenHolders',
  delegatedVotes = 'delegatedVotes',
  delegatedVotesRaw = 'delegatedVotesRaw',
  id = 'id',
  proposals = 'proposals',
  proposalsQueued = 'proposalsQueued',
  totalDelegates = 'totalDelegates',
  totalTokenHolders = 'totalTokenHolders',
  voteSnapshotBlockSwitchProposalId = 'voteSnapshotBlockSwitchProposalId'
}

export type Noun = {
  __typename?: 'Noun';
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
  /** The owner of the Noun */
  owner: Account;
  /** The seed used to determine the Noun's traits */
  seed?: Maybe<Seed>;
  /** Historical votes for the Noun */
  votes: Array<Vote>;
};


export type NounVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Noun_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Noun_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Noun_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_?: InputMaybe<Seed_Filter>;
  seed_contains?: InputMaybe<Scalars['String']>;
  seed_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_ends_with?: InputMaybe<Scalars['String']>;
  seed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<Scalars['String']>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_not?: InputMaybe<Scalars['String']>;
  seed_not_contains?: InputMaybe<Scalars['String']>;
  seed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seed_not_ends_with?: InputMaybe<Scalars['String']>;
  seed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seed_not_in?: InputMaybe<Array<Scalars['String']>>;
  seed_not_starts_with?: InputMaybe<Scalars['String']>;
  seed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seed_starts_with?: InputMaybe<Scalars['String']>;
  seed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Noun_OrderBy {
  id = 'id',
  owner = 'owner',
  owner__id = 'owner__id',
  owner__tokenBalance = 'owner__tokenBalance',
  owner__tokenBalanceRaw = 'owner__tokenBalanceRaw',
  owner__totalTokensHeld = 'owner__totalTokensHeld',
  owner__totalTokensHeldRaw = 'owner__totalTokensHeldRaw',
  seed = 'seed',
  seed__accessory = 'seed__accessory',
  seed__background = 'seed__background',
  seed__body = 'seed__body',
  seed__glasses = 'seed__glasses',
  seed__head = 'seed__head',
  seed__id = 'seed__id',
  votes = 'votes'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Proposal = {
  __typename?: 'Proposal';
  /** The number of votes to abstain on the proposal */
  abstainVotes: Scalars['BigInt'];
  /** Adjusted total supply when this proposal was created */
  adjustedTotalSupply: Scalars['BigInt'];
  /** The number of votes against of the proposal */
  againstVotes: Scalars['BigInt'];
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']>>;
  /** The block number at which this proposal was canceled */
  canceledBlock?: Maybe<Scalars['BigInt']>;
  /** The timestamp when this proposal was canceled */
  canceledTimestamp?: Maybe<Scalars['BigInt']>;
  /** The proposal creation block */
  createdBlock: Scalars['BigInt'];
  /** The proposal creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** The proposal creation transaction hash */
  createdTransactionHash: Scalars['Bytes'];
  /** The full proposal description, which includes the title */
  description: Scalars['String'];
  /** Block number from where the voting ends */
  endBlock: Scalars['BigInt'];
  /** The block number at which this proposal was executed */
  executedBlock?: Maybe<Scalars['BigInt']>;
  /** The timestamp when this proposal was executed */
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  /** Once the proposal is queued for execution it will have an ETA of the execution */
  executionETA?: Maybe<Scalars['BigInt']>;
  /** Feedback posts associated to this proposal */
  feedbackPosts: Array<ProposalFeedback>;
  /** The number of votes in favor of the proposal */
  forVotes: Scalars['BigInt'];
  /** Internal proposal ID, in this implementation it seems to be a autoincremental id */
  id: Scalars['ID'];
  /** The proposal's last update block */
  lastUpdatedBlock: Scalars['BigInt'];
  /** The proposal's last update timestamp */
  lastUpdatedTimestamp: Scalars['BigInt'];
  /** Dynamic quorum param snapshot: max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int'];
  /** Dynamic quorum param snapshot: min quorum basis points */
  minQuorumVotesBPS: Scalars['Int'];
  /** The objection period end block */
  objectionPeriodEndBlock: Scalars['BigInt'];
  /** True if the proposal was created via proposeOnTimelockV1 */
  onTimelockV1?: Maybe<Scalars['Boolean']>;
  /** The proposal threshold at the time of proposal creation */
  proposalThreshold: Scalars['BigInt'];
  /** Delegate that proposed the change */
  proposer: Delegate;
  /** The block number at which this proposal was queued */
  queuedBlock?: Maybe<Scalars['BigInt']>;
  /** The timestamp when this proposal was queued */
  queuedTimestamp?: Maybe<Scalars['BigInt']>;
  /** Dynamic quorum param snapshot: the dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt'];
  /** The required number of votes for quorum at the time of proposal creation */
  quorumVotes: Scalars['BigInt'];
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']>>;
  /** Delegates that signed on this proposal to get it over the proposal threshold */
  signers?: Maybe<Array<Delegate>>;
  /** Block number from where the voting starts */
  startBlock: Scalars['BigInt'];
  /** Status of the proposal */
  status: ProposalStatus;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String'];
  /** Total supply when this proposal was created */
  totalSupply: Scalars['BigInt'];
  /** The update period end block */
  updatePeriodEndBlock: Scalars['BigInt'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']>>;
  /** The block number at which this proposal was vetoed */
  vetoedBlock?: Maybe<Scalars['BigInt']>;
  /** The timestamp when this proposal was vetoed */
  vetoedTimestamp?: Maybe<Scalars['BigInt']>;
  /** The block at which voting balance snapshots are taken for this proposal */
  voteSnapshotBlock: Scalars['BigInt'];
  /** Votes associated to this proposal */
  votes: Array<Vote>;
};


export type ProposalFeedbackPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalFeedback_Filter>;
};


export type ProposalSignersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Delegate_Filter>;
};


export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Vote_Filter>;
};

export type ProposalCandidate = {
  __typename?: 'ProposalCandidate';
  /** Whether this candidate was canceled or not */
  canceled: Scalars['Boolean'];
  /** The block number at which this candidate was canceled */
  canceledBlock?: Maybe<Scalars['BigInt']>;
  /** The timestamp at which this candidate was canceled */
  canceledTimestamp?: Maybe<Scalars['BigInt']>;
  /** The proposal candidate creation block */
  createdBlock: Scalars['BigInt'];
  /** The proposal candidate creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** The proposal candidate creation transaction hash */
  createdTransactionHash: Scalars['Bytes'];
  /** A concatination of proposer and slug */
  id: Scalars['ID'];
  /** The proposal candidate's last update block */
  lastUpdatedBlock: Scalars['BigInt'];
  /** The proposal candidate's last update timestamp */
  lastUpdatedTimestamp: Scalars['BigInt'];
  /** Latest version of the proposal */
  latestVersion: ProposalCandidateVersion;
  /** The proposer account */
  proposer: Scalars['Bytes'];
  /** The candidate slug, together with the proposer account makes the candidate's unique key */
  slug: Scalars['String'];
  /** This candidate's versions */
  versions: Array<ProposalCandidateVersion>;
};


export type ProposalCandidateVersionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalCandidateVersion_Filter>;
};

export type ProposalCandidateContent = {
  __typename?: 'ProposalCandidateContent';
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']>>;
  /** This proposal's content signatures by signers */
  contentSignatures: Array<ProposalCandidateSignature>;
  /** The full proposal description, which includes the title */
  description: Scalars['String'];
  /** The encoded proposal hash in bytes */
  encodedProposalHash: Scalars['Bytes'];
  /** The encoded proposal hash */
  id: Scalars['ID'];
  /** IDs of proposals (not candidates) with the same content */
  matchingProposalIds?: Maybe<Array<Scalars['BigInt']>>;
  /** The proposal id that this content is updating. 0 if it's a new proposal */
  proposalIdToUpdate: Scalars['BigInt'];
  /** The proposer account */
  proposer: Scalars['Bytes'];
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']>>;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']>>;
};


export type ProposalCandidateContentContentSignaturesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateSignature_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProposalCandidateSignature_Filter>;
};

export type ProposalCandidateContent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateContent_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  contentSignatures_?: InputMaybe<ProposalCandidateSignature_Filter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  encodedProposalHash?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_contains?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_gt?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_gte?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encodedProposalHash_lt?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_lte?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  matchingProposalIds?: InputMaybe<Array<Scalars['BigInt']>>;
  matchingProposalIds_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  matchingProposalIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  matchingProposalIds_not?: InputMaybe<Array<Scalars['BigInt']>>;
  matchingProposalIds_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  matchingProposalIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateContent_Filter>>>;
  proposalIdToUpdate?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_gt?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_gte?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalIdToUpdate_lt?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_lte?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_not?: InputMaybe<Scalars['BigInt']>;
  proposalIdToUpdate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposer?: InputMaybe<Scalars['Bytes']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']>;
  proposer_not?: InputMaybe<Scalars['Bytes']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  targets?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ProposalCandidateContent_OrderBy {
  calldatas = 'calldatas',
  contentSignatures = 'contentSignatures',
  description = 'description',
  encodedProposalHash = 'encodedProposalHash',
  id = 'id',
  matchingProposalIds = 'matchingProposalIds',
  proposalIdToUpdate = 'proposalIdToUpdate',
  proposer = 'proposer',
  signatures = 'signatures',
  targets = 'targets',
  title = 'title',
  values = 'values'
}

export type ProposalCandidateSignature = {
  __typename?: 'ProposalCandidateSignature';
  /** Whether this signature has been canceled */
  canceled: Scalars['Boolean'];
  /** The candidate content this signature is signing on */
  content: ProposalCandidateContent;
  /** The signature's creation block */
  createdBlock: Scalars['BigInt'];
  /** The signature's creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** The hash of the abi encoded proposal data */
  encodedProposalHash: Scalars['Bytes'];
  /** The signature's expiration timestamp */
  expirationTimestamp: Scalars['BigInt'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID'];
  /** The free text signer reason */
  reason: Scalars['String'];
  /** The signature bytes */
  sig: Scalars['Bytes'];
  /** The typed signature hash */
  sigDigest: Scalars['Bytes'];
  /** The signing account */
  signer: Delegate;
};

export type ProposalCandidateSignature_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateSignature_Filter>>>;
  canceled?: InputMaybe<Scalars['Boolean']>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  content?: InputMaybe<Scalars['String']>;
  content_?: InputMaybe<ProposalCandidateContent_Filter>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  encodedProposalHash?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_contains?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_gt?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_gte?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encodedProposalHash_lt?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_lte?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  encodedProposalHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  expirationTimestamp?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expirationTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  expirationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateSignature_Filter>>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sig?: InputMaybe<Scalars['Bytes']>;
  sigDigest?: InputMaybe<Scalars['Bytes']>;
  sigDigest_contains?: InputMaybe<Scalars['Bytes']>;
  sigDigest_gt?: InputMaybe<Scalars['Bytes']>;
  sigDigest_gte?: InputMaybe<Scalars['Bytes']>;
  sigDigest_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sigDigest_lt?: InputMaybe<Scalars['Bytes']>;
  sigDigest_lte?: InputMaybe<Scalars['Bytes']>;
  sigDigest_not?: InputMaybe<Scalars['Bytes']>;
  sigDigest_not_contains?: InputMaybe<Scalars['Bytes']>;
  sigDigest_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sig_contains?: InputMaybe<Scalars['Bytes']>;
  sig_gt?: InputMaybe<Scalars['Bytes']>;
  sig_gte?: InputMaybe<Scalars['Bytes']>;
  sig_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sig_lt?: InputMaybe<Scalars['Bytes']>;
  sig_lte?: InputMaybe<Scalars['Bytes']>;
  sig_not?: InputMaybe<Scalars['Bytes']>;
  sig_not_contains?: InputMaybe<Scalars['Bytes']>;
  sig_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  signer?: InputMaybe<Scalars['String']>;
  signer_?: InputMaybe<Delegate_Filter>;
  signer_contains?: InputMaybe<Scalars['String']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_ends_with?: InputMaybe<Scalars['String']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_gt?: InputMaybe<Scalars['String']>;
  signer_gte?: InputMaybe<Scalars['String']>;
  signer_in?: InputMaybe<Array<Scalars['String']>>;
  signer_lt?: InputMaybe<Scalars['String']>;
  signer_lte?: InputMaybe<Scalars['String']>;
  signer_not?: InputMaybe<Scalars['String']>;
  signer_not_contains?: InputMaybe<Scalars['String']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signer_starts_with?: InputMaybe<Scalars['String']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ProposalCandidateSignature_OrderBy {
  canceled = 'canceled',
  content = 'content',
  content__description = 'content__description',
  content__encodedProposalHash = 'content__encodedProposalHash',
  content__id = 'content__id',
  content__proposalIdToUpdate = 'content__proposalIdToUpdate',
  content__proposer = 'content__proposer',
  content__title = 'content__title',
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  encodedProposalHash = 'encodedProposalHash',
  expirationTimestamp = 'expirationTimestamp',
  id = 'id',
  reason = 'reason',
  sig = 'sig',
  sigDigest = 'sigDigest',
  signer = 'signer',
  signer__delegatedVotes = 'signer__delegatedVotes',
  signer__delegatedVotesRaw = 'signer__delegatedVotesRaw',
  signer__id = 'signer__id',
  signer__tokenHoldersRepresentedAmount = 'signer__tokenHoldersRepresentedAmount'
}

export type ProposalCandidateVersion = {
  __typename?: 'ProposalCandidateVersion';
  /** The proposal content */
  content: ProposalCandidateContent;
  /** The version's creation block */
  createdBlock: Scalars['BigInt'];
  /** This version's creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID'];
  /** The proposal candidate this entity is a version of */
  proposal: ProposalCandidate;
  /** The update message of this version, relevant when it's an update */
  updateMessage: Scalars['String'];
};

export type ProposalCandidateVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidateVersion_Filter>>>;
  content?: InputMaybe<Scalars['String']>;
  content_?: InputMaybe<ProposalCandidateContent_Filter>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidateVersion_Filter>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<ProposalCandidate_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage?: InputMaybe<Scalars['String']>;
  updateMessage_contains?: InputMaybe<Scalars['String']>;
  updateMessage_contains_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_ends_with?: InputMaybe<Scalars['String']>;
  updateMessage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_gt?: InputMaybe<Scalars['String']>;
  updateMessage_gte?: InputMaybe<Scalars['String']>;
  updateMessage_in?: InputMaybe<Array<Scalars['String']>>;
  updateMessage_lt?: InputMaybe<Scalars['String']>;
  updateMessage_lte?: InputMaybe<Scalars['String']>;
  updateMessage_not?: InputMaybe<Scalars['String']>;
  updateMessage_not_contains?: InputMaybe<Scalars['String']>;
  updateMessage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  updateMessage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  updateMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  updateMessage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_starts_with?: InputMaybe<Scalars['String']>;
  updateMessage_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ProposalCandidateVersion_OrderBy {
  content = 'content',
  content__description = 'content__description',
  content__encodedProposalHash = 'content__encodedProposalHash',
  content__id = 'content__id',
  content__proposalIdToUpdate = 'content__proposalIdToUpdate',
  content__proposer = 'content__proposer',
  content__title = 'content__title',
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  id = 'id',
  proposal = 'proposal',
  proposal__canceled = 'proposal__canceled',
  proposal__canceledBlock = 'proposal__canceledBlock',
  proposal__canceledTimestamp = 'proposal__canceledTimestamp',
  proposal__createdBlock = 'proposal__createdBlock',
  proposal__createdTimestamp = 'proposal__createdTimestamp',
  proposal__createdTransactionHash = 'proposal__createdTransactionHash',
  proposal__id = 'proposal__id',
  proposal__lastUpdatedBlock = 'proposal__lastUpdatedBlock',
  proposal__lastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  proposal__proposer = 'proposal__proposer',
  proposal__slug = 'proposal__slug',
  updateMessage = 'updateMessage'
}

export type ProposalCandidate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalCandidate_Filter>>>;
  canceled?: InputMaybe<Scalars['Boolean']>;
  canceledBlock?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_gt?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_gte?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledBlock_lt?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_lte?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_not?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledTimestamp?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdatedBlock?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestVersion?: InputMaybe<Scalars['String']>;
  latestVersion_?: InputMaybe<ProposalCandidateVersion_Filter>;
  latestVersion_contains?: InputMaybe<Scalars['String']>;
  latestVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  latestVersion_ends_with?: InputMaybe<Scalars['String']>;
  latestVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestVersion_gt?: InputMaybe<Scalars['String']>;
  latestVersion_gte?: InputMaybe<Scalars['String']>;
  latestVersion_in?: InputMaybe<Array<Scalars['String']>>;
  latestVersion_lt?: InputMaybe<Scalars['String']>;
  latestVersion_lte?: InputMaybe<Scalars['String']>;
  latestVersion_not?: InputMaybe<Scalars['String']>;
  latestVersion_not_contains?: InputMaybe<Scalars['String']>;
  latestVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  latestVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  latestVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  latestVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  latestVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestVersion_starts_with?: InputMaybe<Scalars['String']>;
  latestVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<ProposalCandidate_Filter>>>;
  proposer?: InputMaybe<Scalars['Bytes']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']>;
  proposer_not?: InputMaybe<Scalars['Bytes']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  versions_?: InputMaybe<ProposalCandidateVersion_Filter>;
};

export enum ProposalCandidate_OrderBy {
  canceled = 'canceled',
  canceledBlock = 'canceledBlock',
  canceledTimestamp = 'canceledTimestamp',
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  createdTransactionHash = 'createdTransactionHash',
  id = 'id',
  lastUpdatedBlock = 'lastUpdatedBlock',
  lastUpdatedTimestamp = 'lastUpdatedTimestamp',
  latestVersion = 'latestVersion',
  latestVersion__createdBlock = 'latestVersion__createdBlock',
  latestVersion__createdTimestamp = 'latestVersion__createdTimestamp',
  latestVersion__id = 'latestVersion__id',
  latestVersion__updateMessage = 'latestVersion__updateMessage',
  proposer = 'proposer',
  slug = 'slug',
  versions = 'versions'
}

export type ProposalFeedback = {
  __typename?: 'ProposalFeedback';
  /** The feedback's creation block */
  createdBlock: Scalars['BigInt'];
  /** This feedback's creation timestamp */
  createdTimestamp: Scalars['BigInt'];
  /** A concatination of tx hash and log index, just to make sure these entities have a unique ID */
  id: Scalars['ID'];
  /** The proposal this feedback is provided on */
  proposal: Proposal;
  /** The optional feedback reason free text */
  reason?: Maybe<Scalars['String']>;
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int'];
  /** The voter account providing the feedback */
  voter: Delegate;
  /** Amount of votes voter had when feedback was submitted */
  votes: Scalars['BigInt'];
};

export type ProposalFeedback_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalFeedback_Filter>>>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalFeedback_Filter>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  supportDetailed?: InputMaybe<Scalars['Int']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ProposalFeedback_OrderBy {
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  id = 'id',
  proposal = 'proposal',
  proposal__abstainVotes = 'proposal__abstainVotes',
  proposal__adjustedTotalSupply = 'proposal__adjustedTotalSupply',
  proposal__againstVotes = 'proposal__againstVotes',
  proposal__canceledBlock = 'proposal__canceledBlock',
  proposal__canceledTimestamp = 'proposal__canceledTimestamp',
  proposal__createdBlock = 'proposal__createdBlock',
  proposal__createdTimestamp = 'proposal__createdTimestamp',
  proposal__createdTransactionHash = 'proposal__createdTransactionHash',
  proposal__description = 'proposal__description',
  proposal__endBlock = 'proposal__endBlock',
  proposal__executedBlock = 'proposal__executedBlock',
  proposal__executedTimestamp = 'proposal__executedTimestamp',
  proposal__executionETA = 'proposal__executionETA',
  proposal__forVotes = 'proposal__forVotes',
  proposal__id = 'proposal__id',
  proposal__lastUpdatedBlock = 'proposal__lastUpdatedBlock',
  proposal__lastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  proposal__maxQuorumVotesBPS = 'proposal__maxQuorumVotesBPS',
  proposal__minQuorumVotesBPS = 'proposal__minQuorumVotesBPS',
  proposal__objectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  proposal__onTimelockV1 = 'proposal__onTimelockV1',
  proposal__proposalThreshold = 'proposal__proposalThreshold',
  proposal__queuedBlock = 'proposal__queuedBlock',
  proposal__queuedTimestamp = 'proposal__queuedTimestamp',
  proposal__quorumCoefficient = 'proposal__quorumCoefficient',
  proposal__quorumVotes = 'proposal__quorumVotes',
  proposal__startBlock = 'proposal__startBlock',
  proposal__status = 'proposal__status',
  proposal__title = 'proposal__title',
  proposal__totalSupply = 'proposal__totalSupply',
  proposal__updatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  proposal__vetoedBlock = 'proposal__vetoedBlock',
  proposal__vetoedTimestamp = 'proposal__vetoedTimestamp',
  proposal__voteSnapshotBlock = 'proposal__voteSnapshotBlock',
  reason = 'reason',
  supportDetailed = 'supportDetailed',
  voter = 'voter',
  voter__delegatedVotes = 'voter__delegatedVotes',
  voter__delegatedVotesRaw = 'voter__delegatedVotesRaw',
  voter__id = 'voter__id',
  voter__tokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  votes = 'votes'
}

export enum ProposalStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  EXECUTED = 'EXECUTED',
  PENDING = 'PENDING',
  QUEUED = 'QUEUED',
  VETOED = 'VETOED'
}

export type ProposalVersion = {
  __typename?: 'ProposalVersion';
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']>>;
  /** The block timestamp of the update */
  createdAt: Scalars['BigInt'];
  /** The block number of the update */
  createdBlock: Scalars['BigInt'];
  /** The full proposal description, which includes the title */
  description: Scalars['String'];
  id: Scalars['ID'];
  /** The proposal that was updated */
  proposal: Proposal;
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']>>;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String'];
  /** The update message of this proposal version, relevant when it's a proposal update */
  updateMessage: Scalars['String'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']>>;
};

export type ProposalVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalVersion_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalVersion_Filter>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  targets?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage?: InputMaybe<Scalars['String']>;
  updateMessage_contains?: InputMaybe<Scalars['String']>;
  updateMessage_contains_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_ends_with?: InputMaybe<Scalars['String']>;
  updateMessage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_gt?: InputMaybe<Scalars['String']>;
  updateMessage_gte?: InputMaybe<Scalars['String']>;
  updateMessage_in?: InputMaybe<Array<Scalars['String']>>;
  updateMessage_lt?: InputMaybe<Scalars['String']>;
  updateMessage_lte?: InputMaybe<Scalars['String']>;
  updateMessage_not?: InputMaybe<Scalars['String']>;
  updateMessage_not_contains?: InputMaybe<Scalars['String']>;
  updateMessage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  updateMessage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  updateMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  updateMessage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updateMessage_starts_with?: InputMaybe<Scalars['String']>;
  updateMessage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ProposalVersion_OrderBy {
  calldatas = 'calldatas',
  createdAt = 'createdAt',
  createdBlock = 'createdBlock',
  description = 'description',
  id = 'id',
  proposal = 'proposal',
  proposal__abstainVotes = 'proposal__abstainVotes',
  proposal__adjustedTotalSupply = 'proposal__adjustedTotalSupply',
  proposal__againstVotes = 'proposal__againstVotes',
  proposal__canceledBlock = 'proposal__canceledBlock',
  proposal__canceledTimestamp = 'proposal__canceledTimestamp',
  proposal__createdBlock = 'proposal__createdBlock',
  proposal__createdTimestamp = 'proposal__createdTimestamp',
  proposal__createdTransactionHash = 'proposal__createdTransactionHash',
  proposal__description = 'proposal__description',
  proposal__endBlock = 'proposal__endBlock',
  proposal__executedBlock = 'proposal__executedBlock',
  proposal__executedTimestamp = 'proposal__executedTimestamp',
  proposal__executionETA = 'proposal__executionETA',
  proposal__forVotes = 'proposal__forVotes',
  proposal__id = 'proposal__id',
  proposal__lastUpdatedBlock = 'proposal__lastUpdatedBlock',
  proposal__lastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  proposal__maxQuorumVotesBPS = 'proposal__maxQuorumVotesBPS',
  proposal__minQuorumVotesBPS = 'proposal__minQuorumVotesBPS',
  proposal__objectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  proposal__onTimelockV1 = 'proposal__onTimelockV1',
  proposal__proposalThreshold = 'proposal__proposalThreshold',
  proposal__queuedBlock = 'proposal__queuedBlock',
  proposal__queuedTimestamp = 'proposal__queuedTimestamp',
  proposal__quorumCoefficient = 'proposal__quorumCoefficient',
  proposal__quorumVotes = 'proposal__quorumVotes',
  proposal__startBlock = 'proposal__startBlock',
  proposal__status = 'proposal__status',
  proposal__title = 'proposal__title',
  proposal__totalSupply = 'proposal__totalSupply',
  proposal__updatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  proposal__vetoedBlock = 'proposal__vetoedBlock',
  proposal__vetoedTimestamp = 'proposal__vetoedTimestamp',
  proposal__voteSnapshotBlock = 'proposal__voteSnapshotBlock',
  signatures = 'signatures',
  targets = 'targets',
  title = 'title',
  updateMessage = 'updateMessage',
  values = 'values'
}

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  abstainVotes?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_gt?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_gte?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  abstainVotes_lt?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_lte?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_not?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adjustedTotalSupply?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adjustedTotalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_not?: InputMaybe<Scalars['BigInt']>;
  adjustedTotalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  againstVotes?: InputMaybe<Scalars['BigInt']>;
  againstVotes_gt?: InputMaybe<Scalars['BigInt']>;
  againstVotes_gte?: InputMaybe<Scalars['BigInt']>;
  againstVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  againstVotes_lt?: InputMaybe<Scalars['BigInt']>;
  againstVotes_lte?: InputMaybe<Scalars['BigInt']>;
  againstVotes_not?: InputMaybe<Scalars['BigInt']>;
  againstVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  canceledBlock?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_gt?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_gte?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledBlock_lt?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_lte?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_not?: InputMaybe<Scalars['BigInt']>;
  canceledBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledTimestamp?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canceledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  canceledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  endBlock?: InputMaybe<Scalars['BigInt']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlock?: InputMaybe<Scalars['BigInt']>;
  executedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlock_not?: InputMaybe<Scalars['BigInt']>;
  executedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionETA?: InputMaybe<Scalars['BigInt']>;
  executionETA_gt?: InputMaybe<Scalars['BigInt']>;
  executionETA_gte?: InputMaybe<Scalars['BigInt']>;
  executionETA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionETA_lt?: InputMaybe<Scalars['BigInt']>;
  executionETA_lte?: InputMaybe<Scalars['BigInt']>;
  executionETA_not?: InputMaybe<Scalars['BigInt']>;
  executionETA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feedbackPosts_?: InputMaybe<ProposalFeedback_Filter>;
  forVotes?: InputMaybe<Scalars['BigInt']>;
  forVotes_gt?: InputMaybe<Scalars['BigInt']>;
  forVotes_gte?: InputMaybe<Scalars['BigInt']>;
  forVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  forVotes_lt?: InputMaybe<Scalars['BigInt']>;
  forVotes_lte?: InputMaybe<Scalars['BigInt']>;
  forVotes_not?: InputMaybe<Scalars['BigInt']>;
  forVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdatedBlock?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  objectionPeriodEndBlock?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_gt?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_gte?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  objectionPeriodEndBlock_lt?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_lte?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_not?: InputMaybe<Scalars['BigInt']>;
  objectionPeriodEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  onTimelockV1?: InputMaybe<Scalars['Boolean']>;
  onTimelockV1_in?: InputMaybe<Array<Scalars['Boolean']>>;
  onTimelockV1_not?: InputMaybe<Scalars['Boolean']>;
  onTimelockV1_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  or?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposer?: InputMaybe<Scalars['String']>;
  proposer_?: InputMaybe<Delegate_Filter>;
  proposer_contains?: InputMaybe<Scalars['String']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_ends_with?: InputMaybe<Scalars['String']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_gt?: InputMaybe<Scalars['String']>;
  proposer_gte?: InputMaybe<Scalars['String']>;
  proposer_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_lt?: InputMaybe<Scalars['String']>;
  proposer_lte?: InputMaybe<Scalars['String']>;
  proposer_not?: InputMaybe<Scalars['String']>;
  proposer_not_contains?: InputMaybe<Scalars['String']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_starts_with?: InputMaybe<Scalars['String']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  queuedBlock?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_not?: InputMaybe<Scalars['BigInt']>;
  queuedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedTimestamp?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  queuedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  queuedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_gte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quorumVotes_lt?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_lte?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_not?: InputMaybe<Scalars['BigInt']>;
  quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signers?: InputMaybe<Array<Scalars['String']>>;
  signers_?: InputMaybe<Delegate_Filter>;
  signers_contains?: InputMaybe<Array<Scalars['String']>>;
  signers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  signers_not?: InputMaybe<Array<Scalars['String']>>;
  signers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  signers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  startBlock?: InputMaybe<Scalars['BigInt']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not?: InputMaybe<ProposalStatus>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  targets?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatePeriodEndBlock?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_gt?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_gte?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatePeriodEndBlock_lt?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_lte?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_not?: InputMaybe<Scalars['BigInt']>;
  updatePeriodEndBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  vetoedBlock?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vetoedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_not?: InputMaybe<Scalars['BigInt']>;
  vetoedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vetoedTimestamp?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vetoedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  vetoedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteSnapshotBlock?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_gt?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_gte?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteSnapshotBlock_lt?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_lte?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_not?: InputMaybe<Scalars['BigInt']>;
  voteSnapshotBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Proposal_OrderBy {
  abstainVotes = 'abstainVotes',
  adjustedTotalSupply = 'adjustedTotalSupply',
  againstVotes = 'againstVotes',
  calldatas = 'calldatas',
  canceledBlock = 'canceledBlock',
  canceledTimestamp = 'canceledTimestamp',
  createdBlock = 'createdBlock',
  createdTimestamp = 'createdTimestamp',
  createdTransactionHash = 'createdTransactionHash',
  description = 'description',
  endBlock = 'endBlock',
  executedBlock = 'executedBlock',
  executedTimestamp = 'executedTimestamp',
  executionETA = 'executionETA',
  feedbackPosts = 'feedbackPosts',
  forVotes = 'forVotes',
  id = 'id',
  lastUpdatedBlock = 'lastUpdatedBlock',
  lastUpdatedTimestamp = 'lastUpdatedTimestamp',
  maxQuorumVotesBPS = 'maxQuorumVotesBPS',
  minQuorumVotesBPS = 'minQuorumVotesBPS',
  objectionPeriodEndBlock = 'objectionPeriodEndBlock',
  onTimelockV1 = 'onTimelockV1',
  proposalThreshold = 'proposalThreshold',
  proposer = 'proposer',
  proposer__delegatedVotes = 'proposer__delegatedVotes',
  proposer__delegatedVotesRaw = 'proposer__delegatedVotesRaw',
  proposer__id = 'proposer__id',
  proposer__tokenHoldersRepresentedAmount = 'proposer__tokenHoldersRepresentedAmount',
  queuedBlock = 'queuedBlock',
  queuedTimestamp = 'queuedTimestamp',
  quorumCoefficient = 'quorumCoefficient',
  quorumVotes = 'quorumVotes',
  signatures = 'signatures',
  signers = 'signers',
  startBlock = 'startBlock',
  status = 'status',
  targets = 'targets',
  title = 'title',
  totalSupply = 'totalSupply',
  updatePeriodEndBlock = 'updatePeriodEndBlock',
  values = 'values',
  vetoedBlock = 'vetoedBlock',
  vetoedTimestamp = 'vetoedTimestamp',
  voteSnapshotBlock = 'voteSnapshotBlock',
  votes = 'votes'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  candidateFeedback?: Maybe<CandidateFeedback>;
  candidateFeedbacks: Array<CandidateFeedback>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  delegationEvent?: Maybe<DelegationEvent>;
  delegationEvents: Array<DelegationEvent>;
  dynamicQuorumParams: Array<DynamicQuorumParams>;
  escrowDeposit?: Maybe<EscrowDeposit>;
  escrowDeposits: Array<EscrowDeposit>;
  escrowWithdrawal?: Maybe<EscrowWithdrawal>;
  escrowWithdrawals: Array<EscrowWithdrawal>;
  escrowedNoun?: Maybe<EscrowedNoun>;
  escrowedNouns: Array<EscrowedNoun>;
  fork?: Maybe<Fork>;
  forkJoin?: Maybe<ForkJoin>;
  forkJoinedNoun?: Maybe<ForkJoinedNoun>;
  forkJoinedNouns: Array<ForkJoinedNoun>;
  forkJoins: Array<ForkJoin>;
  forks: Array<Fork>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  proposal?: Maybe<Proposal>;
  proposalCandidate?: Maybe<ProposalCandidate>;
  proposalCandidateContent?: Maybe<ProposalCandidateContent>;
  proposalCandidateContents: Array<ProposalCandidateContent>;
  proposalCandidateSignature?: Maybe<ProposalCandidateSignature>;
  proposalCandidateSignatures: Array<ProposalCandidateSignature>;
  proposalCandidateVersion?: Maybe<ProposalCandidateVersion>;
  proposalCandidateVersions: Array<ProposalCandidateVersion>;
  proposalCandidates: Array<ProposalCandidate>;
  proposalFeedback?: Maybe<ProposalFeedback>;
  proposalFeedbacks: Array<ProposalFeedback>;
  proposalVersion?: Maybe<ProposalVersion>;
  proposalVersions: Array<ProposalVersion>;
  proposals: Array<Proposal>;
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};


export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type QueryCandidateFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCandidateFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CandidateFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CandidateFeedback_Filter>;
};


export type QueryDelegateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegate_Filter>;
};


export type QueryDelegationEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegationEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationEvent_Filter>;
};


export type QueryDynamicQuorumParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DynamicQuorumParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DynamicQuorumParams_Filter>;
};


export type QueryEscrowDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowDeposit_Filter>;
};


export type QueryEscrowWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowWithdrawal_Filter>;
};


export type QueryEscrowedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEscrowedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowedNoun_Filter>;
};


export type QueryForkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryForkJoinedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ForkJoinedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoinedNoun_Filter>;
};


export type QueryForkJoinsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ForkJoin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoin_Filter>;
};


export type QueryForksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fork_Filter>;
};


export type QueryGovernanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governance_Filter>;
};


export type QueryNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Noun_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateContentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateContentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateContent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateContent_Filter>;
};


export type QueryProposalCandidateSignatureArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateSignaturesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateSignature_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateSignature_Filter>;
};


export type QueryProposalCandidateVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalCandidateVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateVersion_Filter>;
};


export type QueryProposalCandidatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidate_Filter>;
};


export type QueryProposalFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalFeedback_Filter>;
};


export type QueryProposalVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalVersion_Filter>;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type QuerySeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seed_Filter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Seed = {
  __typename?: 'Seed';
  /** The accessory index */
  accessory: Scalars['BigInt'];
  /** The background index */
  background: Scalars['BigInt'];
  /** The body index */
  body: Scalars['BigInt'];
  /** The glasses index */
  glasses: Scalars['BigInt'];
  /** The head index */
  head: Scalars['BigInt'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID'];
};

export type Seed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessory?: InputMaybe<Scalars['BigInt']>;
  accessory_gt?: InputMaybe<Scalars['BigInt']>;
  accessory_gte?: InputMaybe<Scalars['BigInt']>;
  accessory_in?: InputMaybe<Array<Scalars['BigInt']>>;
  accessory_lt?: InputMaybe<Scalars['BigInt']>;
  accessory_lte?: InputMaybe<Scalars['BigInt']>;
  accessory_not?: InputMaybe<Scalars['BigInt']>;
  accessory_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Seed_Filter>>>;
  background?: InputMaybe<Scalars['BigInt']>;
  background_gt?: InputMaybe<Scalars['BigInt']>;
  background_gte?: InputMaybe<Scalars['BigInt']>;
  background_in?: InputMaybe<Array<Scalars['BigInt']>>;
  background_lt?: InputMaybe<Scalars['BigInt']>;
  background_lte?: InputMaybe<Scalars['BigInt']>;
  background_not?: InputMaybe<Scalars['BigInt']>;
  background_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body?: InputMaybe<Scalars['BigInt']>;
  body_gt?: InputMaybe<Scalars['BigInt']>;
  body_gte?: InputMaybe<Scalars['BigInt']>;
  body_in?: InputMaybe<Array<Scalars['BigInt']>>;
  body_lt?: InputMaybe<Scalars['BigInt']>;
  body_lte?: InputMaybe<Scalars['BigInt']>;
  body_not?: InputMaybe<Scalars['BigInt']>;
  body_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses?: InputMaybe<Scalars['BigInt']>;
  glasses_gt?: InputMaybe<Scalars['BigInt']>;
  glasses_gte?: InputMaybe<Scalars['BigInt']>;
  glasses_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glasses_lt?: InputMaybe<Scalars['BigInt']>;
  glasses_lte?: InputMaybe<Scalars['BigInt']>;
  glasses_not?: InputMaybe<Scalars['BigInt']>;
  glasses_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head?: InputMaybe<Scalars['BigInt']>;
  head_gt?: InputMaybe<Scalars['BigInt']>;
  head_gte?: InputMaybe<Scalars['BigInt']>;
  head_in?: InputMaybe<Array<Scalars['BigInt']>>;
  head_lt?: InputMaybe<Scalars['BigInt']>;
  head_lte?: InputMaybe<Scalars['BigInt']>;
  head_not?: InputMaybe<Scalars['BigInt']>;
  head_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Seed_Filter>>>;
};

export enum Seed_OrderBy {
  accessory = 'accessory',
  background = 'background',
  body = 'body',
  glasses = 'glasses',
  head = 'head',
  id = 'id'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  candidateFeedback?: Maybe<CandidateFeedback>;
  candidateFeedbacks: Array<CandidateFeedback>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  delegationEvent?: Maybe<DelegationEvent>;
  delegationEvents: Array<DelegationEvent>;
  dynamicQuorumParams: Array<DynamicQuorumParams>;
  escrowDeposit?: Maybe<EscrowDeposit>;
  escrowDeposits: Array<EscrowDeposit>;
  escrowWithdrawal?: Maybe<EscrowWithdrawal>;
  escrowWithdrawals: Array<EscrowWithdrawal>;
  escrowedNoun?: Maybe<EscrowedNoun>;
  escrowedNouns: Array<EscrowedNoun>;
  fork?: Maybe<Fork>;
  forkJoin?: Maybe<ForkJoin>;
  forkJoinedNoun?: Maybe<ForkJoinedNoun>;
  forkJoinedNouns: Array<ForkJoinedNoun>;
  forkJoins: Array<ForkJoin>;
  forks: Array<Fork>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  proposal?: Maybe<Proposal>;
  proposalCandidate?: Maybe<ProposalCandidate>;
  proposalCandidateContent?: Maybe<ProposalCandidateContent>;
  proposalCandidateContents: Array<ProposalCandidateContent>;
  proposalCandidateSignature?: Maybe<ProposalCandidateSignature>;
  proposalCandidateSignatures: Array<ProposalCandidateSignature>;
  proposalCandidateVersion?: Maybe<ProposalCandidateVersion>;
  proposalCandidateVersions: Array<ProposalCandidateVersion>;
  proposalCandidates: Array<ProposalCandidate>;
  proposalFeedback?: Maybe<ProposalFeedback>;
  proposalFeedbacks: Array<ProposalFeedback>;
  proposalVersion?: Maybe<ProposalVersion>;
  proposalVersions: Array<ProposalVersion>;
  proposals: Array<Proposal>;
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};


export type SubscriptionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type SubscriptionCandidateFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCandidateFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CandidateFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CandidateFeedback_Filter>;
};


export type SubscriptionDelegateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegate_Filter>;
};


export type SubscriptionDelegationEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegationEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DelegationEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationEvent_Filter>;
};


export type SubscriptionDynamicQuorumParamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DynamicQuorumParams_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DynamicQuorumParams_Filter>;
};


export type SubscriptionEscrowDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEscrowDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowDeposit_Filter>;
};


export type SubscriptionEscrowWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEscrowWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowWithdrawal_Filter>;
};


export type SubscriptionEscrowedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEscrowedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EscrowedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EscrowedNoun_Filter>;
};


export type SubscriptionForkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionForkJoinArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionForkJoinedNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionForkJoinedNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ForkJoinedNoun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoinedNoun_Filter>;
};


export type SubscriptionForkJoinsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ForkJoin_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ForkJoin_Filter>;
};


export type SubscriptionForksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fork_Filter>;
};


export type SubscriptionGovernanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Governance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Governance_Filter>;
};


export type SubscriptionNounArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNounsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Noun_Filter>;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalCandidateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalCandidateContentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalCandidateContentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateContent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateContent_Filter>;
};


export type SubscriptionProposalCandidateSignatureArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalCandidateSignaturesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateSignature_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateSignature_Filter>;
};


export type SubscriptionProposalCandidateVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalCandidateVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidateVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidateVersion_Filter>;
};


export type SubscriptionProposalCandidatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalCandidate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalCandidate_Filter>;
};


export type SubscriptionProposalFeedbackArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalFeedbacksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalFeedback_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalFeedback_Filter>;
};


export type SubscriptionProposalVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProposalVersion_Filter>;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};


export type SubscriptionSeedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSeedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Seed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seed_Filter>;
};


export type SubscriptionTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferEvent_Filter>;
};


export type SubscriptionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt'];
  /** The txn hash of this event */
  id: Scalars['ID'];
  /** New holder address */
  newHolder: Account;
  /** The Noun being transfered */
  noun: Noun;
  /** Previous holder address */
  previousHolder: Account;
};

export type TransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newHolder?: InputMaybe<Scalars['String']>;
  newHolder_?: InputMaybe<Account_Filter>;
  newHolder_contains?: InputMaybe<Scalars['String']>;
  newHolder_contains_nocase?: InputMaybe<Scalars['String']>;
  newHolder_ends_with?: InputMaybe<Scalars['String']>;
  newHolder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newHolder_gt?: InputMaybe<Scalars['String']>;
  newHolder_gte?: InputMaybe<Scalars['String']>;
  newHolder_in?: InputMaybe<Array<Scalars['String']>>;
  newHolder_lt?: InputMaybe<Scalars['String']>;
  newHolder_lte?: InputMaybe<Scalars['String']>;
  newHolder_not?: InputMaybe<Scalars['String']>;
  newHolder_not_contains?: InputMaybe<Scalars['String']>;
  newHolder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newHolder_not_ends_with?: InputMaybe<Scalars['String']>;
  newHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newHolder_not_in?: InputMaybe<Array<Scalars['String']>>;
  newHolder_not_starts_with?: InputMaybe<Scalars['String']>;
  newHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newHolder_starts_with?: InputMaybe<Scalars['String']>;
  newHolder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun?: InputMaybe<Scalars['String']>;
  noun_?: InputMaybe<Noun_Filter>;
  noun_contains?: InputMaybe<Scalars['String']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_ends_with?: InputMaybe<Scalars['String']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_gt?: InputMaybe<Scalars['String']>;
  noun_gte?: InputMaybe<Scalars['String']>;
  noun_in?: InputMaybe<Array<Scalars['String']>>;
  noun_lt?: InputMaybe<Scalars['String']>;
  noun_lte?: InputMaybe<Scalars['String']>;
  noun_not?: InputMaybe<Scalars['String']>;
  noun_not_contains?: InputMaybe<Scalars['String']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  noun_starts_with?: InputMaybe<Scalars['String']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_Filter>>>;
  previousHolder?: InputMaybe<Scalars['String']>;
  previousHolder_?: InputMaybe<Account_Filter>;
  previousHolder_contains?: InputMaybe<Scalars['String']>;
  previousHolder_contains_nocase?: InputMaybe<Scalars['String']>;
  previousHolder_ends_with?: InputMaybe<Scalars['String']>;
  previousHolder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousHolder_gt?: InputMaybe<Scalars['String']>;
  previousHolder_gte?: InputMaybe<Scalars['String']>;
  previousHolder_in?: InputMaybe<Array<Scalars['String']>>;
  previousHolder_lt?: InputMaybe<Scalars['String']>;
  previousHolder_lte?: InputMaybe<Scalars['String']>;
  previousHolder_not?: InputMaybe<Scalars['String']>;
  previousHolder_not_contains?: InputMaybe<Scalars['String']>;
  previousHolder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousHolder_not_ends_with?: InputMaybe<Scalars['String']>;
  previousHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousHolder_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousHolder_not_starts_with?: InputMaybe<Scalars['String']>;
  previousHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousHolder_starts_with?: InputMaybe<Scalars['String']>;
  previousHolder_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TransferEvent_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  newHolder = 'newHolder',
  newHolder__id = 'newHolder__id',
  newHolder__tokenBalance = 'newHolder__tokenBalance',
  newHolder__tokenBalanceRaw = 'newHolder__tokenBalanceRaw',
  newHolder__totalTokensHeld = 'newHolder__totalTokensHeld',
  newHolder__totalTokensHeldRaw = 'newHolder__totalTokensHeldRaw',
  noun = 'noun',
  noun__id = 'noun__id',
  previousHolder = 'previousHolder',
  previousHolder__id = 'previousHolder__id',
  previousHolder__tokenBalance = 'previousHolder__tokenBalance',
  previousHolder__tokenBalanceRaw = 'previousHolder__tokenBalanceRaw',
  previousHolder__totalTokensHeld = 'previousHolder__totalTokensHeld',
  previousHolder__totalTokensHeldRaw = 'previousHolder__totalTokensHeldRaw'
}

export type Vote = {
  __typename?: 'Vote';
  /** Block number of vote */
  blockNumber: Scalars['BigInt'];
  /** The timestamp of the block the vote is in */
  blockTimestamp: Scalars['BigInt'];
  /** Delegate ID + Proposal ID */
  id: Scalars['ID'];
  /** The Nouns used to vote */
  nouns?: Maybe<Array<Noun>>;
  /** Proposal that is being voted on */
  proposal: Proposal;
  /** The optional vote reason */
  reason?: Maybe<Scalars['String']>;
  /** Whether the vote is in favour of the proposal */
  support: Scalars['Boolean'];
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int'];
  /** Delegate that emitted the vote */
  voter: Delegate;
  /** Amount of votes in favour or against expressed as a BigInt normalized value for the Nouns ERC721 Token */
  votes: Scalars['BigInt'];
  /** Amount of votes in favour or against expressed in the smallest unit of the Nouns ERC721 Token */
  votesRaw: Scalars['BigInt'];
};


export type VoteNounsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Noun_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Noun_Filter>;
};

export type Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nouns?: InputMaybe<Array<Scalars['String']>>;
  nouns_?: InputMaybe<Noun_Filter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  or?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  support?: InputMaybe<Scalars['Boolean']>;
  supportDetailed?: InputMaybe<Scalars['Int']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']>>;
  support_in?: InputMaybe<Array<Scalars['Boolean']>>;
  support_not?: InputMaybe<Scalars['Boolean']>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_?: InputMaybe<Delegate_Filter>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votesRaw?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_gte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votesRaw_lt?: InputMaybe<Scalars['BigInt']>;
  votesRaw_lte?: InputMaybe<Scalars['BigInt']>;
  votesRaw_not?: InputMaybe<Scalars['BigInt']>;
  votesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Vote_OrderBy {
  blockNumber = 'blockNumber',
  blockTimestamp = 'blockTimestamp',
  id = 'id',
  nouns = 'nouns',
  proposal = 'proposal',
  proposal__abstainVotes = 'proposal__abstainVotes',
  proposal__adjustedTotalSupply = 'proposal__adjustedTotalSupply',
  proposal__againstVotes = 'proposal__againstVotes',
  proposal__canceledBlock = 'proposal__canceledBlock',
  proposal__canceledTimestamp = 'proposal__canceledTimestamp',
  proposal__createdBlock = 'proposal__createdBlock',
  proposal__createdTimestamp = 'proposal__createdTimestamp',
  proposal__createdTransactionHash = 'proposal__createdTransactionHash',
  proposal__description = 'proposal__description',
  proposal__endBlock = 'proposal__endBlock',
  proposal__executedBlock = 'proposal__executedBlock',
  proposal__executedTimestamp = 'proposal__executedTimestamp',
  proposal__executionETA = 'proposal__executionETA',
  proposal__forVotes = 'proposal__forVotes',
  proposal__id = 'proposal__id',
  proposal__lastUpdatedBlock = 'proposal__lastUpdatedBlock',
  proposal__lastUpdatedTimestamp = 'proposal__lastUpdatedTimestamp',
  proposal__maxQuorumVotesBPS = 'proposal__maxQuorumVotesBPS',
  proposal__minQuorumVotesBPS = 'proposal__minQuorumVotesBPS',
  proposal__objectionPeriodEndBlock = 'proposal__objectionPeriodEndBlock',
  proposal__onTimelockV1 = 'proposal__onTimelockV1',
  proposal__proposalThreshold = 'proposal__proposalThreshold',
  proposal__queuedBlock = 'proposal__queuedBlock',
  proposal__queuedTimestamp = 'proposal__queuedTimestamp',
  proposal__quorumCoefficient = 'proposal__quorumCoefficient',
  proposal__quorumVotes = 'proposal__quorumVotes',
  proposal__startBlock = 'proposal__startBlock',
  proposal__status = 'proposal__status',
  proposal__title = 'proposal__title',
  proposal__totalSupply = 'proposal__totalSupply',
  proposal__updatePeriodEndBlock = 'proposal__updatePeriodEndBlock',
  proposal__vetoedBlock = 'proposal__vetoedBlock',
  proposal__vetoedTimestamp = 'proposal__vetoedTimestamp',
  proposal__voteSnapshotBlock = 'proposal__voteSnapshotBlock',
  reason = 'reason',
  support = 'support',
  supportDetailed = 'supportDetailed',
  voter = 'voter',
  voter__delegatedVotes = 'voter__delegatedVotes',
  voter__delegatedVotesRaw = 'voter__delegatedVotesRaw',
  voter__id = 'voter__id',
  voter__tokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  votes = 'votes',
  votesRaw = 'votesRaw'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}

export type DelegatedVotesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DelegatedVotesQuery = { __typename?: 'Query', delegate?: { __typename?: 'Delegate', delegatedVotes: any } | null };

export type DelegateVotesAtBlockQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type DelegateVotesAtBlockQuery = { __typename?: 'Query', delegate?: { __typename?: 'Delegate', delegatedVotes: any } | null };

export type TokenBalancesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TokenBalancesQuery = { __typename?: 'Query', delegate?: { __typename?: 'Delegate', delegatedVotes: any } | null, account?: { __typename?: 'Account', tokenBalance: any, tokens: Array<{ __typename?: 'Noun', id: string, seed?: { __typename?: 'Seed', background: any, body: any, accessory: any, head: any, glasses: any } | null }> } | null };

export type GetCurrentAuctionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentAuctionQuery = { __typename?: 'Query', auctions: Array<{ __typename?: 'Auction', id: string, amount: any, noun: { __typename?: 'Noun', id: string, seed?: { __typename?: 'Seed', id: string, background: any, body: any, accessory: any, head: any, glasses: any } | null } }> };

export type GetPreviousAuctionsQueryVariables = Exact<{
  nounIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type GetPreviousAuctionsQuery = { __typename?: 'Query', auctions: Array<{ __typename?: 'Auction', id: string, amount: any, noun: { __typename?: 'Noun', id: string, seed?: { __typename?: 'Seed', id: string, background: any, body: any, accessory: any, head: any, glasses: any } | null } }> };

export type GetRecentProposalsQueryVariables = Exact<{
  recentTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetRecentProposalsQuery = { __typename?: 'Query', proposals: Array<{ __typename?: 'Proposal', id: string, title: string, status: ProposalStatus }> };

export type GetGovernanceDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGovernanceDataQuery = { __typename?: 'Query', governance?: { __typename?: 'Governance', currentTokenHolders: any, delegatedVotes: any } | null };

export type GetCandidateDataQueryVariables = Exact<{
  candidateId: Scalars['ID']['input'];
}>;


export type GetCandidateDataQuery = { __typename?: 'Query', proposalCandidate?: { __typename?: 'ProposalCandidate', id: string, slug: string, proposer: any, lastUpdatedTimestamp: any, createdTransactionHash: any, canceled: boolean, versions: Array<{ __typename?: 'ProposalCandidateVersion', content: { __typename?: 'ProposalCandidateContent', title: string } }>, latestVersion: { __typename?: 'ProposalCandidateVersion', content: { __typename?: 'ProposalCandidateContent', title: string, description: string, targets?: Array<any> | null, values?: Array<any> | null, signatures?: Array<string> | null, calldatas?: Array<any> | null, encodedProposalHash: any, proposalIdToUpdate: any, contentSignatures: Array<{ __typename?: 'ProposalCandidateSignature', id: string, sig: any, expirationTimestamp: any, canceled: boolean, reason: string, signer: { __typename?: 'Delegate', id: string, proposals: Array<{ __typename?: 'Proposal', id: string }> } }> } } } | null };

export type GetCandidateVotesQueryVariables = Exact<{
  candidateId: Scalars['ID']['input'];
}>;


export type GetCandidateVotesQuery = { __typename?: 'Query', candidateFeedbacks: Array<{ __typename?: 'CandidateFeedback', supportDetailed: number, votes: any, reason?: string | null, createdTimestamp: any, voter: { __typename?: 'Delegate', id: string }, candidate: { __typename?: 'ProposalCandidate', id: string } }> };

export type GetAllCandidateDataQueryVariables = Exact<{
  candidateSlugs?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetAllCandidateDataQuery = { __typename?: 'Query', proposalCandidates: Array<{ __typename?: 'ProposalCandidate', id: string, slug: string, proposer: any, lastUpdatedTimestamp: any, createdTransactionHash: any, canceled: boolean, versions: Array<{ __typename?: 'ProposalCandidateVersion', content: { __typename?: 'ProposalCandidateContent', title: string } }>, latestVersion: { __typename?: 'ProposalCandidateVersion', content: { __typename?: 'ProposalCandidateContent', title: string, description: string, targets?: Array<any> | null, values?: Array<any> | null, signatures?: Array<string> | null, calldatas?: Array<any> | null, encodedProposalHash: any, proposalIdToUpdate: any, contentSignatures: Array<{ __typename?: 'ProposalCandidateSignature', id: string, sig: any, expirationTimestamp: any, canceled: boolean, reason: string, signer: { __typename?: 'Delegate', id: string, proposals: Array<{ __typename?: 'Proposal', id: string }> } }> } } }> };



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
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_Filter;
  Account_orderBy: Account_OrderBy;
  Auction: ResolverTypeWrapper<Auction>;
  Auction_filter: Auction_Filter;
  Auction_orderBy: Auction_OrderBy;
  Bid: ResolverTypeWrapper<Bid>;
  Bid_filter: Bid_Filter;
  Bid_orderBy: Bid_OrderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  CandidateFeedback: ResolverTypeWrapper<CandidateFeedback>;
  CandidateFeedback_filter: CandidateFeedback_Filter;
  CandidateFeedback_orderBy: CandidateFeedback_OrderBy;
  Delegate: ResolverTypeWrapper<Delegate>;
  Delegate_filter: Delegate_Filter;
  Delegate_orderBy: Delegate_OrderBy;
  DelegationEvent: ResolverTypeWrapper<DelegationEvent>;
  DelegationEvent_filter: DelegationEvent_Filter;
  DelegationEvent_orderBy: DelegationEvent_OrderBy;
  DynamicQuorumParams: ResolverTypeWrapper<DynamicQuorumParams>;
  DynamicQuorumParams_filter: DynamicQuorumParams_Filter;
  DynamicQuorumParams_orderBy: DynamicQuorumParams_OrderBy;
  EscrowDeposit: ResolverTypeWrapper<EscrowDeposit>;
  EscrowDeposit_filter: EscrowDeposit_Filter;
  EscrowDeposit_orderBy: EscrowDeposit_OrderBy;
  EscrowWithdrawal: ResolverTypeWrapper<EscrowWithdrawal>;
  EscrowWithdrawal_filter: EscrowWithdrawal_Filter;
  EscrowWithdrawal_orderBy: EscrowWithdrawal_OrderBy;
  EscrowedNoun: ResolverTypeWrapper<EscrowedNoun>;
  EscrowedNoun_filter: EscrowedNoun_Filter;
  EscrowedNoun_orderBy: EscrowedNoun_OrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Fork: ResolverTypeWrapper<Fork>;
  ForkJoin: ResolverTypeWrapper<ForkJoin>;
  ForkJoin_filter: ForkJoin_Filter;
  ForkJoin_orderBy: ForkJoin_OrderBy;
  ForkJoinedNoun: ResolverTypeWrapper<ForkJoinedNoun>;
  ForkJoinedNoun_filter: ForkJoinedNoun_Filter;
  ForkJoinedNoun_orderBy: ForkJoinedNoun_OrderBy;
  Fork_filter: Fork_Filter;
  Fork_orderBy: Fork_OrderBy;
  Governance: ResolverTypeWrapper<Governance>;
  Governance_filter: Governance_Filter;
  Governance_orderBy: Governance_OrderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  Noun: ResolverTypeWrapper<Noun>;
  Noun_filter: Noun_Filter;
  Noun_orderBy: Noun_OrderBy;
  OrderDirection: OrderDirection;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalCandidate: ResolverTypeWrapper<ProposalCandidate>;
  ProposalCandidateContent: ResolverTypeWrapper<ProposalCandidateContent>;
  ProposalCandidateContent_filter: ProposalCandidateContent_Filter;
  ProposalCandidateContent_orderBy: ProposalCandidateContent_OrderBy;
  ProposalCandidateSignature: ResolverTypeWrapper<ProposalCandidateSignature>;
  ProposalCandidateSignature_filter: ProposalCandidateSignature_Filter;
  ProposalCandidateSignature_orderBy: ProposalCandidateSignature_OrderBy;
  ProposalCandidateVersion: ResolverTypeWrapper<ProposalCandidateVersion>;
  ProposalCandidateVersion_filter: ProposalCandidateVersion_Filter;
  ProposalCandidateVersion_orderBy: ProposalCandidateVersion_OrderBy;
  ProposalCandidate_filter: ProposalCandidate_Filter;
  ProposalCandidate_orderBy: ProposalCandidate_OrderBy;
  ProposalFeedback: ResolverTypeWrapper<ProposalFeedback>;
  ProposalFeedback_filter: ProposalFeedback_Filter;
  ProposalFeedback_orderBy: ProposalFeedback_OrderBy;
  ProposalStatus: ProposalStatus;
  ProposalVersion: ResolverTypeWrapper<ProposalVersion>;
  ProposalVersion_filter: ProposalVersion_Filter;
  ProposalVersion_orderBy: ProposalVersion_OrderBy;
  Proposal_filter: Proposal_Filter;
  Proposal_orderBy: Proposal_OrderBy;
  Query: ResolverTypeWrapper<{}>;
  Seed: ResolverTypeWrapper<Seed>;
  Seed_filter: Seed_Filter;
  Seed_orderBy: Seed_OrderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferEvent: ResolverTypeWrapper<TransferEvent>;
  TransferEvent_filter: TransferEvent_Filter;
  TransferEvent_orderBy: TransferEvent_OrderBy;
  Vote: ResolverTypeWrapper<Vote>;
  Vote_filter: Vote_Filter;
  Vote_orderBy: Vote_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Account_filter: Account_Filter;
  Auction: Auction;
  Auction_filter: Auction_Filter;
  Bid: Bid;
  Bid_filter: Bid_Filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  CandidateFeedback: CandidateFeedback;
  CandidateFeedback_filter: CandidateFeedback_Filter;
  Delegate: Delegate;
  Delegate_filter: Delegate_Filter;
  DelegationEvent: DelegationEvent;
  DelegationEvent_filter: DelegationEvent_Filter;
  DynamicQuorumParams: DynamicQuorumParams;
  DynamicQuorumParams_filter: DynamicQuorumParams_Filter;
  EscrowDeposit: EscrowDeposit;
  EscrowDeposit_filter: EscrowDeposit_Filter;
  EscrowWithdrawal: EscrowWithdrawal;
  EscrowWithdrawal_filter: EscrowWithdrawal_Filter;
  EscrowedNoun: EscrowedNoun;
  EscrowedNoun_filter: EscrowedNoun_Filter;
  Float: Scalars['Float'];
  Fork: Fork;
  ForkJoin: ForkJoin;
  ForkJoin_filter: ForkJoin_Filter;
  ForkJoinedNoun: ForkJoinedNoun;
  ForkJoinedNoun_filter: ForkJoinedNoun_Filter;
  Fork_filter: Fork_Filter;
  Governance: Governance;
  Governance_filter: Governance_Filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Noun: Noun;
  Noun_filter: Noun_Filter;
  Proposal: Proposal;
  ProposalCandidate: ProposalCandidate;
  ProposalCandidateContent: ProposalCandidateContent;
  ProposalCandidateContent_filter: ProposalCandidateContent_Filter;
  ProposalCandidateSignature: ProposalCandidateSignature;
  ProposalCandidateSignature_filter: ProposalCandidateSignature_Filter;
  ProposalCandidateVersion: ProposalCandidateVersion;
  ProposalCandidateVersion_filter: ProposalCandidateVersion_Filter;
  ProposalCandidate_filter: ProposalCandidate_Filter;
  ProposalFeedback: ProposalFeedback;
  ProposalFeedback_filter: ProposalFeedback_Filter;
  ProposalVersion: ProposalVersion;
  ProposalVersion_filter: ProposalVersion_Filter;
  Proposal_filter: Proposal_Filter;
  Query: {};
  Seed: Seed;
  Seed_filter: Seed_Filter;
  String: Scalars['String'];
  Subscription: {};
  TransferEvent: TransferEvent;
  TransferEvent_filter: TransferEvent_Filter;
  Vote: Vote;
  Vote_filter: Vote_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  delegate?: Resolver<Maybe<ResolversTypes['Delegate']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nouns?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<AccountNounsArgs, 'first' | 'skip'>>;
  tokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenBalanceRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokensHeld?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokensHeldRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bidder?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<AuctionBidsArgs, 'first' | 'skip'>>;
  endTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  settled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  auction?: Resolver<ResolversTypes['Auction'], ParentType, ContextType>;
  bidder?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CandidateFeedbackResolvers<ContextType = any, ParentType extends ResolversParentTypes['CandidateFeedback'] = ResolversParentTypes['CandidateFeedback']> = {
  candidate?: Resolver<ResolversTypes['ProposalCandidate'], ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportDetailed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DelegateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delegate'] = ResolversParentTypes['Delegate']> = {
  delegatedVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nounsRepresented?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<DelegateNounsRepresentedArgs, 'first' | 'skip'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<DelegateProposalsArgs, 'first' | 'skip'>>;
  tokenHoldersRepresented?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<DelegateTokenHoldersRepresentedArgs, 'first' | 'skip'>>;
  tokenHoldersRepresentedAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<DelegateVotesArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DelegationEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DelegationEvent'] = ResolversParentTypes['DelegationEvent']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  newDelegate?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  previousDelegate?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicQuorumParamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DynamicQuorumParams'] = ResolversParentTypes['DynamicQuorumParams']> = {
  dynamicQuorumStartBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxQuorumVotesBPS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minQuorumVotesBPS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quorumCoefficient?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EscrowDepositResolvers<ContextType = any, ParentType extends ResolversParentTypes['EscrowDeposit'] = ResolversParentTypes['EscrowDeposit']> = {
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fork?: Resolver<ResolversTypes['Fork'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  proposalIDs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenIDs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EscrowWithdrawalResolvers<ContextType = any, ParentType extends ResolversParentTypes['EscrowWithdrawal'] = ResolversParentTypes['EscrowWithdrawal']> = {
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fork?: Resolver<ResolversTypes['Fork'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  tokenIDs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EscrowedNounResolvers<ContextType = any, ParentType extends ResolversParentTypes['EscrowedNoun'] = ResolversParentTypes['EscrowedNoun']> = {
  escrowDeposit?: Resolver<ResolversTypes['EscrowDeposit'], ParentType, ContextType>;
  fork?: Resolver<ResolversTypes['Fork'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fork'] = ResolversParentTypes['Fork']> = {
  escrowDeposits?: Resolver<Array<ResolversTypes['EscrowDeposit']>, ParentType, ContextType, RequireFields<ForkEscrowDepositsArgs, 'first' | 'skip'>>;
  escrowWithdrawals?: Resolver<Array<ResolversTypes['EscrowWithdrawal']>, ParentType, ContextType, RequireFields<ForkEscrowWithdrawalsArgs, 'first' | 'skip'>>;
  escrowedNouns?: Resolver<Array<ResolversTypes['EscrowedNoun']>, ParentType, ContextType, RequireFields<ForkEscrowedNounsArgs, 'first' | 'skip'>>;
  executed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  executedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  forkID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  forkToken?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  forkTreasury?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  forkingPeriodEndTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  joinedNouns?: Resolver<Array<ResolversTypes['ForkJoinedNoun']>, ParentType, ContextType, RequireFields<ForkJoinedNounsArgs, 'first' | 'skip'>>;
  tokensForkingCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokensInEscrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForkJoinResolvers<ContextType = any, ParentType extends ResolversParentTypes['ForkJoin'] = ResolversParentTypes['ForkJoin']> = {
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fork?: Resolver<ResolversTypes['Fork'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  proposalIDs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenIDs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForkJoinedNounResolvers<ContextType = any, ParentType extends ResolversParentTypes['ForkJoinedNoun'] = ResolversParentTypes['ForkJoinedNoun']> = {
  fork?: Resolver<ResolversTypes['Fork'], ParentType, ContextType>;
  forkJoin?: Resolver<ResolversTypes['ForkJoin'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GovernanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Governance'] = ResolversParentTypes['Governance']> = {
  currentDelegates?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentTokenHolders?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedVotesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposalsQueued?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDelegates?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalTokenHolders?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  voteSnapshotBlockSwitchProposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type NounResolvers<ContextType = any, ParentType extends ResolversParentTypes['Noun'] = ResolversParentTypes['Noun']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<NounVotesArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = {
  abstainVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  adjustedTotalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  againstVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  calldatas?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  canceledBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  canceledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTransactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executedBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executionETA?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feedbackPosts?: Resolver<Array<ResolversTypes['ProposalFeedback']>, ParentType, ContextType, RequireFields<ProposalFeedbackPostsArgs, 'first' | 'skip'>>;
  forVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdatedBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdatedTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxQuorumVotesBPS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minQuorumVotesBPS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  objectionPeriodEndBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  onTimelockV1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  proposalThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  queuedBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  queuedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quorumCoefficient?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  quorumVotes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  signatures?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  signers?: Resolver<Maybe<Array<ResolversTypes['Delegate']>>, ParentType, ContextType, RequireFields<ProposalSignersArgs, 'first' | 'skip'>>;
  startBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProposalStatus'], ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatePeriodEndBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  vetoedBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  vetoedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  voteSnapshotBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<ProposalVotesArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalCandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalCandidate'] = ResolversParentTypes['ProposalCandidate']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  canceledBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  canceledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTransactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdatedBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastUpdatedTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestVersion?: Resolver<ResolversTypes['ProposalCandidateVersion'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versions?: Resolver<Array<ResolversTypes['ProposalCandidateVersion']>, ParentType, ContextType, RequireFields<ProposalCandidateVersionsArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalCandidateContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalCandidateContent'] = ResolversParentTypes['ProposalCandidateContent']> = {
  calldatas?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  contentSignatures?: Resolver<Array<ResolversTypes['ProposalCandidateSignature']>, ParentType, ContextType, RequireFields<ProposalCandidateContentContentSignaturesArgs, 'first' | 'skip'>>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encodedProposalHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  matchingProposalIds?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  proposalIdToUpdate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  signatures?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalCandidateSignatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalCandidateSignature'] = ResolversParentTypes['ProposalCandidateSignature']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['ProposalCandidateContent'], ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  encodedProposalHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expirationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sig?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sigDigest?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalCandidateVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalCandidateVersion'] = ResolversParentTypes['ProposalCandidateVersion']> = {
  content?: Resolver<ResolversTypes['ProposalCandidateContent'], ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['ProposalCandidate'], ParentType, ContextType>;
  updateMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalFeedbackResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalFeedback'] = ResolversParentTypes['ProposalFeedback']> = {
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportDetailed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProposalVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalVersion'] = ResolversParentTypes['ProposalVersion']> = {
  calldatas?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  signatures?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  auction?: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryAuctionArgs, 'id' | 'subgraphError'>>;
  auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryAuctionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QueryBidArgs, 'id' | 'subgraphError'>>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QueryBidsArgs, 'first' | 'skip' | 'subgraphError'>>;
  candidateFeedback?: Resolver<Maybe<ResolversTypes['CandidateFeedback']>, ParentType, ContextType, RequireFields<QueryCandidateFeedbackArgs, 'id' | 'subgraphError'>>;
  candidateFeedbacks?: Resolver<Array<ResolversTypes['CandidateFeedback']>, ParentType, ContextType, RequireFields<QueryCandidateFeedbacksArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegate?: Resolver<Maybe<ResolversTypes['Delegate']>, ParentType, ContextType, RequireFields<QueryDelegateArgs, 'id' | 'subgraphError'>>;
  delegates?: Resolver<Array<ResolversTypes['Delegate']>, ParentType, ContextType, RequireFields<QueryDelegatesArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegationEvent?: Resolver<Maybe<ResolversTypes['DelegationEvent']>, ParentType, ContextType, RequireFields<QueryDelegationEventArgs, 'id' | 'subgraphError'>>;
  delegationEvents?: Resolver<Array<ResolversTypes['DelegationEvent']>, ParentType, ContextType, RequireFields<QueryDelegationEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  dynamicQuorumParams?: Resolver<Array<ResolversTypes['DynamicQuorumParams']>, ParentType, ContextType, RequireFields<QueryDynamicQuorumParamsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowDeposit?: Resolver<Maybe<ResolversTypes['EscrowDeposit']>, ParentType, ContextType, RequireFields<QueryEscrowDepositArgs, 'id' | 'subgraphError'>>;
  escrowDeposits?: Resolver<Array<ResolversTypes['EscrowDeposit']>, ParentType, ContextType, RequireFields<QueryEscrowDepositsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowWithdrawal?: Resolver<Maybe<ResolversTypes['EscrowWithdrawal']>, ParentType, ContextType, RequireFields<QueryEscrowWithdrawalArgs, 'id' | 'subgraphError'>>;
  escrowWithdrawals?: Resolver<Array<ResolversTypes['EscrowWithdrawal']>, ParentType, ContextType, RequireFields<QueryEscrowWithdrawalsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowedNoun?: Resolver<Maybe<ResolversTypes['EscrowedNoun']>, ParentType, ContextType, RequireFields<QueryEscrowedNounArgs, 'id' | 'subgraphError'>>;
  escrowedNouns?: Resolver<Array<ResolversTypes['EscrowedNoun']>, ParentType, ContextType, RequireFields<QueryEscrowedNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  fork?: Resolver<Maybe<ResolversTypes['Fork']>, ParentType, ContextType, RequireFields<QueryForkArgs, 'id' | 'subgraphError'>>;
  forkJoin?: Resolver<Maybe<ResolversTypes['ForkJoin']>, ParentType, ContextType, RequireFields<QueryForkJoinArgs, 'id' | 'subgraphError'>>;
  forkJoinedNoun?: Resolver<Maybe<ResolversTypes['ForkJoinedNoun']>, ParentType, ContextType, RequireFields<QueryForkJoinedNounArgs, 'id' | 'subgraphError'>>;
  forkJoinedNouns?: Resolver<Array<ResolversTypes['ForkJoinedNoun']>, ParentType, ContextType, RequireFields<QueryForkJoinedNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  forkJoins?: Resolver<Array<ResolversTypes['ForkJoin']>, ParentType, ContextType, RequireFields<QueryForkJoinsArgs, 'first' | 'skip' | 'subgraphError'>>;
  forks?: Resolver<Array<ResolversTypes['Fork']>, ParentType, ContextType, RequireFields<QueryForksArgs, 'first' | 'skip' | 'subgraphError'>>;
  governance?: Resolver<Maybe<ResolversTypes['Governance']>, ParentType, ContextType, RequireFields<QueryGovernanceArgs, 'id' | 'subgraphError'>>;
  governances?: Resolver<Array<ResolversTypes['Governance']>, ParentType, ContextType, RequireFields<QueryGovernancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  noun?: Resolver<Maybe<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<QueryNounArgs, 'id' | 'subgraphError'>>;
  nouns?: Resolver<Array<ResolversTypes['Noun']>, ParentType, ContextType, RequireFields<QueryNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryProposalArgs, 'id' | 'subgraphError'>>;
  proposalCandidate?: Resolver<Maybe<ResolversTypes['ProposalCandidate']>, ParentType, ContextType, RequireFields<QueryProposalCandidateArgs, 'id' | 'subgraphError'>>;
  proposalCandidateContent?: Resolver<Maybe<ResolversTypes['ProposalCandidateContent']>, ParentType, ContextType, RequireFields<QueryProposalCandidateContentArgs, 'id' | 'subgraphError'>>;
  proposalCandidateContents?: Resolver<Array<ResolversTypes['ProposalCandidateContent']>, ParentType, ContextType, RequireFields<QueryProposalCandidateContentsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidateSignature?: Resolver<Maybe<ResolversTypes['ProposalCandidateSignature']>, ParentType, ContextType, RequireFields<QueryProposalCandidateSignatureArgs, 'id' | 'subgraphError'>>;
  proposalCandidateSignatures?: Resolver<Array<ResolversTypes['ProposalCandidateSignature']>, ParentType, ContextType, RequireFields<QueryProposalCandidateSignaturesArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidateVersion?: Resolver<Maybe<ResolversTypes['ProposalCandidateVersion']>, ParentType, ContextType, RequireFields<QueryProposalCandidateVersionArgs, 'id' | 'subgraphError'>>;
  proposalCandidateVersions?: Resolver<Array<ResolversTypes['ProposalCandidateVersion']>, ParentType, ContextType, RequireFields<QueryProposalCandidateVersionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidates?: Resolver<Array<ResolversTypes['ProposalCandidate']>, ParentType, ContextType, RequireFields<QueryProposalCandidatesArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalFeedback?: Resolver<Maybe<ResolversTypes['ProposalFeedback']>, ParentType, ContextType, RequireFields<QueryProposalFeedbackArgs, 'id' | 'subgraphError'>>;
  proposalFeedbacks?: Resolver<Array<ResolversTypes['ProposalFeedback']>, ParentType, ContextType, RequireFields<QueryProposalFeedbacksArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalVersion?: Resolver<Maybe<ResolversTypes['ProposalVersion']>, ParentType, ContextType, RequireFields<QueryProposalVersionArgs, 'id' | 'subgraphError'>>;
  proposalVersions?: Resolver<Array<ResolversTypes['ProposalVersion']>, ParentType, ContextType, RequireFields<QueryProposalVersionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryProposalsArgs, 'first' | 'skip' | 'subgraphError'>>;
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType, RequireFields<QuerySeedArgs, 'id' | 'subgraphError'>>;
  seeds?: Resolver<Array<ResolversTypes['Seed']>, ParentType, ContextType, RequireFields<QuerySeedsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transferEvent?: Resolver<Maybe<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QueryTransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: Resolver<Array<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QueryTransferEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  vote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryVoteArgs, 'id' | 'subgraphError'>>;
  votes?: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<QueryVotesArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type SeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Seed'] = ResolversParentTypes['Seed']> = {
  accessory?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  background?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  glasses?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  head?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  auction?: SubscriptionResolver<Maybe<ResolversTypes['Auction']>, "auction", ParentType, ContextType, RequireFields<SubscriptionAuctionArgs, 'id' | 'subgraphError'>>;
  auctions?: SubscriptionResolver<Array<ResolversTypes['Auction']>, "auctions", ParentType, ContextType, RequireFields<SubscriptionAuctionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "bid", ParentType, ContextType, RequireFields<SubscriptionBidArgs, 'id' | 'subgraphError'>>;
  bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "bids", ParentType, ContextType, RequireFields<SubscriptionBidsArgs, 'first' | 'skip' | 'subgraphError'>>;
  candidateFeedback?: SubscriptionResolver<Maybe<ResolversTypes['CandidateFeedback']>, "candidateFeedback", ParentType, ContextType, RequireFields<SubscriptionCandidateFeedbackArgs, 'id' | 'subgraphError'>>;
  candidateFeedbacks?: SubscriptionResolver<Array<ResolversTypes['CandidateFeedback']>, "candidateFeedbacks", ParentType, ContextType, RequireFields<SubscriptionCandidateFeedbacksArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegate?: SubscriptionResolver<Maybe<ResolversTypes['Delegate']>, "delegate", ParentType, ContextType, RequireFields<SubscriptionDelegateArgs, 'id' | 'subgraphError'>>;
  delegates?: SubscriptionResolver<Array<ResolversTypes['Delegate']>, "delegates", ParentType, ContextType, RequireFields<SubscriptionDelegatesArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegationEvent?: SubscriptionResolver<Maybe<ResolversTypes['DelegationEvent']>, "delegationEvent", ParentType, ContextType, RequireFields<SubscriptionDelegationEventArgs, 'id' | 'subgraphError'>>;
  delegationEvents?: SubscriptionResolver<Array<ResolversTypes['DelegationEvent']>, "delegationEvents", ParentType, ContextType, RequireFields<SubscriptionDelegationEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  dynamicQuorumParams?: SubscriptionResolver<Array<ResolversTypes['DynamicQuorumParams']>, "dynamicQuorumParams", ParentType, ContextType, RequireFields<SubscriptionDynamicQuorumParamsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowDeposit?: SubscriptionResolver<Maybe<ResolversTypes['EscrowDeposit']>, "escrowDeposit", ParentType, ContextType, RequireFields<SubscriptionEscrowDepositArgs, 'id' | 'subgraphError'>>;
  escrowDeposits?: SubscriptionResolver<Array<ResolversTypes['EscrowDeposit']>, "escrowDeposits", ParentType, ContextType, RequireFields<SubscriptionEscrowDepositsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowWithdrawal?: SubscriptionResolver<Maybe<ResolversTypes['EscrowWithdrawal']>, "escrowWithdrawal", ParentType, ContextType, RequireFields<SubscriptionEscrowWithdrawalArgs, 'id' | 'subgraphError'>>;
  escrowWithdrawals?: SubscriptionResolver<Array<ResolversTypes['EscrowWithdrawal']>, "escrowWithdrawals", ParentType, ContextType, RequireFields<SubscriptionEscrowWithdrawalsArgs, 'first' | 'skip' | 'subgraphError'>>;
  escrowedNoun?: SubscriptionResolver<Maybe<ResolversTypes['EscrowedNoun']>, "escrowedNoun", ParentType, ContextType, RequireFields<SubscriptionEscrowedNounArgs, 'id' | 'subgraphError'>>;
  escrowedNouns?: SubscriptionResolver<Array<ResolversTypes['EscrowedNoun']>, "escrowedNouns", ParentType, ContextType, RequireFields<SubscriptionEscrowedNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  fork?: SubscriptionResolver<Maybe<ResolversTypes['Fork']>, "fork", ParentType, ContextType, RequireFields<SubscriptionForkArgs, 'id' | 'subgraphError'>>;
  forkJoin?: SubscriptionResolver<Maybe<ResolversTypes['ForkJoin']>, "forkJoin", ParentType, ContextType, RequireFields<SubscriptionForkJoinArgs, 'id' | 'subgraphError'>>;
  forkJoinedNoun?: SubscriptionResolver<Maybe<ResolversTypes['ForkJoinedNoun']>, "forkJoinedNoun", ParentType, ContextType, RequireFields<SubscriptionForkJoinedNounArgs, 'id' | 'subgraphError'>>;
  forkJoinedNouns?: SubscriptionResolver<Array<ResolversTypes['ForkJoinedNoun']>, "forkJoinedNouns", ParentType, ContextType, RequireFields<SubscriptionForkJoinedNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  forkJoins?: SubscriptionResolver<Array<ResolversTypes['ForkJoin']>, "forkJoins", ParentType, ContextType, RequireFields<SubscriptionForkJoinsArgs, 'first' | 'skip' | 'subgraphError'>>;
  forks?: SubscriptionResolver<Array<ResolversTypes['Fork']>, "forks", ParentType, ContextType, RequireFields<SubscriptionForksArgs, 'first' | 'skip' | 'subgraphError'>>;
  governance?: SubscriptionResolver<Maybe<ResolversTypes['Governance']>, "governance", ParentType, ContextType, RequireFields<SubscriptionGovernanceArgs, 'id' | 'subgraphError'>>;
  governances?: SubscriptionResolver<Array<ResolversTypes['Governance']>, "governances", ParentType, ContextType, RequireFields<SubscriptionGovernancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  noun?: SubscriptionResolver<Maybe<ResolversTypes['Noun']>, "noun", ParentType, ContextType, RequireFields<SubscriptionNounArgs, 'id' | 'subgraphError'>>;
  nouns?: SubscriptionResolver<Array<ResolversTypes['Noun']>, "nouns", ParentType, ContextType, RequireFields<SubscriptionNounsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposal?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "proposal", ParentType, ContextType, RequireFields<SubscriptionProposalArgs, 'id' | 'subgraphError'>>;
  proposalCandidate?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCandidate']>, "proposalCandidate", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateArgs, 'id' | 'subgraphError'>>;
  proposalCandidateContent?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCandidateContent']>, "proposalCandidateContent", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateContentArgs, 'id' | 'subgraphError'>>;
  proposalCandidateContents?: SubscriptionResolver<Array<ResolversTypes['ProposalCandidateContent']>, "proposalCandidateContents", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateContentsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidateSignature?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCandidateSignature']>, "proposalCandidateSignature", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateSignatureArgs, 'id' | 'subgraphError'>>;
  proposalCandidateSignatures?: SubscriptionResolver<Array<ResolversTypes['ProposalCandidateSignature']>, "proposalCandidateSignatures", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateSignaturesArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidateVersion?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCandidateVersion']>, "proposalCandidateVersion", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateVersionArgs, 'id' | 'subgraphError'>>;
  proposalCandidateVersions?: SubscriptionResolver<Array<ResolversTypes['ProposalCandidateVersion']>, "proposalCandidateVersions", ParentType, ContextType, RequireFields<SubscriptionProposalCandidateVersionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalCandidates?: SubscriptionResolver<Array<ResolversTypes['ProposalCandidate']>, "proposalCandidates", ParentType, ContextType, RequireFields<SubscriptionProposalCandidatesArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalFeedback?: SubscriptionResolver<Maybe<ResolversTypes['ProposalFeedback']>, "proposalFeedback", ParentType, ContextType, RequireFields<SubscriptionProposalFeedbackArgs, 'id' | 'subgraphError'>>;
  proposalFeedbacks?: SubscriptionResolver<Array<ResolversTypes['ProposalFeedback']>, "proposalFeedbacks", ParentType, ContextType, RequireFields<SubscriptionProposalFeedbacksArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposalVersion?: SubscriptionResolver<Maybe<ResolversTypes['ProposalVersion']>, "proposalVersion", ParentType, ContextType, RequireFields<SubscriptionProposalVersionArgs, 'id' | 'subgraphError'>>;
  proposalVersions?: SubscriptionResolver<Array<ResolversTypes['ProposalVersion']>, "proposalVersions", ParentType, ContextType, RequireFields<SubscriptionProposalVersionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  proposals?: SubscriptionResolver<Array<ResolversTypes['Proposal']>, "proposals", ParentType, ContextType, RequireFields<SubscriptionProposalsArgs, 'first' | 'skip' | 'subgraphError'>>;
  seed?: SubscriptionResolver<Maybe<ResolversTypes['Seed']>, "seed", ParentType, ContextType, RequireFields<SubscriptionSeedArgs, 'id' | 'subgraphError'>>;
  seeds?: SubscriptionResolver<Array<ResolversTypes['Seed']>, "seeds", ParentType, ContextType, RequireFields<SubscriptionSeedsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transferEvent?: SubscriptionResolver<Maybe<ResolversTypes['TransferEvent']>, "transferEvent", ParentType, ContextType, RequireFields<SubscriptionTransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: SubscriptionResolver<Array<ResolversTypes['TransferEvent']>, "transferEvents", ParentType, ContextType, RequireFields<SubscriptionTransferEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  vote?: SubscriptionResolver<Maybe<ResolversTypes['Vote']>, "vote", ParentType, ContextType, RequireFields<SubscriptionVoteArgs, 'id' | 'subgraphError'>>;
  votes?: SubscriptionResolver<Array<ResolversTypes['Vote']>, "votes", ParentType, ContextType, RequireFields<SubscriptionVotesArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type TransferEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferEvent'] = ResolversParentTypes['TransferEvent']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  newHolder?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  noun?: Resolver<ResolversTypes['Noun'], ParentType, ContextType>;
  previousHolder?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nouns?: Resolver<Maybe<Array<ResolversTypes['Noun']>>, ParentType, ContextType, RequireFields<VoteNounsArgs, 'first' | 'skip'>>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  support?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  supportDetailed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voter?: Resolver<ResolversTypes['Delegate'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  votesRaw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Auction?: AuctionResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  CandidateFeedback?: CandidateFeedbackResolvers<ContextType>;
  Delegate?: DelegateResolvers<ContextType>;
  DelegationEvent?: DelegationEventResolvers<ContextType>;
  DynamicQuorumParams?: DynamicQuorumParamsResolvers<ContextType>;
  EscrowDeposit?: EscrowDepositResolvers<ContextType>;
  EscrowWithdrawal?: EscrowWithdrawalResolvers<ContextType>;
  EscrowedNoun?: EscrowedNounResolvers<ContextType>;
  Fork?: ForkResolvers<ContextType>;
  ForkJoin?: ForkJoinResolvers<ContextType>;
  ForkJoinedNoun?: ForkJoinedNounResolvers<ContextType>;
  Governance?: GovernanceResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Noun?: NounResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalCandidate?: ProposalCandidateResolvers<ContextType>;
  ProposalCandidateContent?: ProposalCandidateContentResolvers<ContextType>;
  ProposalCandidateSignature?: ProposalCandidateSignatureResolvers<ContextType>;
  ProposalCandidateVersion?: ProposalCandidateVersionResolvers<ContextType>;
  ProposalFeedback?: ProposalFeedbackResolvers<ContextType>;
  ProposalVersion?: ProposalVersionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Seed?: SeedResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TransferEvent?: TransferEventResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};
