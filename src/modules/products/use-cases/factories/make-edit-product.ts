import { PrismaProductRepository } from '../../repositories/prisma-products-repository'
import { EditProduct } from '../EditProduct'

export function makeEditProduct() {
  const productRepository = new PrismaProductRepository()
  const editProductUseCase = new EditProduct(productRepository)

  return editProductUseCase
}
