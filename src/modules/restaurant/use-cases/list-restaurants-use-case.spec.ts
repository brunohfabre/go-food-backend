import 'reflect-metadata'
import { describe, expect, it } from 'vitest'

import { InMemoryRestaurantsRepository } from '../repositories/implementations/in-memory-restaurants-repository'
import { CreateRestaurantUseCase } from './create-restaurant-use-case'
import { ListRestaurantsUseCase } from './list-restaurants-use-case'

describe('List restaurants', () => {
  it('should be able to list all restaurants', async () => {
    const inMemoryRestaurantsRepository = new InMemoryRestaurantsRepository()
    const createRestaurantUseCase = new CreateRestaurantUseCase(
      inMemoryRestaurantsRepository,
    )

    await createRestaurantUseCase.execute({ name: 'Any name' })

    const listRestaurantsUseCase = new ListRestaurantsUseCase(
      inMemoryRestaurantsRepository,
    )

    expect(listRestaurantsUseCase.execute()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Any name',
        }),
      ]),
    )
  })
})
