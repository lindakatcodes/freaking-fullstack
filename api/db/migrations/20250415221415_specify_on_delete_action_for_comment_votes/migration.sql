-- DropForeignKey
ALTER TABLE "CommentUserVote" DROP CONSTRAINT "CommentUserVote_commentId_fkey";

-- AddForeignKey
ALTER TABLE "CommentUserVote" ADD CONSTRAINT "CommentUserVote_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
