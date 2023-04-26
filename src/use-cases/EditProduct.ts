import { IProductsRepository } from '@/repositories/Iproducts-repository'

interface editProductUseCaseRequest {
  id: string
  name: string
  quantity: number
}

export class EditProduct {
  constructor(private productRepository: IProductsRepository) {}

  async execute({ id, name, quantity }: editProductUseCaseRequest) {
    const product = await this.productRepository.editProduct(id, name, quantity)

    if (product.id !== id) {
      throw new Error('product Id is not a found')
    }
    return product
  }
}
