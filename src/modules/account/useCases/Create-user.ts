import { PrismaUsersRepository } from '../repositories/Prisma-users-repository'
import { EmailAlreadyExists } from './errors/Email-already-exists-error'

interface createUserUseCaseRequest {
  name: string
  email: string
  password_hash: string
}

export class CreateUser {
  constructor(private userRepository: PrismaUsersRepository) {}

  async execute({ name, email, password_hash }: createUserUseCaseRequest) {
    const alreadyExists = await this.userRepository.findByEmail(email)

    if (alreadyExists) {
      throw new EmailAlreadyExists()
    }
    const user = await this.userRepository.create({
      name,
      email,
      password_hash,
    })

    return user
  }
}
