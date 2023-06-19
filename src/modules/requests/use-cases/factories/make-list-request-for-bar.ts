import { PrismaRequestRepository } from '../../repositories/Prisma-request-repository'
import { ListRequestsForBarUseCase } from '../List-requests-for-bar-use-case'

export function makeListRequestForBar() {
  const requestRepository = new PrismaRequestRepository()
  const listRequestForBarUseCase = new ListRequestsForBarUseCase(
    requestRepository,
  )

  return listRequestForBarUseCase
}
