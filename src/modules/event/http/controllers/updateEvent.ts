import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateEvent } from '../../use-cases/factories/make-update-event'

export async function updateEvent(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string().cuid(),
    status: z.string(),
    initEventDate: z.string(),
    finishEventDate: z.string(),
  })

  const registerParams = z.object({
    id: z.string().cuid(),
  })

  const { name, status, initEventDate, finishEventDate } =
    registerBodySchema.parse(request.body)

  const { id } = registerParams.parse(request.params)

  try {
    const updateEventUseCase = makeUpdateEvent()

    const event = await updateEventUseCase.execute({
      id,
      name,
      status,
      initEventDate: new Date(initEventDate),
      finishEventDate: new Date(finishEventDate),
    })

    return event
  } catch (err) {
    return reply.status(400).send({ message: err })
  }
}
