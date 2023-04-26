import { IProductsRepository } from '../repositories/Iproducts-repository'
import { ProductIsNotFound } from './errors/Product-is-not-a-found-error'

export class RemoveProduct {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(id: string) {
    const productId = await this.productsRepository.findById(id)

    if (!productId) {
      throw new ProductIsNotFound()
    }

    await this.productsRepository.delete(id)
  }
}
