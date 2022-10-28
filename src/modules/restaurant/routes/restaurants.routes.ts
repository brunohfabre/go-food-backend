import { Router } from 'express'

import { CreateRestaurantController } from '../use-cases/create-restaurant-controller'
import { ListRestaurantsController } from '../use-cases/list-restaurants-controller'

const restaurantsRouter = Router()

restaurantsRouter.get('/', ListRestaurantsController.handle)
restaurantsRouter.post('/', CreateRestaurantController.handle)

export { restaurantsRouter }
