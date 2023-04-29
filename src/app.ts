import { fastify } from 'fastify'

import { productRoutes } from '@/modules/products/http/routes/products.routes'
import { usersRoutes } from './modules/account/http/routes/user.routes'
import { appError } from './Errors/appError'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { barRoutes } from './modules/bars/http/routes/bars.routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(productRoutes)
app.register(usersRoutes)
app.register(barRoutes)

appError()
