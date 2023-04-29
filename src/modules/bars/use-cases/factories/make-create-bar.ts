import { PrismaBarsRepository } from '../../repositories/Prisma-bars-repository'
import { CreateBarUSeCase } from '../Create-bar-use-case'

export function makeCreateBar() {
  const barsRepository = new PrismaBarsRepository()
  const createBarUseCase = new CreateBarUSeCase(barsRepository)

  return createBarUseCase
}
