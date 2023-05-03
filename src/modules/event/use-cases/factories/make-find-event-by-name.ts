import { PrismaEventRepository } from '../../repositories/Prisma-event-repository'
import { FindEventByNameUseCase } from '../Find-event-by-name-use-case'

export function makeEventFindByName() {
  const eventRepository = new PrismaEventRepository()
  const findEventByNameUseCase = new FindEventByNameUseCase(eventRepository)

  return findEventByNameUseCase
}
