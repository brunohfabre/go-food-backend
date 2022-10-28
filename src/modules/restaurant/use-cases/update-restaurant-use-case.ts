import { inject, injectable } from 'tsyringe'

import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

type UpdateRestaurantUseCaseRequest = Restaurant

@injectable()
export class UpdateRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: RestaurantsRepository,
  ) {}

  async execute({ id, name }: UpdateRestaurantUseCaseRequest): Promise<void> {
    const restaurantExists = await this.restaurantsRepository.findById(id)

    if (!restaurantExists) {
      throw new Error('Restaurant does not exists.')
    }

    await this.restaurantsRepository.update({ id, name })
  }
}
