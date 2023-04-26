import { IProductsRepository } from '@/modules/products/repositories/Iproducts-repository'

interface createProductUseCaseRequest {
  name: string
  quantity: number
}

export class CreateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute({ name, quantity }: createProductUseCaseRequest) {
    const product = await this.productRepository.create({
      name: name.toLowerCase(),
      quantity,
    })

    return product
  }
}
