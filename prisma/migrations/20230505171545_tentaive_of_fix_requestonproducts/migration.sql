-- CreateTable
CREATE TABLE "RequestsOnProducts" (
    "product_name" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,

    CONSTRAINT "RequestsOnProducts_pkey" PRIMARY KEY ("product_name","request_id")
);

-- AddForeignKey
ALTER TABLE "RequestsOnProducts" ADD CONSTRAINT "RequestsOnProducts_product_name_fkey" FOREIGN KEY ("product_name") REFERENCES "products"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestsOnProducts" ADD CONSTRAINT "RequestsOnProducts_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
