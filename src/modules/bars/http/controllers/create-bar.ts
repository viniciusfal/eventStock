import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateBar } from '../../use-cases/factories/make-create-bar'

export async function createBar(request: FastifyRequest, reply: FastifyReply) {
  const createBarBodySchema = z.object({
    name: z.string(),
    code: z.string().min(4).max(8),
  })

  const registerParamsSchema = z.object({
    event_id: z.string().cuid(),
  })

  const { name, code } = createBarBodySchema.parse(request.body)
  const { event_id } = registerParamsSchema.parse(request.params)

  try {
    const createBarUSeCase = makeCreateBar()

    await createBarUSeCase.execute({
      event_id,
      name,
      code,
    })
  } catch (err) {
    return reply.status(409).send(err)
  }

  return reply.status(201).send()
}
