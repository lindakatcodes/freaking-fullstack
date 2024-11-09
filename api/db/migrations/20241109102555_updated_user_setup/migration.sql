/*
  Warnings:

  - The primary key for the `SharedLink` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `submittedById` to the `SharedLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SharedLink" DROP CONSTRAINT "SharedLink_pkey",
ADD COLUMN     "submittedById" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SharedLink_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SharedLink_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "nickname" TEXT,
ADD COLUMN     "youtube" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- AddForeignKey
ALTER TABLE "SharedLink" ADD CONSTRAINT "SharedLink_submittedById_fkey" FOREIGN KEY ("submittedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
