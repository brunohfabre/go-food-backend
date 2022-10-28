import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateRestaurantUseCase } from './create-restaurant-use-case'

export class CreateRestaurantController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createRestaurantUseCase = container.resolve(CreateRestaurantUseCase)

    const restaurant = await createRestaurantUseCase.execute({ name })

    return response.json(restaurant)
  }
}
