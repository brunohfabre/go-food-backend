import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'
import { GetRestaurantUseCase } from './get-restaurant-use-case'

describe('Get restaurant', () => {
  it('should be able to get restaurant', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    const restaurant = await createRestaurantUseCase.execute({
      name: 'Any name',
    })

    const getRestaurantUseCase = new GetRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    expect(
      getRestaurantUseCase.execute({ id: restaurant.id }),
    ).resolves.toEqual(
      expect.objectContaining({
        id: restaurant.id,
        name: 'Any name',
      }),
    )
  })
})
