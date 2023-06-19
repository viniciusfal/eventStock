import { FastifyInstance } from 'fastify'
import { createRequest } from '../controllers/createRequest'
import { updateRequest } from '../controllers/update-request'
import { listRequestForBar } from '../controllers/list-request-for-bar'
import { listRequestForEvent } from '../controllers/list-request-for-event'

export async function requestRoutes(app: FastifyInstance) {
  app.post('/event/:event_id/bars/:bar_id/request', createRequest)
  app.patch('/event/:event_id/bars/:bar_id/request/:id', updateRequest)
  app.get('/event/:event_id/bars/:bar_id/request', listRequestForBar)
  app.get('/event/:event_id/request', listRequestForEvent)
}
