import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeInativeEvent } from '../../use-cases/factories/make-inative-event'

export async function inativeEvent(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    active: z.boolean(),
  })

  const registerParamsSchema = z.object({
    id: z.string().cuid(),
  })

  const { active } = registerBodySchema.parse(request.body)
  const { id } = registerParamsSchema.parse(request.params)

  try {
    const inativeEventUseCase = makeInativeEvent()

    const event = await inativeEventUseCase.execute({
      id,
      active,
    })

    return event
  } catch (err) {}
}
