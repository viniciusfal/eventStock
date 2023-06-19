import { PrismaRequestRepository } from '../../repositories/Prisma-request-repository'
import { ListRequestsForEventUseCase } from '../List-request-for-event-useCase'

export function makeListRequestForEvent() {
  const requestRepository = new PrismaRequestRepository()
  const listRequestForEvent = new ListRequestsForEventUseCase(requestRepository)

  return listRequestForEvent
}
