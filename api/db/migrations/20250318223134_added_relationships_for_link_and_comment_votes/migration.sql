-- AddForeignKey
ALTER TABLE "LinkUserVote" ADD CONSTRAINT "LinkUserVote_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "SharedLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkUserVote" ADD CONSTRAINT "LinkUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUserVote" ADD CONSTRAINT "CommentUserVote_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUserVote" ADD CONSTRAINT "CommentUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
