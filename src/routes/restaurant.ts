import { FastifyInstance } from 'fastify'

export async function restaurantRoutes(app: FastifyInstance) {
  app.get('/restaurant', async () => {
    return 'route restaurant'
  })
}
