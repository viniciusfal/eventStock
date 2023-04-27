import { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  list(): Promise<User[]>
  userUpdate(data: Prisma.UserUpdateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
