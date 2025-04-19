'use client'

import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { BrandFilter, IOtherFilters, OtherFilters, PriceRange, SortDropdown } from './components'
import useFilterDrawerrModal from './store'

const fakeHistogram = [15, 18, 17, 16, 13, 19, 21, 11, 10, 7, 5, 3, 1]
const allBrands = [
  '360 N7',
  'Acer',
  'AGM',
  'Alcatel',
  'Allview',
  'Amazon',
  'Apple',
  'Asus',
  'BlackBerry',
  'CAT',
  'Dell',
  'Google',
  'Honor',
  'HTC',
  'Huawei',
  'Lenovo',
  'LG',
  'Motorola',
  'Nokia'
]

const filters: IOtherFilters[] = [
  {
    title: 'Design',
    filters: [
      { type: 'range', title: 'Weight', min: 8, max: 696, name: 'weight', unit: 'g' },
      { type: 'range', title: 'Weight1', min: 8, max: 696, name: 'weight', unit: 'g' },
      { type: 'range', title: 'Weight2', min: 8, max: 696, name: 'weight', unit: 'g' },
      { type: 'range', title: 'Weight3', min: 8, max: 696, name: 'weight', unit: 'g' },
      { type: 'range', title: 'Weight4', min: 8, max: 696, name: 'weight', unit: 'g' },
      { type: 'range', title: 'Weight5', min: 8, max: 696, name: 'weight', unit: 'g' }
    ]
  }
]

const FilterPanel = ({ className }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { filterDrawerrIsOpen: isOpen } = useFilterDrawerrModal()
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) container.current!.scrollTop = 0
  }, [isOpen])

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div
      ref={container}
      className={cn(
        'w-full h-full md:w-1/4 grow min-w-64 space-y-3 pr-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full py-2 overflow-x-hidden',
        className
      )}
    >
      <SortDropdown isLoading={isLoading} />
      <PriceRange histogram={fakeHistogram} isLoading={isLoading} rangeStep={1} />
      <BrandFilter brandsList={allBrands} isLoading={isLoading} />
      <div className='space-y-2 bg-white rounded-xl p-4 shadow-md'>
        {filters.map(item => (
          <OtherFilters key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default FilterPanel
