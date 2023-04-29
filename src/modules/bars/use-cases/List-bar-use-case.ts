import { IBarsRepository } from '../repositories/IBars-repository'

export class ListBarsUseCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute() {
    const bar = await this.barsRepository.list()

    return bar
  }
}
