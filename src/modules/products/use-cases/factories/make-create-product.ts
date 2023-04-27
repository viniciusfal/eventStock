import { PrismaProductRepository } from '../../repositories/prisma-products-repository'
import { CreateProductUseCase } from '../CreateProduct'

export function makeCreateProduct() {
  const productRpository = new PrismaProductRepository()
  const createProductUseCase = new CreateProductUseCase(productRpository)

  return createProductUseCase
}
