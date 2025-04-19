'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Range, getTrackBackground } from 'react-range'

export interface IRangeInput {
  name: string
  step?: number
  min: number
  max: number
  unit?: string
  hasPlus?: boolean
}

const RangeInput = ({ max, min, step, unit, name, hasPlus }: IRangeInput) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Range
            values={field.value}
            step={step}
            min={min}
            max={max}
            onChange={field.onChange}
            renderTrack={({ props, children }) => {
              return (
                <div
                  {...props}
                  className='h-1 w-full rounded-full relative'
                  style={{
                    background: getTrackBackground({
                      values: field.value,
                      colors: ['#ccc', '#3b82f6', '#ccc'],
                      min: min || 0,
                      max: max || 1
                    })
                  }}
                >
                  {children}
                </div>
              )
            }}
            renderThumb={({ props }) => {
              const { key, ...rest } = props
              return (
                <div key={key} {...rest} className='h-4 w-4 bg-white border-2 border-blue-600 rounded-full shadow' />
              )
            }}
          />
          <div className='flex justify-between text-sm text-deep-charcoal mt-1'>
            <span>
              {field.value[0]} {unit}
            </span>
            <span>
              {field.value[1]} {field.value[1] === max && hasPlus ? '+' : ''} {unit}
            </span>
          </div>
        </>
      )}
    />
  )
}

export default RangeInput
