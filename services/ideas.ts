import { Idea, IdeaExpiryOption, TagType } from "@prisma/client";
import prisma from "@/lib/prisma";
import { DATE_FILTERS, getIsClosed } from "../graphql/utils/queryUtils";
import { VirtualTags } from "@/utils/virtual";
import moment from "moment";

const sortFn: { [key: string]: any } = {
  LATEST: (a: any, b: any) => {
    const dateA: any = new Date(a.createdAt);
    const dateB: any = new Date(b.createdAt);
    return dateB - dateA;
  },
  VOTES_DESC: (a: any, b: any) => b.votecount - a.votecount,
  VOTES_ASC: (a: any, b: any) => a.votecount - b.votecount,
  OLDEST: (a: any, b: any) => {
    const dateA: any = new Date(a.createdAt);
    const dateB: any = new Date(b.createdAt);
    return dateA - dateB;
  },
};

const PROFILE_TAB_FILTERS: { [key: string]: any } = {
  SUBMISSIONS: (wallet: string) => ({ creatorId: wallet }),
  COMMENTS: (wallet: string) => ({
    comments: {
      some: {
        authorId: wallet,
      },
    },
  }),
  DOWN_VOTES: (wallet: string) => ({
    votes: {
      some: {
        voterId: wallet,
        direction: -1,
      },
    },
    creatorId: { not: wallet },
  }),
  UP_VOTES: (wallet: string) => ({
    votes: {
      some: {
        voterId: wallet,
        direction: 1,
      },
    },
    creatorId: { not: wallet },
  }),
  DEFAULT: (_: string) => ({}),
};

export const calculateVotes = (votes: any) => {
  let count = 0;
  votes.forEach((vote: any) => {
    count = count + vote.direction * vote.voterWeight;
  });

  return count;
};

export const calculateConsensus = (idea: Idea, voteCount: number) => {
  if (!idea.tokenSupplyOnCreate) {
    return undefined;
  }

  const consensus = (voteCount / idea.tokenSupplyOnCreate) * 100;
  return Math.min(Math.max(Math.floor(consensus), 0), 100);
};

class IdeasService {
  static async all({ sortBy }: { sortBy?: string }) {
    try {
      const ideas = await prisma.idea.findMany({
        where: {
          deleted: false,
        },
        include: {
          votes: {
            include: {
              voter: true,
            },
          },
          _count: {
            select: {
              comments: { where: { deleted: false } },
            },
          },
        },
      });

      const ideaData = ideas
        .map((idea: any) => {
          const votecount = calculateVotes(idea.votes);
          const closed = getIsClosed(idea);

          return { ...idea, votecount, closed };
        })
        .sort(sortFn[sortBy || "LATEST"]);

      return ideaData;
    } catch (e: any) {
      throw e;
    }
  }

  static async findWhere({
    sortBy,
    tags,
    date,
    wallet,
    tab,
    hideDeleted = true,
    communityId,
    isHomePage = false,
  }: {
    sortBy?: string;
    tags?: TagType[];
    date?: string;
    wallet?: string;
    tab?: string;
    hideDeleted?: boolean;
    communityId: string;
    isHomePage?: boolean;
  }) {
    try {
      const dateRange: any = DATE_FILTERS[date || "ALL_TIME"].filterFn();
      const profileFilters: any = PROFILE_TAB_FILTERS[tab || "DEFAULT"](wallet);
      let hasVirtualTag = false;
      let nonVirtualTags: TagType[] = [];

      // Check if any of the tags are virtual tags, if there are no virtual tags we can apply tag filtering
      // directly at the query level. If there are virtual tags we need to load all ideas and then filter them
      // in the app logic.
      if (tags) {
        tags.forEach((tag) => {
          if (VirtualTags[tag]) {
            hasVirtualTag = true;
          } else {
            nonVirtualTags.push(tag);
          }
        });
      }

      const ideas = await prisma.idea.findMany({
        where: {
          ...(hideDeleted && { deleted: false }),
          createdAt: {
            gte: dateRange.gte,
            lte: dateRange.lte,
          },
          ...profileFilters,
          communityId: communityId,
          ...(nonVirtualTags.length > 0 &&
            !hasVirtualTag && {
              tags: {
                some: {
                  type: {
                    in: nonVirtualTags,
                  },
                },
              },
            }),
        },
        include: {
          tags: true,
          votes: {
            include: {
              voter: true,
            },
          },
          _count: {
            select: {
              comments: { where: { deleted: false } },
            },
          },
        },
        ...(isHomePage && {
          take: 5,
          orderBy: {
            createdAt: "desc",
          },
        }),
      });

      const ideaData = ideas
        .map((idea: any) => {
          const votecount = calculateVotes(idea.votes);
          const consensus = calculateConsensus(idea, votecount);
          const closed = getIsClosed(idea);

          return { ...idea, votecount, consensus, closed };
        })
        .filter((idea: any) => {
          if (!tags || tags.length === 0 || !hasVirtualTag) {
            return true;
          }
          return tags.some((tag) => {
            const virtualTag = VirtualTags[tag];
            if (virtualTag) {
              return virtualTag.filterFn(idea);
            }
            return idea.tags.some((ideaTag: any) => ideaTag.type === tag);
          });
        })
        .sort(sortFn[sortBy || "LATEST"]);

      return ideaData;
    } catch (e: any) {
      throw e;
    }
  }

  static async get(id: string, communityId: string) {
    try {
      const idea = await prisma.idea.findUnique({
        where: {
          id,
        },
        include: {
          tags: true,
          images: {
            take: 1,
          },
          votes: {
            include: {
              voter: true,
            },
          },
          _count: {
            select: {
              comments: { where: { deleted: false } },
            },
          },
        },
      });

      if (!idea || idea.communityId !== communityId) {
        throw new Error("Idea not found");
      }

      if (idea.deleted) {
        throw new Error("Idea has been deleted!");
      }

      const votecount = calculateVotes(idea.votes);
      const consensus = calculateConsensus(idea, votecount);
      const closed = getIsClosed(idea);

      const ideaData = { ...idea, closed, consensus, votecount };

      return ideaData;
    } catch (e: any) {
      throw e;
    }
  }

  static async createIdea(
    data: {
      title: string;
      tldr: string;
      description: string;
      tags: TagType[];
      expiryOption: IdeaExpiryOption;
      headerImage?: any;
      communityId: string;
      totalSupply: number;
      currentBlock: number;
      authorTokenCount: number;
    },
    user?: { wallet: string }
  ) {
    try {
      if (!user) {
        throw new Error("Failed to save idea: missing user details");
      }

      if (!data.communityId) {
        throw new Error("Failed to save idea: missing community ID");
      }

      let expiryDate;
      switch (data.expiryOption) {
        case IdeaExpiryOption.SEVEN_DAYS:
          expiryDate = moment().utc().add(7, "days").toDate();
          break;
        case IdeaExpiryOption.FOURTEEN_DAYS:
          expiryDate = moment().utc().add(14, "days").toDate();
          break;
        case IdeaExpiryOption.TWENTY_EIGHT_DAYS:
          expiryDate = moment().utc().add(28, "days").toDate();
          break;
        default:
          throw new Error("Failed to save idea: invalid expiry option");
      }

      const idea = await prisma.idea.create({
        data: {
          communityId: data.communityId,
          title: data.title,
          tldr: data.tldr,
          description: data.description,
          creatorId: user.wallet,
          tokenSupplyOnCreate: data.totalSupply,
          createdAtBlock: data.currentBlock,
          expiryOption: data.expiryOption,
          expiryDate,
          votes: {
            create: {
              direction: 1,
              voterId: user.wallet,
              voterWeight: data.authorTokenCount,
            },
          },
          ...(data.headerImage && {
            images: {
              create: {
                url: data.headerImage,
              },
            },
          }),
          tags: {
            connect: data.tags.map((tag) => {
              return {
                type: tag,
              };
            }),
          },
        },
      });

      return { ...idea, closed: false, votecount: 0 };
    } catch (e) {
      throw e;
    }
  }

  static async voteOnIdea(
    data: any,
    getUserVoteWeightAtBlock: any,
    user?: { wallet: string }
  ) {
    try {
      if (!user) {
        throw new Error("Failed to save vote: missing user details");
      }

      const direction = Math.min(Math.max(parseInt(data.direction), -1), 1);

      if (isNaN(direction) || direction === 0) {
        // votes can only be 1 or -1 right now as we only support up or down votes
        throw new Error("Failed to save vote: direction is not valid");
      }

      const idea = await prisma.idea.findUnique({
        where: {
          id: data.ideaId,
        },
      });

      if (!idea) {
        throw new Error("Idea could not be found");
      }

      if (idea?.deleted) {
        throw new Error("Idea has been deleted");
      }

      const isClosed = getIsClosed(idea);

      if (isClosed) {
        throw new Error("Idea has been closed");
      }

      const existingVote = await prisma.vote.findUnique({
        where: {
          ideaId_voterId: {
            voterId: user.wallet,
            ideaId: data.ideaId,
          },
        },
      });

      let userDelegatedVotesAtBlock = undefined;
      // let currentUserVotes = undefined;

      if (!existingVote) {
        userDelegatedVotesAtBlock = await getUserVoteWeightAtBlock(
          user.wallet,
          idea?.createdAtBlock
        );

        if (userDelegatedVotesAtBlock === 0) {
          throw new Error("NO_VOTES_AT_BLOCK");
        }

        if (!userDelegatedVotesAtBlock) {
          throw new Error("Failed to get user vote weight");
        }
      }

      // On vote change we could check the users token count to see if it's changed i.e
      // if they've bought more or sold tokens. This means their vote weight will be accurate
      // while the idea is open. If we don't do this someone may sell their tokens and still be
      // able to alter their votes until the idea is closed.
      // Might be overkill so leaving commented out for now.

      // if (existingVote?.voterWeight) {
      //   currentUserVotes = await supportedToken.getUserTokenCount(user.wallet);
      // }

      const vote = prisma.vote.upsert({
        where: {
          ideaId_voterId: {
            voterId: user.wallet,
            ideaId: data.ideaId,
          },
        },
        update: {
          direction,
          // voterWeight: currentUserVotes,
        },
        create: {
          direction,
          voterId: user.wallet,
          ideaId: data.ideaId,
          voterWeight: userDelegatedVotesAtBlock,
        },
        include: {
          voter: true,
        },
      });

      return vote;
    } catch (e) {
      throw e;
    }
  }

  static async getVotesByIdea(id: string) {
    try {
      const votes = prisma.vote.findMany({
        where: {
          ideaId: id,
        },
      });

      return votes;
    } catch (e) {
      throw e;
    }
  }

  static async getIdeaComments(id: string) {
    try {
      const comment = prisma.comment.findMany({
        where: {
          ideaId: id,
          parentId: null,
        },
        include: {
          replies: {
            include: {
              replies: {
                include: {
                  replies: true,
                },
              },
            },
          },
        },
        // include: {
        //   replies: {
        //     where: { deleted: false },
        //     include: {
        //       replies: {
        //         where: { deleted: false },
        //         include: {
        //           replies: {
        //             where: { deleted: false },
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
      });

      return comment;
    } catch (e) {
      throw e;
    }
  }

  static async commentOnIdea(data: any, user?: { wallet: string }) {
    try {
      if (!user) {
        throw new Error("Failed to save comment: missing user details");
      }

      const isClosed = await this.isIdeaClosed(data.ideaId);

      if (isClosed) {
        throw new Error("Idea has been closed");
      }

      const isDeleted = await this.isIdeaDeleted(data.ideaId);

      if (isDeleted) {
        throw new Error("Idea has been deleted");
      }

      const comment = prisma.comment.create({
        data: {
          body: data.body,
          authorId: user.wallet,
          ideaId: data.ideaId,
          parentId: data.parentId,
        },
      });

      return comment;
    } catch (e) {
      throw e;
    }
  }

  static async isIdeaDeleted(id: string) {
    const idea = await prisma.idea.findUnique({
      where: {
        id,
      },
    });

    return idea?.deleted;
  }

  static async isIdeaClosed(id: string) {
    // Load idea first to check if it's been closed before allowing updates.
    const idea = await prisma.idea.findUnique({
      where: {
        id,
      },
    });

    if (!idea) {
      throw new Error("Idea not found for comment");
    }

    return getIsClosed(idea);
  }

  static async deleteIdea(id: string) {
    try {
      const idea = await prisma.idea.update({
        where: {
          id,
        },
        data: {
          deleted: true,
        },
      });

      return { id: idea.id, success: true };
    } catch (e) {
      throw e;
    }
  }

  static async getComment(id: string) {
    try {
      const comment = await prisma.comment.findUnique({
        where: {
          id: id,
        },
      });

      return comment;
    } catch (e) {
      throw e;
    }
  }

  static async getIdeaRaw(id: string) {
    try {
      const idea = await prisma.idea.findUnique({
        where: {
          id: id,
        },
      });

      return idea;
    } catch (e) {
      throw e;
    }
  }

  static async deleteComment(id: string) {
    try {
      const comment = await prisma.comment.update({
        where: {
          id,
        },
        data: {
          deleted: true,
        },
      });

      return comment;
    } catch (e) {
      throw e;
    }
  }
}

export default IdeasService;
