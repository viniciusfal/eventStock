import { compare } from 'bcryptjs'
import { IUsersRepository } from '../repositories/IUsers-repository'
import { InvalidCredentialsError } from './errors/Invalid-credentials-error'
import { User } from '@prisma/client'

interface authenticateUseCaseRequest {
  email: string
  password: string
}

interface authenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: authenticateUseCaseRequest): Promise<authenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
