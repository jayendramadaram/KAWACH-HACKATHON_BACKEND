/*
  Warnings:

  - You are about to drop the column `FirstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SavedPost` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phnum]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phnum` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SpamType" AS ENUM ('Mobile', 'Sms');

-- DropForeignKey
ALTER TABLE "SavedPost" DROP CONSTRAINT "SavedPost_Userid_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "FirstName",
DROP COLUMN "email",
ADD COLUMN     "phnum" TEXT NOT NULL,
ADD COLUMN     "username" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "SavedPost";

-- CreateTable
CREATE TABLE "Nums" (
    "id" SERIAL NOT NULL,
    "Item" INTEGER NOT NULL,
    "Type" "SpamType" NOT NULL DEFAULT 'Mobile',

    CONSTRAINT "Nums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Spam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Fraud" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Nums_Item_key" ON "Nums"("Item");

-- CreateIndex
CREATE UNIQUE INDEX "_Spam_AB_unique" ON "_Spam"("A", "B");

-- CreateIndex
CREATE INDEX "_Spam_B_index" ON "_Spam"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Fraud_AB_unique" ON "_Fraud"("A", "B");

-- CreateIndex
CREATE INDEX "_Fraud_B_index" ON "_Fraud"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_phnum_key" ON "User"("phnum");

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_A_fkey" FOREIGN KEY ("A") REFERENCES "Nums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_A_fkey" FOREIGN KEY ("A") REFERENCES "Nums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
