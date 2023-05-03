import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateBar } from '../../use-cases/factories/make-update-bar'

export async function updateBar(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    code: z.string().min(4).max(8),
  })

  const registerParams = z.object({
    id: z.string().cuid(),
    event_id: z.string().cuid(),
  })

  const { name, code } = registerBodySchema.parse(request.body)
  const { id, event_id } = registerParams.parse(request.params)

  try {
    const updateBarUseCase = makeUpdateBar()

    const bar = await updateBarUseCase.execute({
      id,
      name,
      code,
      event_id,
    })

    return bar
  } catch (err) {
    return reply.status(404).send(err)
  }
}
