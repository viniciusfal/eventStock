import { PrismaBarsRepository } from '../../repositories/Prisma-bars-repository'

import { ListBarsUseCase } from '../List-bar-use-case'

export function makeListBar() {
  const barsRepository = new PrismaBarsRepository()
  const listBarUseCase = new ListBarsUseCase(barsRepository)

  return listBarUseCase
}
