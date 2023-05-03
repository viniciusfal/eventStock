import { IEventRepository } from '../repositories/IEvent-repository'

export class FindEventByNameUseCase {
  constructor(private eventsRepository: IEventRepository) {}

  async execute(name: string) {
    const event = this.eventsRepository.findByName(name.toUpperCase())

    return event
  }
}
