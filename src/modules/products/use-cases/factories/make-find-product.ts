import { PrismaProductRepository } from '../../repositories/prisma-products-repository'
import { FindProductUseCase } from '../FindProduct'

export function makeFindProduct() {
  const productRepository = new PrismaProductRepository()
  const findProductUseCase = new FindProductUseCase(productRepository)

  return findProductUseCase
}
