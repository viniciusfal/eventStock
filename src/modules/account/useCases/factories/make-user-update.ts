import { PrismaUsersRepository } from '../../repositories/Prisma-users-repository'
import { UserUpdate } from '../User-update'

export function makeUserUpdate() {
  const userRepository = new PrismaUsersRepository()
  const userUpdateUseCase = new UserUpdate(userRepository)

  return userUpdateUseCase
}
