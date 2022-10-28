import { randomUUID } from 'node:crypto'

import { Restaurant } from '../../entities/restaurant'
import {
  CreateRestaurantDTO,
  RestaurantsRepository,
} from '../restaurants-repository'

export class InMemoryRestaurantsRepository implements RestaurantsRepository {
  public items: Restaurant[] = []

  async findByName(name: string): Promise<Restaurant | null> {
    const restaurant = this.items.find((restaurant) => restaurant.name === name)

    if (!restaurant) {
      return null
    }

    return restaurant
  }

  async findById(id: string): Promise<Restaurant | null> {
    const restaurant = this.items.find((restaurant) => restaurant.id === id)

    if (!restaurant) {
      return null
    }

    return restaurant
  }

  async list(): Promise<Restaurant[]> {
    const restaurants = this.items

    return restaurants
  }

  async create({ name }: CreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = { id: randomUUID(), name }

    this.items.push(restaurant)

    return restaurant
  }

  async update({ id, name }: Restaurant): Promise<void> {
    this.items = this.items.map((item) =>
      item.id === id ? { id, name } : item,
    )
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter((item) => item.id !== id)
  }
}
