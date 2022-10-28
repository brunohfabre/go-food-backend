import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'
import { DeleteRestaurantUseCase } from './delete-restaurant-use-case'
import { ListRestaurantsUseCase } from './list-restaurants-use-case'

describe('Delete restaurant', () => {
  it('should be able delete restaurant', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    const restaurant = await createRestaurantUseCase.execute({
      name: 'Any name',
    })

    const deleteRestaurantUseCase = new DeleteRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    await deleteRestaurantUseCase.execute({ id: restaurant.id })

    const listRestaurantsUseCase = new ListRestaurantsUseCase(
      inMemoryRestaurantsRepository,
    )
    const restaurants = await listRestaurantsUseCase.execute()

    expect(restaurants.length).toEqual(0)
  })
})
