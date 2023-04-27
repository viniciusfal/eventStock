import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { ProductIsNotFound } from '../../use-cases/errors/Product-is-not-a-found-error'
import { makeRemoveProduct } from '../../use-cases/factories/make-remove-product'

export async function removeProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  try {
    const removeProductUseCase = makeRemoveProduct()

    await removeProductUseCase.execute(id)
  } catch (err) {
    if (err instanceof ProductIsNotFound) {
      reply.status(404).send({ message: err.message })
    }

    reply.status(400).send(err)
  }
}
