import { PrismaRequestRepository } from '../../repositories/Prisma-request-repository'
import { CreateRequestUseCase } from '../Create-reques-use-case'

export function makeCreateRequest() {
  const requestRepository = new PrismaRequestRepository()
  const createRequestUseCase = new CreateRequestUseCase(requestRepository)

  return createRequestUseCase
}
