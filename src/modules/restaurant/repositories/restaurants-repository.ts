import { Restaurant } from '../entities/restaurant'

export interface CreateRestaurantDTO {
  name: string
}

export interface RestaurantsRepository {
  findByName(name: string): Promise<Restaurant | null>
  list(): Promise<Restaurant[]>
  create(restaurant: CreateRestaurantDTO): Promise<Restaurant>
}
