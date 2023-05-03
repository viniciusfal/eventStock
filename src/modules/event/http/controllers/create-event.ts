import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateEvent } from '../../use-cases/factories/make-create-event'

export async function createEvent(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    status: z.string(),
    initEventDate: z.string(),
    finishEventDate: z.string(),
  })

  const { name, status, initEventDate, finishEventDate } =
    registerBodySchema.parse(request.body)

  try {
    const createEventUseCase = makeCreateEvent()

    await createEventUseCase.execute({
      name,
      status,
      initEventDate: new Date(initEventDate),
      finishEventDate: new Date(finishEventDate),
    })
  } catch (err) {
    return reply.status(404).send({ message: err })
  }

  return reply.status(201).send()
}
