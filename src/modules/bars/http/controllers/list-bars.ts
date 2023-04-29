import { FastifyReply, FastifyRequest } from 'fastify'

import { makeListBar } from '../../use-cases/factories/make-list-bar'

export async function listBars(_: FastifyRequest, reply: FastifyReply) {
  try {
    const listBarUseCase = makeListBar()

    const bars = await listBarUseCase.execute()

    return bars
  } catch (err) {
    return reply.status(400).send(err)
  }
}
