import { container } from 'tsyringe'
import { InMemoryRestaurantsRepository } from '../../modules/restaurant/repositories/implementations/in-memory-restaurants-repository'
import { RestaurantsRepository } from '../../modules/restaurant/repositories/restaurants-repository'

container.registerSingleton<RestaurantsRepository>("InMemoryRestaurantsRepository", InMemoryRestaurantsRepository)
