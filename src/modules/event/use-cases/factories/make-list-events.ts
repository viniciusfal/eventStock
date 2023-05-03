import { PrismaEventRepository } from '../../repositories/Prisma-event-repository'
import { ListEventUseCase } from '../List-events-use-case'

export function makeListEvents() {
  const eventsRepository = new PrismaEventRepository()
  const listEventUseCase = new ListEventUseCase(eventsRepository)

  return listEventUseCase
}
