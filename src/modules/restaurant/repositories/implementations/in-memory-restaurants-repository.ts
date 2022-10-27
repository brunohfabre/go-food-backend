import { Restaurant } from "../../entities/restaurant";
import { RestaurantsRepository } from "../restaurants-repository";

export class InMemoryRestaurantsRepository implements RestaurantsRepository {

  public items: Restaurant[] = []

  async create(restaurant: Restaurant): Promise<void> {
    this.items.push(restaurant)
  }

  async findByName(name: string): Promise<Restaurant | null> {
    const restaurant = this.items.find(restaurant => restaurant.name === name)

    if(!restaurant) {
      return null
    }

    return restaurant
  }
}
