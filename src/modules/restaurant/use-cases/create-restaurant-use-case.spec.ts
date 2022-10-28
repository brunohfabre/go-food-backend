import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'

describe('Create restaurant', () => {
  it('it should be able to create new restaurant', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    expect(
      createRestaurantUseCase.execute({ name: 'Any name' }),
    ).resolves.toEqual(expect.objectContaining({ name: 'Any name' }))
  })

  it('it should not be able to create new restaurant with same name', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    await createRestaurantUseCase.execute({ name: 'Any name' })

    expect(
      createRestaurantUseCase.execute({ name: 'Any name' }),
    ).rejects.toBeInstanceOf(Error)
  })
})
