import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListRestaurantsUseCase } from './list-restaurants-use-case'

export class ListRestaurantsController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const listRestaurantsUseCase = container.resolve(ListRestaurantsUseCase)

    const restaurants = await listRestaurantsUseCase.execute()

    return response.json(restaurants)
  }
}
