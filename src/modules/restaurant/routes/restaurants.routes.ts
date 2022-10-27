import { Router } from 'express'

const restaurantsRouter = Router()

restaurantsRouter.get('/', (request, response) => {
  return response.json({ ok: true })
})

export { restaurantsRouter }
