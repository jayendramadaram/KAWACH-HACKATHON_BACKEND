/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Fraud" DROP CONSTRAINT "_Fraud_B_fkey";

-- DropForeignKey
ALTER TABLE "_Spam" DROP CONSTRAINT "_Spam_B_fkey";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "usertable" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "phnum" TEXT NOT NULL,
    "userverifed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usertable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usertable_phnum_key" ON "usertable"("phnum");

-- AddForeignKey
ALTER TABLE "_Spam" ADD CONSTRAINT "_Spam_B_fkey" FOREIGN KEY ("B") REFERENCES "usertable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Fraud" ADD CONSTRAINT "_Fraud_B_fkey" FOREIGN KEY ("B") REFERENCES "usertable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
