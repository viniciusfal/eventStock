import { FastifyReply, FastifyRequest } from 'fastify'
import { makeEventFindByName } from '../../use-cases/factories/make-find-event-by-name'
import { string, z } from 'zod'

export async function findEventByName(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    name: string(),
  })

  const { name } = registerParamsSchema.parse(request.params)
  try {
    const findEventByNameUseCase = makeEventFindByName()

    const event = await findEventByNameUseCase.execute(name)

    return event
  } catch (err) {
    return reply.status(400).send(err)
  }
}
