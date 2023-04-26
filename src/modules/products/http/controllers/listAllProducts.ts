import { PrismaProductRepository } from '@/modules/products/repositories/prisma-products-repository'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function listAllProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const productRepository = new PrismaProductRepository()

    const products = await productRepository.list()

    return products
  } catch (err) {
    return reply.status(400).send(err)
  }
}
