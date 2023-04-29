import { FastifyInstance } from 'fastify'
import { createBar } from '../controllers/create-bar'
import { updateBar } from '../controllers/update-bar'
import { listBars } from '../controllers/list-bars'
import { removeBar } from '../controllers/remove-bar'

export async function barRoutes(app: FastifyInstance) {
  app.post('/event/bars', createBar)
  app.put('/event/bars/:id', updateBar)
  app.get('/event/bars', listBars)
  app.delete('/event/bars/:id', removeBar)
}
