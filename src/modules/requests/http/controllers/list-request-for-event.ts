import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeListRequestForEvent } from '../../use-cases/factories/make-list-request-for-event'

export async function listRequestForEvent(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    event_id: z.string().cuid(),
  })

  const { event_id } = registerParamsSchema.parse(request.params)

  try {
    const listRequestForEvent = makeListRequestForEvent()

    const requests = await listRequestForEvent.execute(event_id)

    return requests
  } catch (err) {
    return reply.status(404).send({ message: err })
  }
}
