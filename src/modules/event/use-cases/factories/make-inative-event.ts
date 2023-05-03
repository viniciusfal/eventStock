import { PrismaEventRepository } from '../../repositories/Prisma-event-repository'
import { InativeEventUseCase } from '../Inactive-event-use-case'

export function makeInativeEvent() {
  const eventRepository = new PrismaEventRepository()
  const inativeEventUseCase = new InativeEventUseCase(eventRepository)

  return inativeEventUseCase
}
