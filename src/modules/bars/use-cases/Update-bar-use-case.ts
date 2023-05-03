import { IBarsRepository } from '../repositories/IBars-repository'

interface updateBarProductRequest {
  event_id: string
  id: string
  name: string
  code: string
}

export class UpdateBarUseCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute({ id, name, code, event_id }: updateBarProductRequest) {
    const bar = await this.barsRepository.update({
      id,
      name,
      code,
      event: { connect: { id: event_id } },
    })

    return bar
  }
}
