import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { GetRestaurantUseCase } from './get-restaurant-use-case'

export class GetRestaurantController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params

    const getRestaurantUseCase = container.resolve(GetRestaurantUseCase)

    const restaurant = await getRestaurantUseCase.execute({ id })

    return response.json(restaurant)
  }
}
