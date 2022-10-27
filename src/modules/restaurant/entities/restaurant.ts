export interface RestaurantProps {
  name: string
}

export class Restaurant {
  private props: RestaurantProps

  get name () {
    return this.props.name
  }

  constructor(props: RestaurantProps) {
    this.props = props
  }
}
