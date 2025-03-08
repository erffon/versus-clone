'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Tag {
  id: number
  label: string
}

const TagList = ({ tags }: { tags: Tag[] }) => {
  const path = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640) // Tailwind's default "sm" breakpoint
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const displayedTags = isMobile ? tags.slice(0, 6) : tags

  return (
    <div className='flex flex-wrap gap-3 p-4 xl:w-9/12'>
      {displayedTags.map(tag => (
        <Link
          href={`${path}/${tag.label}`}
          key={tag.id}
          className='rounded-full border border-white px-5 py-1 text-white transition-colors hover:bg-white hover:text-black text-sm'
        >
          {tag.label}
        </Link>
      ))}
    </div>
  )
}

export default TagList
