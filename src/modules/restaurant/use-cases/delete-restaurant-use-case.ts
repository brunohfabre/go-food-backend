import { inject, injectable } from 'tsyringe'

import { RestaurantsRepository } from '../repositories/restaurants-repository'

type DeleteRestaurantUseCaseRequest = {
  id: string
}

@injectable()
export class DeleteRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: RestaurantsRepository,
  ) {}

  async execute({ id }: DeleteRestaurantUseCaseRequest): Promise<void> {
    const restaurantExists = await this.restaurantsRepository.findById(id)

    if (!restaurantExists) {
      throw new Error('Restaurant does not exists')
    }

    await this.restaurantsRepository.delete(id)
  }
}
