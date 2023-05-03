import { IBarsRepository } from '../repositories/IBars-repository'

interface createBarUseCaseRequest {
  event_id: string
  name: string
  code: string
}

export class CreateBarUSeCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute({ event_id, name, code }: createBarUseCaseRequest) {
    const bar = await this.barsRepository.create({
      name,
      code,
      event: { connect: { id: event_id } },
    })

    return bar
  }
}
