import { Prisma, User } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { IUsersRepository } from './IUsers-repository'

export class PrismaUsersRepository implements IUsersRepository {
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany()

    return users
  }

  async userUpdate(data: Prisma.UserUpdateInput): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id: data.id?.toString(),
      },
      data,
    })

    return user
  }
}
