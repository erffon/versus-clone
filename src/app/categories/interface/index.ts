export interface ICategoryTypeWithCategories {
  id: string
  title: string
  image: string
  categories: ICategories[]
}

export interface ICategories {
  id: string
  title: string
  description: string
  image: string
  badge: string | undefined
}
