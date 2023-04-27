import { PrismaProductRepository } from '../../repositories/prisma-products-repository'
import { ListAllProducts } from '../ListAllProducts'

export function makeListAllProducts() {
  const productRepository = new PrismaProductRepository()
  const listAllProductsUseCase = new ListAllProducts(productRepository)

  return listAllProductsUseCase
}
