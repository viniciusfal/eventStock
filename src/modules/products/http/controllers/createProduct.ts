import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'

import { makeCreateProduct } from '../../use-cases/factories/make-create-product'

export async function createProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    quantity: z.number().int(),
  })

  const { name, quantity } = registerBodySchema.parse(request.body)

  try {
    const createProductUseCase = makeCreateProduct()

    await createProductUseCase.execute({
      name,
      quantity,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  await reply.status(201).send()
}
