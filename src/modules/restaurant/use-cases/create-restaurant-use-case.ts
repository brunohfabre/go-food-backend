import { inject, injectable } from 'tsyringe'
import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

interface CreateRestaurantRequest {
  name: string
}

type CreateRestaurantResponse = Restaurant

@injectable()
export class CreateRestaurantUseCase {
  constructor(
    @inject("InMemoryRestaurantsRepository")
    private restaurantsRepository: RestaurantsRepository
  ) {}

  async execute({
    name,
  }: CreateRestaurantRequest): Promise<CreateRestaurantResponse> {
    const restaurantExists = await this.restaurantsRepository.findByName(name)

    if (restaurantExists) {
      throw new Error('Another restaurant exists with same name.')
    }

    const restaurant = await this.restaurantsRepository.create({ name })

    return restaurant
  }
}
