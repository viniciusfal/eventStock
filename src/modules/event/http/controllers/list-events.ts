import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListEvents } from '../../use-cases/factories/make-list-events'

export async function listEvents(_: FastifyRequest, reply: FastifyReply) {
  try {
    const listEventUseCase = makeListEvents()

    const events = await listEventUseCase.execute()

    return events
  } catch (err) {
    return reply.status(400).send(err)
  }
}
