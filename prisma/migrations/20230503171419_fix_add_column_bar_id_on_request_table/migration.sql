-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "barId" TEXT;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_barId_fkey" FOREIGN KEY ("barId") REFERENCES "bars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
