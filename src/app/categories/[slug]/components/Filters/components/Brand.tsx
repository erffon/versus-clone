'use client'

import { CheckboxGroupInput } from '@/app/components'
import { useMemo, useState } from 'react'
import { TbSearch } from 'react-icons/tb'

const BrandFilter = ({ brandsList, isLoading }: { brandsList: string[]; isLoading: boolean }) => {
  const [search, setSearch] = useState('')

  const filteredBrands = useMemo(
    () => brandsList?.filter(brand => brand?.toLowerCase()?.includes(search?.toLowerCase())),
    [search]
  )

  return (
    <div className='rounded-xl bg-white shadow-md'>
      {/* Search input */}

      <div className='flex items-center bg-gray-100 rounded px-2 py-1'>
        <TbSearch className='text-blue-600 mr-2' />
        <input
          type='text'
          disabled={isLoading}
          placeholder='Search brand...'
          className='w-full bg-transparent outline-none border-none ring-0 text-sm text-blue-700 placeholder-blue-400'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <CheckboxGroupInput
        isLoading={isLoading}
        loadingLength={6}
        name='brands'
        options={filteredBrands}
        height='h-48'
      />
    </div>
  )
}

export default BrandFilter
