import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUserUpdate } from '../../useCases/factories/make-user-update'
import { hash } from 'bcryptjs'

export async function userUpdate(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const registerParams = z.object({
    id: z.string().cuid(),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)
  const { id } = registerParams.parse(request.params)

  const password_hash = await hash(password, 6)

  try {
    const userUpdateUseCase = makeUserUpdate()

    const user = await userUpdateUseCase.execute({
      name,
      email,
      password_hash,
      id,
    })

    return user
  } catch (err) {
    return reply.status(404).send(err)
  }
}
