-- AlterTable
ALTER TABLE "events" ALTER COLUMN "initEventDate" DROP NOT NULL,
ALTER COLUMN "initEventDate" DROP DEFAULT,
ALTER COLUMN "finishEventDate" DROP NOT NULL;
