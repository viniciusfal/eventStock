import { FastifyReply, FastifyRequest } from 'fastify'

import { makeListBar } from '../../use-cases/factories/make-list-bar'
import { z } from 'zod'

export async function listBars(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    event_id: z.string().cuid(),
  })

  const { event_id } = registerParamsSchema.parse(request.params)
  try {
    const listBarUseCase = makeListBar()

    const bars = await listBarUseCase.execute(event_id)

    return bars
  } catch (err) {
    return reply.status(400).send(err)
  }
}
