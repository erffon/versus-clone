'use client'

import { AppRoutes } from '@/configs'
import { usePathname } from 'next/navigation'

const Title = () => {
  const path = usePathname()

  return (
    <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative leading-relaxed! font-bold'>
      {path.split(AppRoutes.Category)[1]} <span>comparison</span>
    </h1>
  )
}

export default Title
