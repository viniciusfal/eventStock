import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdaterequest } from '../../use-cases/factories/make-update-request'

export async function updateRequest(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    status: z.string(),
  })

  const registerParamsSchema = z.object({
    id: z.string().cuid(),
    bar_id: z.string().cuid(),
    event_id: z.string().cuid(),
  })

  const { status } = registerBodySchema.parse(request.body)
  const { bar_id, event_id, id } = registerParamsSchema.parse(request.params)

  try {
    const updateRequestUseCase = makeUpdaterequest()

    const requestBar = await updateRequestUseCase.execute({
      status,
      event_id,
      bar_id,
      id,
    })

    return requestBar
  } catch (err) {
    return reply.status(400).send({ message: err })
  }
}
