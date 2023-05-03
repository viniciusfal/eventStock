import { FastifyInstance } from 'fastify'
import { createEvent } from '../controllers/create-event'
import { listEvents } from '../controllers/list-events'
import { updateEvent } from '../controllers/updateEvent'
import { inativeEvent } from '../controllers/inative-event'
import { findEventByName } from '../controllers/find-event-by-name'
import { verifyJWT } from '@/middleware/verify-jwt'

export async function eventRoutes(app: FastifyInstance) {
  app.post('/event', { onRequest: [verifyJWT] }, createEvent)
  app.get('/event', listEvents)
  app.get('/event/:name', findEventByName)
  app.put('/event/:id', { onRequest: [verifyJWT] }, updateEvent)
  app.patch('/event/:id', { onRequest: [verifyJWT] }, inativeEvent)
}
