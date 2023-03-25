/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `usertable` table. All the data in the column will be lost.
  - Added the required column `updatedat` to the `usertable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usertable" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedat" TIMESTAMP(3) NOT NULL;
