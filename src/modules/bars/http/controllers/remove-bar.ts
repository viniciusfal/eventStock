import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeRemoveBar } from '../../use-cases/factories/make-remove-bar'
import { BarIsNotAFound } from '../../use-cases/errors/Bar-is-not-a-found-error'

export async function removeBar(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.string().cuid(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  try {
    const removeBarUseCase = makeRemoveBar()

    await removeBarUseCase.execute(id)
  } catch (err) {
    if (err instanceof BarIsNotAFound) {
      reply.status(404).send({ message: err.message })
    }
    reply.status(400).send({ message: err })
  }
}
