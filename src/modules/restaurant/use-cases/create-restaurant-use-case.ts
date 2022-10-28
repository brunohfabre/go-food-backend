import { inject, injectable } from 'tsyringe'

import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

interface CreateRestaurantUseCaseRequest {
  name: string
}

type CreateRestaurantUseCaseResponse = Restaurant

@injectable()
export class CreateRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: RestaurantsRepository,
  ) {}

  async execute({
    name,
  }: CreateRestaurantUseCaseRequest): Promise<CreateRestaurantUseCaseResponse> {
    const restaurantExists = await this.restaurantsRepository.findByName(name)

    if (restaurantExists) {
      throw new Error('Another restaurant exists with same name.')
    }

    const restaurant = await this.restaurantsRepository.create({ name })

    return restaurant
  }
}
