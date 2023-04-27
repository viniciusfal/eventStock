import { FastifyInstance } from 'fastify'
import { createProduct } from './controllers/createProduct'
import { findProductController } from './controllers/findProduct'
import { listAllProducts } from './controllers/listAllProducts'
import { editProduct } from './controllers/editProduct'
import { removeProduct } from './controllers/removeProduct'
import { verifyJWT } from '@/middleware/verify-jwt'

export async function productRoutes(app: FastifyInstance) {
  app.post('/products', { onRequest: [verifyJWT] }, createProduct)
  app.get('/products/:name', findProductController)
  app.get('/products', listAllProducts)
  app.put('/products/:id', { onRequest: [verifyJWT] }, editProduct)
  app.delete('/products/:id', { onRequest: [verifyJWT] }, removeProduct)
}
