import { IBarsRepository } from '../repositories/IBars-repository'

interface updateBarProductRequest {
  id: string
  name: string
  code: string
}

export class UpdateBarUseCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute({ id, name, code }: updateBarProductRequest) {
    const bar = await this.barsRepository.update({
      id,
      name,
      code,
    })

    return bar
  }
}
