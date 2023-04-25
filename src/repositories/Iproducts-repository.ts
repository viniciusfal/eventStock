import { Prisma, Product } from '@prisma/client'

export interface IProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
}
