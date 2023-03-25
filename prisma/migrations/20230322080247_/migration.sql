/*
  Warnings:

  - The values [Sms] on the enum `SpamType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SpamType_new" AS ENUM ('Mobile', 'SmsHeader', 'Btcaddr', 'Upiaddr', 'Bankacc', 'Url');
ALTER TABLE "Items" ALTER COLUMN "Type" DROP DEFAULT;
ALTER TABLE "predb" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Items" ALTER COLUMN "Type" TYPE "SpamType_new" USING ("Type"::text::"SpamType_new");
ALTER TABLE "predb" ALTER COLUMN "type" TYPE "SpamType_new" USING ("type"::text::"SpamType_new");
ALTER TYPE "SpamType" RENAME TO "SpamType_old";
ALTER TYPE "SpamType_new" RENAME TO "SpamType";
DROP TYPE "SpamType_old";
ALTER TABLE "Items" ALTER COLUMN "Type" SET DEFAULT 'Mobile';
ALTER TABLE "predb" ALTER COLUMN "type" SET DEFAULT 'Mobile';
COMMIT;
