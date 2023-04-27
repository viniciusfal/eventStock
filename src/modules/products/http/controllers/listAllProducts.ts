import { FastifyRequest, FastifyReply } from 'fastify'
import { makeListAllProducts } from '../../use-cases/factories/make-list-all-products'

export async function listAllProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const listAllProductsUseCase = makeListAllProducts()

    const products = await listAllProductsUseCase.execute()

    return products
  } catch (err) {
    return reply.status(400).send(err)
  }
}
