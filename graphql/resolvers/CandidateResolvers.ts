import CandidateService from "@/services/candidates";
import { IResolvers } from "@graphql-tools/utils";
import { MutationSubmitCandidateArgs } from "@/graphql/types/__generated__/types";

const resolvers: IResolvers = {
  Mutation: {
    submitCandidate: async (
      _parent: any,
      args: MutationSubmitCandidateArgs,
      context
    ) => {
      // I don't feel like we need the "auth" (which is really just checking that wallet is connected)
      // because the sheer existence of a candidate on-chain should imply that the wallet is connected.
      // However, a more "true" auth check might be good so this endpoint is prone to spamming ideas
      // that don't exist.

      const candidate = await CandidateService.createCandidate({
        slug: args.options.slug,
        ideaId: args.options.ideaId,
        proposerId: context.authScope.user.wallet,
      });
      return candidate;
    },
  },
};

export default resolvers;
