import { describe, expect, it } from 'vitest'

import { Restaurant } from '../entities/restaurant'
import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'

import { CreateRestaurant } from './create-restaurant'

describe('Create restaurant', () => {
  it('it should be able to create new restaurant', () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurant = new CreateRestaurant(inMemoryRestaurantsRepository)

    expect(
      createRestaurant.execute({ name: 'Any name' }),
    ).resolves.toBeInstanceOf(Restaurant)
  })

  it('it should not be able to create new restaurant with same name', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurant = new CreateRestaurant(inMemoryRestaurantsRepository)

    await createRestaurant.execute({ name: 'Any name' })

    expect(
      createRestaurant.execute({ name: 'Any name' }),
    ).rejects.toBeInstanceOf(Error)
  })
})
