/*
  Warnings:

  - You are about to drop the column `CaseType` on the `predb` table. All the data in the column will be lost.
  - You are about to drop the column `Context` on the `predb` table. All the data in the column will be lost.
  - You are about to drop the column `Item` on the `predb` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `predb` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[item]` on the table `predb` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `context` to the `predb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item` to the `predb` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "predb_Item_key";

-- AlterTable
ALTER TABLE "predb" DROP COLUMN "CaseType",
DROP COLUMN "Context",
DROP COLUMN "Item",
DROP COLUMN "Type",
ADD COLUMN     "casetype" "CASETYPE" NOT NULL DEFAULT 'Spam',
ADD COLUMN     "context" TEXT NOT NULL,
ADD COLUMN     "item" TEXT NOT NULL,
ADD COLUMN     "type" "SpamType" NOT NULL DEFAULT 'Mobile';

-- CreateIndex
CREATE UNIQUE INDEX "predb_item_key" ON "predb"("item");
