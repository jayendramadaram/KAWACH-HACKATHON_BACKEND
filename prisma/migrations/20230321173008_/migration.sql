/*
  Warnings:

  - You are about to drop the column `verifed` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "verifed",
ADD COLUMN     "Userverifed" BOOLEAN NOT NULL DEFAULT false;
