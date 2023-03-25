/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "itemType" AS ENUM ('Mobile', 'Sms');

-- DropForeignKey
ALTER TABLE "_Fraud" DROP CONSTRAINT "_Fraud_A_fkey";

-- DropForeignKey
ALTER TABLE "_Fraud" DROP CONSTRAINT "_Fraud_B_fkey";

-- DropForeignKey
ALTER TABLE "_Spam" DROP CONSTRAINT "_Spam_A_fkey";

-- DropForeignKey
ALTER TABLE "_Spam" DROP CONSTRAINT "_Spam_B_fkey";

-- DropTable
DROP TABLE "Items";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "phnum" TEXT NOT NULL,
    "userverifed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "type" "itemType" NOT NULL DEFAULT 'Mobile',
    "interactions" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_phnum_key" ON "user"("phnum");

-- CreateIndex
CREATE UNIQUE INDEX "items_item_key" ON "items"("item");

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_A_fkey" FOREIGN KEY ("A") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_A_fkey" FOREIGN KEY ("A") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
