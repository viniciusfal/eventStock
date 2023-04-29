import { PrismaBarsRepository } from '../../repositories/Prisma-bars-repository'
import { UpdateBarUseCase } from '../Update-bar-use-case'

export function makeUpdateBar() {
  const barsRepository = new PrismaBarsRepository()
  const updateBarUseCase = new UpdateBarUseCase(barsRepository)

  return updateBarUseCase
}
