import { IProductsRepository } from '@/repositories/Iproducts-repository'

export class ListAllProducts {
  constructor(private productRepository: IProductsRepository) {}

  async execute() {
    const products = await this.productRepository.list()

    return products
  }
}
