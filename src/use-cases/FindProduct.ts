import { IProductsRepository } from '@/repositories/Iproducts-repository'
import { ProductIsNotFound } from './errors/example-tratactive-error'

export class FindProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(name: string) {
    const product = await this.productRepository.findByName(name)

    if (!product) {
      throw new ProductIsNotFound()
    }

    return product
  }
}
