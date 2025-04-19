'use client'

import { Checkbox } from 'flowbite-react'
import { Controller, useFormContext } from 'react-hook-form'

export interface ICheckboxGroupInput {
  name: string
  options: string[]
  isLoading?: boolean
  loadingLength?: number
  height?: string
}

const CheckboxGroupInput = ({
  name,
  options,
  height = 'h-48',
  isLoading = false,
  loadingLength = 8
}: ICheckboxGroupInput) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={`${height} pr-2 flex justify-center items-center`}>
          <div
            className='max-h-44 w-full overflow-y-auto space-y-2 p-2 
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
          >
            {isLoading
              ? Array.from({ length: loadingLength }).map((_, i) => (
                  <div key={i} className='h-5 bg-gray-200 rounded animate-pulse' />
                ))
              : options.map(item => (
                  <div key={item} className='flex items-center gap-2'>
                    <Checkbox
                      id={item}
                      className='cursor-pointer'
                      checked={field?.value?.includes(item)}
                      onChange={e => {
                        const checked = e.target.checked
                        const newValue = checked
                          ? [...field.value, item]
                          : field.value.filter((v: string) => v !== item)
                        field.onChange(newValue)
                      }}
                    />
                    <label htmlFor={item} className='text-sm text-deep-charcoal cursor-pointer w-full'>
                      {item}
                    </label>
                  </div>
                ))}
          </div>
        </div>
      )}
    />
  )
}

export default CheckboxGroupInput
