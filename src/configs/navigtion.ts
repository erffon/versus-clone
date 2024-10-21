import { IconType } from 'react-icons'
import { TbCategory } from 'react-icons/tb'

export interface NavLink {
  label: string
  href: string
  icon?: IconType
  subMenu?: NavLink[]
  badge?: string
}

export const navLinks: NavLink[] = [
  {
    label: 'Categories',
    href: '/categories',
    icon: TbCategory,
    subMenu: [
      {
        label: 'Electronics',
        href: '/categories/electronics',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones', href: '/categories/electronics/smartphones', icon: TbCategory },
          { label: 'Laptops', href: '/categories/electronics/laptops', icon: TbCategory }
        ]
      },
      {
        label: 'Fashion',
        href: '/categories/fashion',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones1', href: '/categories/electronics/smartphones', icon: TbCategory },
          { label: 'Laptops1', href: '/categories/electronics/laptops', icon: TbCategory, badge: 'new' }
        ]
      },
      {
        label: 'Sports',
        href: '/categories/sports',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones2', href: '/categories/electronics/smartphones', icon: TbCategory },
          { label: 'Laptops2', href: '/categories/electronics/laptops', icon: TbCategory }
        ]
      }
    ]
  },
  { label: 'smartphones', href: '/phone' },
  { label: 'graphics cards', href: '/graphics-card' },
  { label: 'cpus', href: '/cpu' },
  { label: 'cars', href: '/car', badge: 'new' }
]
