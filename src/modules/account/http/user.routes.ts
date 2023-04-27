import { FastifyInstance } from 'fastify'
import { createUser } from './controllers/create-user'
import { listUsers } from './controllers/list-users'
import { userUpdate } from './controllers/user-update'
import { authenticate } from './controllers/authenticate'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.get('/users', listUsers)
  app.put('/users/:id', userUpdate)
  app.post('/session', authenticate)
}
