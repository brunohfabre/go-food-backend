import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'
import { UpdateRestaurantUseCase } from './update-restaurant-use-case'

describe('Update restaurant', () => {
  it('should be able to update a restaurant', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    const restaurant = await createRestaurantUseCase.execute({
      name: 'Any name',
    })

    const updateRestaurantUseCase = new UpdateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    await updateRestaurantUseCase.execute({
      id: restaurant.id,
      name: 'Other name',
    })

    expect(
      inMemoryRestaurantsRepository.findById(restaurant.id),
    ).resolves.toEqual(
      expect.objectContaining({
        id: restaurant.id,
        name: 'Other name',
      }),
    )
  })
})
