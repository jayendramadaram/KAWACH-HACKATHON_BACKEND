/*
  Warnings:

  - You are about to drop the column `Case` on the `PreDB` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CASETYPE" AS ENUM ('Spam', 'Fraud');

-- AlterTable
ALTER TABLE "PreDB" DROP COLUMN "Case",
ADD COLUMN     "CaseType" "CASETYPE" NOT NULL DEFAULT 'Spam';

-- DropEnum
DROP TYPE "CASE";
