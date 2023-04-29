import { IBarsRepository } from '../repositories/IBars-repository'
import { BarIsNotAFound } from './errors/Bar-is-not-a-found-error'

export class RemoveBarUseCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute(id: string) {
    const barId = await this.barsRepository.findById(id)

    if (!barId) {
      throw new BarIsNotAFound()
    }
    return await this.barsRepository.remove(id)
  }
}
