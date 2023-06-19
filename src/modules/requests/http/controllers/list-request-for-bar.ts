import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeListRequestForBar } from '../../use-cases/factories/make-list-request-for-bar'

export async function listRequestForBar(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    bar_id: z.string().cuid(),
  })

  const { bar_id } = registerParamsSchema.parse(request.params)

  try {
    const listRequestForBarUseCase = makeListRequestForBar()

    const requests = await listRequestForBarUseCase.execute(bar_id)

    return requests
  } catch (err) {
    return reply.status(404).send({ message: err })
  }
}
