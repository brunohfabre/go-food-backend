import { Restaurant } from "../entities/restaurant";

export interface RestaurantsRepository {
  create(restaurant: Restaurant): Promise<void>
  findByName(name: string): Promise<Restaurant | null>
}
