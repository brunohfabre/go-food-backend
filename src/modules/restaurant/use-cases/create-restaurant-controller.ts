import { Request, Response } from 'express'

import { CreateRestaurant } from './create-restaurant'

export class CreateRestaurantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params

    const createRestaurant = new CreateRestaurant()

    const restaurant = await createRestaurant.execute({ name })

    return response.json(restaurant)
  }
}
