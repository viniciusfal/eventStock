import { IEventRepository } from '../repositories/IEvent-repository'

interface updateEventUseCaseRequest {
  id: string
  name: string
  status: string
  initEventDate: Date
  finishEventDate: Date
}

export class UpdateEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute({
    id,
    name,
    status,
    initEventDate,
    finishEventDate,
  }: updateEventUseCaseRequest) {
    const event = await this.eventRepository.update({
      id,
      name,
      status,
      initEventDate,
      finishEventDate,
    })

    return event
  }
}
