import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateRestaurantUseCase } from './update-restaurant-use-case'

export class UpdateRestaurantController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    const updateRestaurantUseCase = container.resolve(UpdateRestaurantUseCase)

    await updateRestaurantUseCase.execute({ id, name })

    return response.sendStatus(204)
  }
}
