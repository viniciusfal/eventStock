import { PrismaUsersRepository } from '../../repositories/Prisma-users-repository'
import { AuthenticateUseCase } from '../Authenticate'

export function makeAuthenticate() {
  const userRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(userRepository)

  return authenticateUseCase
}
