import { PrismaUsersRepository } from '../repositories/Prisma-users-repository'

export class ListUsers {
  constructor(private userRepository: PrismaUsersRepository) {}

  async execute() {
    const users = await this.userRepository.list()

    return users
  }
}
