import prisma from "@/lib/prisma";

import { IResolvers } from "@graphql-tools/utils";
import { IdeaTags } from "@/graphql/types/__generated__/types";
import { Tag } from "@prisma/client";


const resolvers: IResolvers = {
  Query: {
    getTags: async (): Promise<IdeaTags[]> => {
      const tags: Tag[] = await prisma.tag.findMany();
      return tags as IdeaTags[];
    },
  },
};

export default resolvers;
