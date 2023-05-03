import { FastifyInstance } from 'fastify'
import { createBar } from '../controllers/create-bar'
import { updateBar } from '../controllers/update-bar'
import { listBars } from '../controllers/list-bars'
import { removeBar } from '../controllers/remove-bar'
import { verifyJWT } from '@/middleware/verify-jwt'

export async function barRoutes(app: FastifyInstance) {
  app.post('/event/:event_id/bars', { onRequest: [verifyJWT] }, createBar)
  app.put('/event/:event_id/bars/:id', { onRequest: [verifyJWT] }, updateBar)
  app.get('/event/:event_id/bars', { onRequest: [verifyJWT] }, listBars)
  app.delete('/event/:event_id/bars/:id', { onRequest: [verifyJWT] }, removeBar)
}
