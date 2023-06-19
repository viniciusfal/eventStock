import { PrismaRequestRepository } from '../../repositories/Prisma-request-repository'
import { UpdateRequestUseCase } from '../Update-request-use-case'

export function makeUpdaterequest() {
  const requestRepository = new PrismaRequestRepository()
  const updatRequestUseCase = new UpdateRequestUseCase(requestRepository)

  return updatRequestUseCase
}
