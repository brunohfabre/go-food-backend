import { Router } from 'express'

import { restaurantsRouter } from '../modules/restaurant/routes/restaurants.routes'

const routes = Router()

routes.use('/restaurants', restaurantsRouter)

export { routes }
