-- CreateTable
CREATE TABLE "LinkUserVote" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "linkId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "LinkUserVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentUserVote" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CommentUserVote_pkey" PRIMARY KEY ("id")
);
