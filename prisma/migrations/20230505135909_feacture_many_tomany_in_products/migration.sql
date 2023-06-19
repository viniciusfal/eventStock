/*
  Warnings:

  - You are about to drop the `RequestsOnProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RequestsOnProducts" DROP CONSTRAINT "RequestsOnProducts_product_name_fkey";

-- DropForeignKey
ALTER TABLE "RequestsOnProducts" DROP CONSTRAINT "RequestsOnProducts_request_id_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "request_id" TEXT;

-- DropTable
DROP TABLE "RequestsOnProducts";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
