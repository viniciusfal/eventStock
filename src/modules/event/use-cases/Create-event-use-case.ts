import { IEventRepository } from '../repositories/IEvent-repository'

interface createEventUseCaseRequest {
  name: string
  status: string
  initEventDate: Date
  finishEventDate: Date
}

export class CreateEventUSeCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute({
    name,
    status,
    initEventDate,
    finishEventDate,
  }: createEventUseCaseRequest) {
    const event = await this.eventRepository.create({
      name: name.toUpperCase(),
      status,
      initEventDate,
      finishEventDate,
    })

    return event
  }
}
