import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeEditProduct } from '../../use-cases/factories/make-edit-product'

export async function editProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    quantity: z.number(),
  })
  const registerParams = z.object({
    id: z.string().uuid(),
  })

  const { name, quantity } = registerBodySchema.parse(request.body)
  const { id } = registerParams.parse(request.params)

  try {
    const editProductUseCase = makeEditProduct()

    const product = await editProductUseCase.execute({
      id,
      name,
      quantity,
    })

    return product
  } catch (err) {
    return reply.status(404).send(err)
  }
}
