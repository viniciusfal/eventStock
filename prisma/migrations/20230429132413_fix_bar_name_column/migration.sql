/*
  Warnings:

  - You are about to drop the column `bar_name` on the `devolutions` table. All the data in the column will be lost.
  - The primary key for the `devolutionsOnProducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_name` on the `devolutionsOnProducts` table. All the data in the column will be lost.
  - Added the required column `bar_id` to the `devolutions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `devolutionsOnProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "devolutions" DROP CONSTRAINT "devolutions_bar_name_fkey";

-- DropForeignKey
ALTER TABLE "devolutionsOnProducts" DROP CONSTRAINT "devolutionsOnProducts_product_name_fkey";

-- DropIndex
DROP INDEX "bars_name_key";

-- AlterTable
ALTER TABLE "devolutions" DROP COLUMN "bar_name",
ADD COLUMN     "bar_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "devolutionsOnProducts" DROP CONSTRAINT "devolutionsOnProducts_pkey",
DROP COLUMN "product_name",
ADD COLUMN     "product_id" TEXT NOT NULL,
ADD CONSTRAINT "devolutionsOnProducts_pkey" PRIMARY KEY ("product_id", "devolution_id");

-- AddForeignKey
ALTER TABLE "devolutions" ADD CONSTRAINT "devolutions_bar_id_fkey" FOREIGN KEY ("bar_id") REFERENCES "bars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devolutionsOnProducts" ADD CONSTRAINT "devolutionsOnProducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
