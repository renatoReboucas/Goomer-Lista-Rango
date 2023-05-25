import 'dotenv/config'

import fastify from 'fastify'
import { restaurantRoutes } from './routes/restaurant'

const app = fastify()

app.register(restaurantRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
