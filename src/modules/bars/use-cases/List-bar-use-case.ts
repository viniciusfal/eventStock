import { IBarsRepository } from '../repositories/IBars-repository'

export class ListBarsUseCase {
  constructor(private barsRepository: IBarsRepository) {}

  async execute(event_id: string) {
    const bar = await this.barsRepository.list({
      event: {
        id: event_id,
      },
    })

    return bar
  }
}
