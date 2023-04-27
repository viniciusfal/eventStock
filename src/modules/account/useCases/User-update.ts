import { IUsersRepository } from '../repositories/IUsers-repository'

interface updateUserProductRequest {
  id: string
  name: string
  email: string
  password_hash: string
}

export class UserUpdate {
  constructor(private userUpdate: IUsersRepository) {}

  async execute({ id, name, email, password_hash }: updateUserProductRequest) {
    const user = await this.userUpdate.userUpdate({
      id,
      name,
      email,
      password_hash,
    })

    return user
  }
}
