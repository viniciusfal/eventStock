import { PrismaEventRepository } from '../../repositories/Prisma-event-repository'
import { CreateEventUSeCase } from '../Create-event-use-case'

export function makeCreateEvent() {
  const eventRepository = new PrismaEventRepository()
  const createEventUseCase = new CreateEventUSeCase(eventRepository)

  return createEventUseCase
}
