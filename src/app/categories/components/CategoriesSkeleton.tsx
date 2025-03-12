import React from 'react'

const CategoriesSkeleton: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl font-bold mb-6 text-black'>Categories</h2>

      <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className='mb-5 break-inside-avoid border border-gray-200 rounded-lg shadow-sm bg-soft-alabaster w-full animate-pulse'
          >
            <div className='flex items-center bg-categoryCard p-4'>
              <div className='w-8 h-8 bg-gray-300 rounded-full mr-2' />
              <div className='h-5 w-1/2 bg-gray-300 rounded-sm' />
            </div>

            <ul className='space-y-2 p-4'>
              {[...Array(4)].map((_, idx) => (
                <li key={idx} className='flex items-center gap-2'>
                  <div className='h-4 w-full bg-gray-300 rounded-sm' />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesSkeleton
