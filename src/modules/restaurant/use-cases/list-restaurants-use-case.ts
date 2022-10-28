import { inject, injectable } from 'tsyringe'

import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

type ListRestaurantsResponse = Restaurant[]

@injectable()
export class ListRestaurantsUseCase {
  constructor(
    @inject('RestaurantsRepository')
    private restaurantsRepository: RestaurantsRepository,
  ) {}

  async execute(): Promise<ListRestaurantsResponse> {
    const restaurants = await this.restaurantsRepository.list()

    return restaurants
  }
}
