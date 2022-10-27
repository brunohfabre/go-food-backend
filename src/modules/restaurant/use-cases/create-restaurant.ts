import { Restaurant } from '../entities/restaurant'
import { RestaurantsRepository } from '../repositories/restaurants-repository'

interface CreateRestaurantRequest {
  name: string
}

type CreateRestaurantResponse = Restaurant

export class CreateRestaurant {
  constructor(private restaurantsRepository: RestaurantsRepository) {}

  async execute({
    name,
  }: CreateRestaurantRequest): Promise<CreateRestaurantResponse> {
    const restaurantExists = await this.restaurantsRepository.findByName(name)

    if (restaurantExists) {
      throw new Error('Another restaurant exists with same name.')
    }

    const restaurant = new Restaurant({ name })

    await this.restaurantsRepository.create(restaurant)

    return restaurant
  }
}
