import AWS from "aws-sdk";
import prisma from "@/lib/prisma";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

class CandidateService {
  static async createCandidate(data: {
    slug: string;
    ideaId: string;
    proposerId: string;
  }) {
    try {
      if (!data.slug || !data.ideaId) {
        throw new Error("Failed to save idea: missing slug or ideaId");
      }

      const candidate = await prisma.candidate.create({
        data: {
          slug: data.slug,
          ideaId: data.ideaId,
          proposerId: data.proposerId,
        },
      });

      return { ...candidate };
    } catch (e) {
      throw e;
    }
  }
}

export default CandidateService;
