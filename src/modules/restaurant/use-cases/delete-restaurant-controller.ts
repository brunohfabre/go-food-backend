import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteRestaurantUseCase } from './delete-restaurant-use-case'

export class DeleteRestaurantController {
  static async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteRestaurantUseCase = container.resolve(DeleteRestaurantUseCase)

    await deleteRestaurantUseCase.execute({ id })

    return response.sendStatus(204)
  }
}
