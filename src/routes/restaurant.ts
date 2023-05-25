import { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../lib/prisma'

export async function restaurantRoutes(app: FastifyInstance) {
  app.get('/restaurant', async () => {
    const restaurant = await prisma.restaurant.findMany()
    return restaurant
  })
  app.post('/restaurant', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      address: z.string(),
      operation: z.string(),
    })
    const { name, address, operation } = bodySchema.parse(request.body)
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        address,
        operation,
      },
    })
    return restaurant
  })
}
