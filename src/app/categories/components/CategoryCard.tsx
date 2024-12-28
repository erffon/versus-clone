'use client'
import { AppRoutes } from '@/configs'
import Link from 'next/link'
import { TbAward } from 'react-icons/tb'

interface CategoryCard {
  data: CategoryCardData[]
}

export interface CategoryCardData {
  title: string
  iconUrl: string
  subcategories: SubCategory[]
}

interface SubCategory {
  title: string
  badge?: string
}

const CategoryCard = ({ data }: { data: CategoryCardData[] }) => {
  return (
    <>
      <h2 className='text-4xl font-bold mb-6 text-black'>Categories</h2>
      {/* Use Tailwind CSS columns */}
      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'>
        {data?.map((item, index) => (
          <div
            key={index}
            className='mb-5 break-inside-avoid  border border-gray-200 rounded-lg shadow bg-soft-alabaster w-full'
          >
            <div className='flex items-center bg-categoryCard p-4'>
              {/* //TODO - must use image url */}
              <TbAward size={32} className='text-black mr-2' />
              {/* <img src={category.iconUrl} alt={category.title} className='w-8 h-8 mr-2' /> */}
              <h3 className='text-lg font-bold text-black'>{item.title}</h3> {/* blue color from the image */}
            </div>
            <ul className='space-y-2 p-4'>
              {item.subcategories.map((category, idx) => (
                <li key={idx}>
                  <Link
                    href={`${AppRoutes.Categories}/${category.title}`}
                    className='text-dark-smoke hover:text-vibrant-blue cursor-pointer flex items-center gap-2 capitalize'
                  >
                    {category.title}
                    {category.badge && (
                      <span className='leading-[11px] text-[10px] flex items-center py-0.5 px-2 mt-0.5 text-vibrant-blue bg-light-periwinkle border-royal-blue border rounded-full uppercase'>
                        {category.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryCard
