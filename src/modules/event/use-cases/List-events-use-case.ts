import { IEventRepository } from '../repositories/IEvent-repository'

export class ListEventUseCase {
  constructor(private eventsRepository: IEventRepository) {}

  async execute() {
    const events = this.eventsRepository.list()

    return events
  }
}
