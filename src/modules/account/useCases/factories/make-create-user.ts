import { PrismaUsersRepository } from '../../repositories/Prisma-users-repository'
import { CreateUser } from '../Create-user'

export function makeCreateUser() {
  const userRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUser(userRepository)

  return createUserUseCase
}
