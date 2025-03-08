'use client'

import { AppRoutes } from '@/configs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = ({ color = 'black' }: { color?: 'gray' | 'black' }) => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <nav aria-label='breadcrumb' className='text-sm my-5 container'>
      <ol className='list-none p-0 inline-flex'>
        {/* Home link */}
        <li className='flex items-center'>
          <Link
            href={AppRoutes.Home}
            className={`${color === 'black' ? 'text-black' : 'text-muted-gray'} hover:underline`}
          >
            Home
          </Link>
          {pathSegments.length > 0 && <span className='mx-2 text-neutral-gray'>{'>'}</span>}
        </li>

        {/* Dynamic segments */}
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          const isLast = index === pathSegments.length - 1

          return (
            <li key={href} className='flex items-center'>
              {!isLast ? (
                <Link
                  href={href}
                  className={`${color === 'black' ? 'text-black' : 'text-muted-gray'} hover:underline capitalize`}
                >
                  {decodeURIComponent(segment)}
                </Link>
              ) : (
                <span className='text-muted-gray capitalize'>{decodeURIComponent(segment)}</span>
              )}
              {!isLast && <span className='mx-2 text-neutral-gray'>{'>'}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
