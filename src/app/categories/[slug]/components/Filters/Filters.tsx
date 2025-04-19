'use client'

import { FormProvider, useForm } from 'react-hook-form'
import FilterDrawer from './FilterDrawer'
import FilterPanel from './FilterPanel'

export type FormValues = {
  sort: string
  currency: string
  price: [number, number]
  weight: [number, number]
  brands: string[]
}

const MIN = 108
const MAX = 2163

const Filters = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      sort: 'Popularity',
      currency: 'USD',
      price: [MIN, MAX],
      weight: [8, 696],
      brands: []
    }
  })

  return (
    <FormProvider {...methods}>
      <FilterDrawer />
      <div className='h-[calc(100svh-72px)] py-4 sticky top-[72px] z-20 md:block hidden'>
        <FilterPanel />
      </div>
    </FormProvider>
  )
}

export default Filters
