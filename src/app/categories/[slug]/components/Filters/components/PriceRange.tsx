'use client'

import { RangeInput } from '@/app/components'
import { Dropdown } from '@/app/components/ui/Dropdown'
import { Tooltip } from 'flowbite-react'
import { Controller, useFormContext } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'

const PriceRange = ({
  isLoading,
  histogram,
  rangeStep = 1
}: {
  isLoading: boolean
  histogram: number[]
  rangeStep?: number
}) => {
  const {
    control,
    watch,
    formState: { defaultValues }
  } = useFormContext()
  const [min, max] = defaultValues?.price
  console.log('🚀 ~ defaultValues:', defaultValues)
  const price = watch('price')
  const bucketWidth = (max - min) / histogram.length

  const isInRange = (i: number) => {
    const bucketStart = min + i * bucketWidth
    const bucketEnd = bucketStart + bucketWidth
    return bucketEnd > price[0] && bucketStart < price[1]
  }

  return (
    <div className='space-y-1'>
      {/* Price filter */}
      <div className='space-y-2 bg-white rounded-t-xl p-4 shadow-md'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-deep-charcoal'>Price</span>

          <Tooltip
            clearTheme
            content={
              'The prices shown are an average, based on prices from around the world. The price in your country could be different.'
            }
            placement='bottom'
            style='light'
            trigger='hover'
            arrow={false}
          >
            <button
              type='button'
              className='text-white cursor-help text-sm bg-silver rounded-full w-4 h-4 flex items-center justify-center text-center'
            >
              ?
            </button>
          </Tooltip>
        </div>

        {/* Histogram */}
        <div className='flex items-end min-h-16 space-x-[2px]'>
          {(isLoading ? Array(10).fill(1) : histogram).map((height, i) => (
            <div
              key={i}
              className={`rounded-sm transition-all duration-200 max-h-32 ${
                isLoading ? 'bg-gray-200 animate-pulse' : isInRange(i) ? 'bg-gray-400' : 'bg-gray-200 opacity-30'
              }`}
              style={{
                height: isLoading ? '128px' : `${height * 6}px`,
                width: `${100 / (isLoading ? 10 : histogram.length)}%`
              }}
            />
          ))}
        </div>

        {/* Range */}
        {isLoading ? (
          <div className='h-1 bg-gray-200 rounded-full w-full animate-pulse' />
        ) : (
          <RangeInput name='price' step={rangeStep} min={min} max={max} unit='$' hasPlus />
        )}
      </div>

      <div>
        {isLoading ? (
          <div className='h-9 bg-gray-200 rounded-md animate-pulse' />
        ) : (
          <Controller
            control={control}
            name='currency'
            render={({ field }) => (
              <Dropdown
                label={`${field.value}`}
                renderTrigger={() => (
                  <button className='w-full rounded-b-xl bg-white p-2 shadow-md flex items-center justify-between text-deep-charcoal text-sm'>
                    {`${field.value}`} <FaChevronDown className='text-neutral-gray' />
                  </button>
                )}
              >
                <Dropdown.Item onClick={() => field.onChange('USD')}>USD • US$</Dropdown.Item>
                <Dropdown.Item onClick={() => field.onChange('EUR')}>EUR • €</Dropdown.Item>
                <Dropdown.Item onClick={() => field.onChange('GBP')}>GBP • £</Dropdown.Item>
              </Dropdown>
            )}
          />
        )}
      </div>
    </div>
  )
}

export default PriceRange
