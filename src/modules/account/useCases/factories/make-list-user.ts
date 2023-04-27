import { PrismaUsersRepository } from '../../repositories/Prisma-users-repository'
import { ListUsers } from '../List-users'

export function makeListUser() {
  const userRepository = new PrismaUsersRepository()
  const listUserUseCase = new ListUsers(userRepository)

  return listUserUseCase
}
