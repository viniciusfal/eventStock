import { ZodError } from 'zod'
import { fastify } from 'fastify'
import { env } from '@/env'

export function appError() {
  const app = fastify()

  app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
      return reply
        .status(400)
        .send({ message: 'Validation error', issues: error.format() })
    }

    if (env.NODE_ENV !== 'production') {
      console.error(error)
    } else {
      // Here we should log to on external tool like Datadog/ NewRelic/ Sentry
    }
    return reply.status(500).send({ message: 'Internal server error' })
  })
}
