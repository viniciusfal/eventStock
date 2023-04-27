import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListUser } from '../../useCases/factories/make-list-user'

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const listUserUseCase = makeListUser()

    const users = await listUserUseCase.execute()

    return users
  } catch (err) {
    return reply.status(400).send()
  }
}
