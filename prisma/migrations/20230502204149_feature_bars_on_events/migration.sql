/*
  Warnings:

  - Made the column `event_id` on table `bars` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "bars" DROP CONSTRAINT "bars_event_id_fkey";

-- AlterTable
ALTER TABLE "bars" ALTER COLUMN "event_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "bars" ADD CONSTRAINT "bars_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
