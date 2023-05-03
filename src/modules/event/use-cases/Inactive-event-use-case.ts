import { IEventRepository } from '../repositories/IEvent-repository'
import { EventIsNotExistsError } from './errors/Event-is-not-exists-error'

interface InativeEventRequest {
  id: string
  active: boolean
}
export class InativeEventUseCase {
  constructor(private eventsRepository: IEventRepository) {}

  async execute({ id, active }: InativeEventRequest) {
    const eventId = await this.eventsRepository.findById(id)

    if (!eventId) {
      throw new EventIsNotExistsError()
    }

    const event = await this.eventsRepository.updateEventeActive({
      id,
      active,
    })

    return event
  }
}
