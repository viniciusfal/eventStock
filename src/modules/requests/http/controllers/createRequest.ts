import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateRequest } from '../../use-cases/factories/make-create-request'

export async function createRequest(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    status: z.string(),
    products: z.array(
      z.object({
        id: z.string().cuid(),
        name: z.string(),
        quantity: z.number(),
        created_at: z.date().optional(),
      }),
    ),
  })

  const registerParamsSchema = z.object({
    bar_id: z.string().cuid(),
    event_id: z.string().cuid(),
  })

  const { products, status } = registerBodySchema.parse(request.body)
  const { bar_id, event_id } = registerParamsSchema.parse(request.params)

  try {
    const createRequestUseCase = makeCreateRequest()

    const requestBar = await createRequestUseCase.execute({
      status,
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        created_at: new Date(),
      })),
      bar_id,
      event_id,
    })

    return requestBar
  } catch (err) {
    return reply.status(404).send({ message: err })
  }
}
