export type Lodging = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: number
  location: string
  equipments: string[]
  tags: string[]
}
