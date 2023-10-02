import CandidateService from "@/services/candidates";
import { IResolvers } from "@graphql-tools/utils";
import { MutationSubmitCandidateArgs } from "@/graphql/types/__generated__/apiTypes";

const resolvers: IResolvers = {
  Mutation: {
    submitIdea: async (
      _parent: any,
      args: MutationSubmitCandidateArgs,
      context
    ) => {
      if (!context.authScope.isAuthorized) {
        throw new Error("Failed to create candidate: unauthorized");
      }

      const candidate = await CandidateService.createCandidate({
        slug: args.options.slug,
        ideaId: args.options.ideaId,
      });
      return candidate;
    },
  },
};

export default resolvers;
