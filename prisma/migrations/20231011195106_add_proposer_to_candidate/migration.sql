/*
  Warnings:

  - Added the required column `proposerId` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "proposerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_proposerId_fkey" FOREIGN KEY ("proposerId") REFERENCES "User"("wallet") ON DELETE CASCADE ON UPDATE CASCADE;
