import { PrismaBarsRepository } from '../../repositories/Prisma-bars-repository'
import { RemoveBarUseCase } from '../Remove-bar-use-case'

export function makeRemoveBar() {
  const barsRepository = new PrismaBarsRepository()
  const removeBarUseCase = new RemoveBarUseCase(barsRepository)

  return removeBarUseCase
}
