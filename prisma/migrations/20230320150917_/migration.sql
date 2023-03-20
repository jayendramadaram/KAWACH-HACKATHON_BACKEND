/*
  Warnings:

  - You are about to drop the `Nums` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Fraud" DROP CONSTRAINT "_Fraud_A_fkey";

-- DropForeignKey
ALTER TABLE "_Spam" DROP CONSTRAINT "_Spam_A_fkey";

-- DropTable
DROP TABLE "Nums";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "Item" INTEGER NOT NULL,
    "Type" "SpamType" NOT NULL DEFAULT 'Mobile',

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_Item_key" ON "Items"("Item");

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_A_fkey" FOREIGN KEY ("A") REFERENCES "Items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_A_fkey" FOREIGN KEY ("A") REFERENCES "Items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
