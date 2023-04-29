import { IBarsRepository } from '../repositories/IBars-repository'

interface createBarUseCaseRequest {
  name: string
  code: string
}

export class CreateBarUSeCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute({ name, code }: createBarUseCaseRequest) {
    const bar = await this.barsRepository.create({
      name,
      code,
    })

    return bar
  }
}
