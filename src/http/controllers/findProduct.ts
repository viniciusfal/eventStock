import { PrismaProductRepository } from '@/repositories/prisma-products-repository'
import { ProductIsNotFound } from '@/use-cases/errors/example-tratactive-error'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

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
