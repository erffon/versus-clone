'use client'

import { FC, ReactNode } from 'react'

// A generic interface to handle different categories (phones, GPUs, apps, watches, laptops, etc.).
// You can add or remove fields based on your use cases.
export interface IProductItem {
  id: number | string
  name: string
  points: number
  image: string
  subtitle?: string // e.g. price or secondary info (CHF 898, 32GB, etc.)
  features?: IFeatures[] // A simple list of features (like "10 days battery", "NFC", etc.)
  onAdd?: (item: IProductItem) => void
}

interface IFeatures {
  label: string
  icon: ReactNode
}

interface IProductListProps {
  items: IProductItem[]
}

const PointsBadge: FC<{ points: number }> = ({ points }) => {
  // Clamp points to 100 for the ring
  const safePoints = Math.max(0, Math.min(points, 100))
  const r = 20 // radius of the inner circle
  const circumference = 2 * Math.PI * r
  const offset = circumference - (circumference * safePoints) / 100

  return (
    <div className='absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center'>
      <div className='absolute top-1 left-[5px] flex flex-col items-center text-[10px] font-semibold text-gray-700 bg-white rounded-full w-full h-full justify-center'>
        <span className='text-sm leading-4'>{points}</span>
        <span className='leading-3'>Points</span>
      </div>
      {/* SVG ring background */}
      <svg className='absolute inset-0 rotate-[-90deg]' width='50' height='50'>
        {/* Full ring (light) */}
        <circle
          cx='25'
          cy='25'
          r={r}
          fill='none'
          stroke='#E2E8F0' // Tailwind gray-200
          strokeWidth='4'
        />
        {/* Partial ring (blue) */}
        <circle
          cx='25'
          cy='25'
          r={r}
          fill='none'
          stroke='#3B82F6' // Tailwind blue-500
          strokeWidth='4'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
        />
      </svg>
      {/* Points text */}
    </div>
  )
}

const ProductList: FC<IProductListProps> = ({ items }) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 p-4 w-full md:w-3/4'>
      {items.map(item => (
        <div key={item.id} className='relative flex items-center justify-between rounded-xl bg-white p-4 shadow-xs'>
          {/* Left side: image + points badge + name + subtitle + features */}
          <div className='flex items-start gap-4'>
            <div className='relative h-20 w-20 shrink-0'>
              <img src={item.image} alt={item.name} className='h-full w-full rounded-sm object-cover' />
              <PointsBadge points={item.points} />
            </div>

            <div className='flex flex-col'>
              <h2 className='text-base font-bold text-gray-800'>{item.name}</h2>
              {item.subtitle && <p className='mt-1 text-sm font-semibold text-blue-600'>{item.subtitle}</p>}
              {item.features && item.features.length > 0 && (
                <div className='mt-2 flex flex-wrap text-sm gap-4 text-gray-600 justify-between'>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-1 w-[45%]'>
                      {feature.icon}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: plus button */}
          <button
            onClick={() => item.onAdd?.(item)}
            className={'flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'}
          >
            +
          </button>
        </div>
      ))}
      {items.map(item => (
        <div key={item.id} className='relative flex items-center justify-between rounded-xl bg-white p-4 shadow-xs'>
          {/* Left side: image + points badge + name + subtitle + features */}
          <div className='flex items-start gap-4'>
            <div className='relative h-20 w-20 shrink-0'>
              <img src={item.image} alt={item.name} className='h-full w-full rounded-sm object-cover' />
              <PointsBadge points={item.points} />
            </div>

            <div className='flex flex-col'>
              <h2 className='text-base font-bold text-gray-800'>{item.name}</h2>
              {item.subtitle && <p className='mt-1 text-sm font-semibold text-blue-600'>{item.subtitle}</p>}
              {item.features && item.features.length > 0 && (
                <div className='mt-2 flex flex-wrap text-sm gap-4 text-gray-600 justify-between'>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-1 w-[45%]'>
                      {feature.icon}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: plus button */}
          <button
            onClick={() => item.onAdd?.(item)}
            className={'flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'}
          >
            +
          </button>
        </div>
      ))}
      {items.map(item => (
        <div key={item.id} className='relative flex items-center justify-between rounded-xl bg-white p-4 shadow-xs'>
          {/* Left side: image + points badge + name + subtitle + features */}
          <div className='flex items-start gap-4'>
            <div className='relative h-20 w-20 shrink-0'>
              <img src={item.image} alt={item.name} className='h-full w-full rounded-sm object-cover' />
              <PointsBadge points={item.points} />
            </div>

            <div className='flex flex-col'>
              <h2 className='text-base font-bold text-gray-800'>{item.name}</h2>
              {item.subtitle && <p className='mt-1 text-sm font-semibold text-blue-600'>{item.subtitle}</p>}
              {item.features && item.features.length > 0 && (
                <div className='mt-2 flex flex-wrap text-sm gap-4 text-gray-600 justify-between'>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-1 w-[45%]'>
                      {feature.icon}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: plus button */}
          <button
            onClick={() => item.onAdd?.(item)}
            className={'flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'}
          >
            +
          </button>
        </div>
      ))}
      {items.map(item => (
        <div key={item.id} className='relative flex items-center justify-between rounded-xl bg-white p-4 shadow-xs'>
          {/* Left side: image + points badge + name + subtitle + features */}
          <div className='flex items-start gap-4'>
            <div className='relative h-20 w-20 shrink-0'>
              <img src={item.image} alt={item.name} className='h-full w-full rounded-sm object-cover' />
              <PointsBadge points={item.points} />
            </div>

            <div className='flex flex-col'>
              <h2 className='text-base font-bold text-gray-800'>{item.name}</h2>
              {item.subtitle && <p className='mt-1 text-sm font-semibold text-blue-600'>{item.subtitle}</p>}
              {item.features && item.features.length > 0 && (
                <div className='mt-2 flex flex-wrap text-sm gap-4 text-gray-600 justify-between'>
                  {item.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-1 w-[45%]'>
                      {feature.icon}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side: plus button */}
          <button
            onClick={() => item.onAdd?.(item)}
            className={'flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600'}
          >
            +
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
