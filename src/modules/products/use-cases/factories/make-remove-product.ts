import { PrismaProductRepository } from '../../repositories/prisma-products-repository'
import { RemoveProduct } from '../RemoveProduct'

export function makeRemoveProduct() {
  const productRpository = new PrismaProductRepository()
  const removeProductUseCase = new RemoveProduct(productRpository)

  return removeProductUseCase
}
