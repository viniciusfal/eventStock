import { IProductsRepository } from '@/repositories/Iproducts-repository'

interface createProductUseCaseRequest {
  name: string
  quantity: number
}

export class CreateProductUseCase {
  constructor(private prismaProductRepository: IProductsRepository) {}

  async execute({ name, quantity }: createProductUseCaseRequest) {
    const product = await this.prismaProductRepository.create({
      name,
      quantity,
    })

    return product
  }
}
