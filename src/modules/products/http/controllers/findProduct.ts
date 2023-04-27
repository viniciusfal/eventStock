import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { ProductIsNotFound } from '../../use-cases/errors/Product-is-not-a-found-error'
import { makeFindProduct } from '../../use-cases/factories/make-find-product'

export async function findProductController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    name: z.string(),
  })

  const { name } = registerParamsSchema.parse(request.params)

  try {
    const findProductUseCase = makeFindProduct()

    const product = await findProductUseCase.execute(name)

    return product
  } catch (err) {
    if (err instanceof ProductIsNotFound) {
      return reply.status(400).send(err.message)
    }
  }
}
