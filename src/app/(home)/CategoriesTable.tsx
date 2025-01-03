import { AppRoutes } from '@/configs'
import Link from 'next/link'

interface CategoriesTable {
  popular: Datum[]
  topRated: Datum[]
  newest: Datum[]
}

interface Datum {
  id: number
  imageUrl: string
  name: string
  category: string
}

const CategoriesTable = (props: CategoriesTable) => {
  const { newest, popular, topRated } = props

  return (
    <div className='flex flex-wrap justify-center items-center lg:flex-nowrap gap-8 pb-4 w-full'>
      <div className='w-full md:w-auto'>
        <h3 className='text-vibrant-blue font-bold text-sm uppercase mb-1 tracking-[3px]'>popular</h3>
        <ul className='border rounded-md divide-y divide-gray-300 bg-soft-alabaster'>
          {popular.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`${AppRoutes.Categories}/${item.category}/${item.name}`}
                className='flex items-center py-2 px-4 space-x-4 group'
              >
                <span className='font-bold text-gray-800'>{index + 1}</span>
                <img src={item.imageUrl} alt={item.name} className='w-12 h-12' />
                <p className='group-hover:underline text-gray-700'>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full md:w-auto'>
        <h3 className='text-vibrant-blue font-bold text-sm uppercase mb-1 tracking-[3px]'>top rated</h3>
        <ul className='border rounded-md divide-y divide-gray-300 bg-soft-alabaster'>
          {topRated.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`${AppRoutes.Categories}/${item.category}/${item.name}`}
                className='flex items-center py-2 px-4 space-x-4 group'
              >
                <span className='font-bold text-gray-800'>{index + 1}</span>
                <img src={item.imageUrl} alt={item.name} className='w-12 h-12' />
                <p className='group-hover:underline text-gray-700'>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full md:w-auto'>
        <h3 className='text-vibrant-blue font-bold text-sm uppercase mb-1 tracking-[3px]'>newest</h3>
        <ul className='border rounded-md divide-y divide-gray-300 bg-soft-alabaster'>
          {newest.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`${AppRoutes.Categories}/${item.category}/${item.name}`}
                className='flex items-center py-2 px-4 space-x-4 group'
              >
                <span className='font-bold text-gray-800'>{index + 1}</span>
                <img src={item.imageUrl} alt={item.name} className='w-12 h-12' />
                <p className='group-hover:underline text-gray-700'>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriesTable
