/*
  Warnings:

  - You are about to drop the column `barId` on the `requests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_barId_fkey";

-- AlterTable
ALTER TABLE "requests" DROP COLUMN "barId",
ADD COLUMN     "bar_id" TEXT;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_bar_id_fkey" FOREIGN KEY ("bar_id") REFERENCES "bars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
