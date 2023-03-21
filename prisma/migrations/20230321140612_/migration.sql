/*
  Warnings:

  - You are about to drop the `PreDB` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PreDB";

-- CreateTable
CREATE TABLE "predb" (
    "id" SERIAL NOT NULL,
    "Item" TEXT NOT NULL,
    "Type" "SpamType" NOT NULL DEFAULT 'Mobile',
    "CaseType" "CASETYPE" NOT NULL DEFAULT 'Spam',
    "Context" TEXT NOT NULL,

    CONSTRAINT "predb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "predb_Item_key" ON "predb"("Item");
