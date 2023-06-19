import { Product } from '@prisma/client'
import { IRequestRepository } from '../repositories/IRequest-repository'

interface createRequestUseCaseRequest {
  status: string
  products: Product[]
  bar_id: string
  event_id: string
}

export class CreateRequestUseCase {
  constructor(private requestRepository: IRequestRepository) {}

  async execute({
    status,
    products,
    bar_id,
    event_id,
  }: createRequestUseCaseRequest) {
    const request = await this.requestRepository.create({
      status,
      bar: { connect: { id: bar_id } },
      event: { connect: { id: event_id } },
      RequestsOnProducts: {
        create: products.map((product) => ({
          product: { connect: { id: product.id } },
        })),
      },
    })

    return request
  }
}
