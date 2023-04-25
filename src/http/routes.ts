import { FastifyInstance } from 'fastify'
import { createProduct } from './controllers/createProduct'

export async function appRoutes(app: FastifyInstance) {
  app.post('/products', createProduct)
}
