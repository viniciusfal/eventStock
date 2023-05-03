import { PrismaEventRepository } from '../../repositories/Prisma-event-repository'
import { UpdateEventUseCase } from '../Update-event-use-case'

export function makeUpdateEvent() {
  const eventsRepository = new PrismaEventRepository()
  const updateEventUseCase = new UpdateEventUseCase(eventsRepository)

  return updateEventUseCase
}
