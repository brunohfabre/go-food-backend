import { inject, injectable } from 'tsyringe'

import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

type GetRestaurantUseCaseRequest = {
  id: string
}

type GetRestaurantUseCaseResponse = Restaurant

@injectable()
export class GetRestaurantUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: RestaurantsRepository,
  ) {}

  async execute({
    id,
  }: GetRestaurantUseCaseRequest): Promise<GetRestaurantUseCaseResponse> {
    const restaurantExists = await this.restaurantsRepository.findById(id)

    if (!restaurantExists) {
      throw new Error('Restaurant does not exists.')
    }

    return restaurantExists
  }
}
