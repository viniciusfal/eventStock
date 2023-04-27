import { FastifyRequest, FastifyReply } from 'fastify'
import { hash } from 'bcryptjs'
import { z } from 'zod'
import { EmailAlreadyExists } from '../../useCases/errors/Email-already-exists-error'
import { makeCreateUser } from '../../useCases/factories/make-create-user'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  const password_hash = await hash(password, 6)

  try {
    const createUserUseCase = makeCreateUser()

    await createUserUseCase.execute({
      name,
      email,
      password_hash,
    })
  } catch (err) {
    if (err instanceof EmailAlreadyExists) {
      return reply.status(409).send({ message: err.message })
    }
  }
  return reply.status(201).send()
}
