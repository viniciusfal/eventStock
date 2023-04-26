import { Prisma, Product } from '@prisma/client'

export interface IProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
  findByName(name: string): Promise<Product[] | null>
  list(): Promise<Product[]>
  editProduct(id: string, name: string, quantity: number): Promise<Product>
}
