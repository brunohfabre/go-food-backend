import { Router } from 'express'

import { CreateRestaurantController } from '../use-cases/create-restaurant-controller'
import { DeleteRestaurantController } from '../use-cases/delete-restaurant-controller'
import { GetRestaurantController } from '../use-cases/get-restaurant-controller'
import { ListRestaurantsController } from '../use-cases/list-restaurants-controller'
import { UpdateRestaurantController } from '../use-cases/update-restaurant-controller'

const restaurantsRouter = Router()

restaurantsRouter.get('/', ListRestaurantsController.handle)
restaurantsRouter.get('/:id', GetRestaurantController.handle)
restaurantsRouter.post('/', CreateRestaurantController.handle)
restaurantsRouter.put('/:id', UpdateRestaurantController.handle)
restaurantsRouter.delete('/:id', DeleteRestaurantController.handle)

export { restaurantsRouter }
