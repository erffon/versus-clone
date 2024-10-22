import { IconType } from 'react-icons'
import { TbCategory } from 'react-icons/tb'
import { AppRoutes } from './appRoutes'

export interface NavLink {
  label: string
  href: string
  icon?: IconType
  subMenu?: SubMenu[]
  badge?: string
}

export interface SubMenu {
  label: string
  icon?: IconType
  subMenu?: NavLink[]
  badge?: string
}

export const navLinks: NavLink[] = [
  {
    label: 'Categories',
    href: AppRoutes.Categories,
    icon: TbCategory,
    subMenu: [
      {
        label: 'Electronics',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones', href: `${AppRoutes.Categories}/smartphones`, icon: TbCategory },
          { label: 'Laptops', href: `${AppRoutes.Categories}/laptops`, icon: TbCategory }
        ]
      },
      {
        label: 'Fashion',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones1', href: `${AppRoutes.Categories}/smartphones`, icon: TbCategory },
          { label: 'Laptops1', href: `${AppRoutes.Categories}/laptops`, icon: TbCategory, badge: 'new' }
        ]
      },
      {
        label: 'Sports',
        icon: TbCategory,
        subMenu: [
          { label: 'Smartphones2', href: `${AppRoutes.Categories}/smartphones`, icon: TbCategory },
          { label: 'Laptops2', href: `${AppRoutes.Categories}/laptops`, icon: TbCategory }
        ]
      }
    ]
  },
  { label: 'smartphones', href: `${AppRoutes.Categories}/phone` },
  { label: 'graphics cards', href: `${AppRoutes.Categories}/graphics-card` },
  { label: 'cpus', href: `${AppRoutes.Categories}/cpu` },
  { label: 'cars', href: `${AppRoutes.Categories}/car`, badge: 'new' }
]
