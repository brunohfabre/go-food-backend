import { Restaurant } from '../entities/restaurant'

export interface CreateRestaurantDTO {
  name: string
}

export interface RestaurantsRepository {
  findByName(name: string): Promise<Restaurant | null>
  findById(id: string): Promise<Restaurant | null>
  list(): Promise<Restaurant[]>
  create(data: CreateRestaurantDTO): Promise<Restaurant>
  update(restaurant: Restaurant): Promise<void>
  delete(id: string): Promise<void>
}
