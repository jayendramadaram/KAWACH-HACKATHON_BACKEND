-- CreateEnum
CREATE TYPE "CASE" AS ENUM ('Spam', 'Fraud');

-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "Item" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "PreDB" (
    "id" SERIAL NOT NULL,
    "Item" TEXT NOT NULL,
    "Type" "SpamType" NOT NULL DEFAULT 'Mobile',
    "Case" "CASE" NOT NULL DEFAULT 'Spam',
    "Context" TEXT NOT NULL,

    CONSTRAINT "PreDB_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PreDB_Item_key" ON "PreDB"("Item");
