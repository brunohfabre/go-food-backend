import { expect, test } from 'vitest'

import { Restaurant } from './Restaurant'

test('create an restaurant', () => {
  const restaurant = new Restaurant({
    name: 'Any name'
  })

  expect(restaurant).toBeInstanceOf(Restaurant)
  expect(restaurant.name).toEqual('Any name')
})
