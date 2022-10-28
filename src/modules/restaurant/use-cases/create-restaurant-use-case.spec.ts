import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'

describe('Create restaurant', () => {
  it('it should be able to create new restaurant', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurant = new CreateRestaurantUseCase(inMemoryRestaurantsRepository)

    expect(
      createRestaurant.execute({ name: 'Any name' }),
    ).resolves.toBeTruthy()
  })

  it('it should not be able to create new restaurant with same name', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurant = new CreateRestaurantUseCase(inMemoryRestaurantsRepository)

    await createRestaurant.execute({ name: 'Any name' })

    expect(
      createRestaurant.execute({ name: 'Any name' }),
    ).rejects.toBeInstanceOf(Error)
  })
})
