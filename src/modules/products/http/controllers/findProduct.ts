import { PrismaProductRepository } from '@/modules/products/repositories/prisma-products-repository'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { ProductIsNotFound } from '../../use-cases/errors/Product-is-not-a-found-error'

export async function findProductController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    name: z.string(),
  })

  const { name } = registerParamsSchema.parse(request.params)

  try {
    const productRepository = new PrismaProductRepository()

    const product = await productRepository.findByName(name)

    return product
  } catch (err) {
    if (err instanceof ProductIsNotFound) {
      return reply.status(400).send(err.message)
    }
  }
}
