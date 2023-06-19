/*
  Warnings:

  - The primary key for the `RequestsOnProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_name` on the `RequestsOnProducts` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `RequestsOnProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RequestsOnProducts" DROP CONSTRAINT "RequestsOnProducts_product_name_fkey";

-- AlterTable
ALTER TABLE "RequestsOnProducts" DROP CONSTRAINT "RequestsOnProducts_pkey",
DROP COLUMN "product_name",
ADD COLUMN     "product_id" TEXT NOT NULL,
ADD CONSTRAINT "RequestsOnProducts_pkey" PRIMARY KEY ("product_id", "request_id");

-- AddForeignKey
ALTER TABLE "RequestsOnProducts" ADD CONSTRAINT "RequestsOnProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
