-- DropForeignKey
ALTER TABLE "bars" DROP CONSTRAINT "bars_event_id_fkey";

-- AlterTable
ALTER TABLE "bars" ALTER COLUMN "event_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "bars" ADD CONSTRAINT "bars_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
