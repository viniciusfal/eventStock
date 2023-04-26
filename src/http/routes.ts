import { FastifyInstance } from 'fastify'
import { createProduct } from './controllers/createProduct'
import { findProductController } from './controllers/findProduct'
import { listAllProducts } from './controllers/listAllProducts'
import { editProduct } from './controllers/editProduct'

export async function appRoutes(app: FastifyInstance) {
  app.post('/products', createProduct)
  app.get('/products/:name', findProductController)
  app.get('/products', listAllProducts)
  app.put('/products/:id', editProduct)
}
