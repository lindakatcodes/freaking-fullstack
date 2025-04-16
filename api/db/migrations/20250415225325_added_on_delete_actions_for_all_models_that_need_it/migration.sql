-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_linkId_fkey";

-- DropForeignKey
ALTER TABLE "LinkUserVote" DROP CONSTRAINT "LinkUserVote_linkId_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "SharedLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkUserVote" ADD CONSTRAINT "LinkUserVote_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "SharedLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
