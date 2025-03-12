'use client'

import { AppRoutes, navLinks } from '@/configs'
import { useBodyScrollLock, useScrollPosition } from '@/hooks'
import { Navbar as FlowbiteNav } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MobileNavItem, NavItem } from './components'

export interface INavBar {
  isColoredBg: boolean
  hasSearch: boolean
}

const Navbar = ({ hasSearch, isColoredBg }: INavBar) => {
  const scroll = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false)
  const { toggle } = useBodyScrollLock()

  useEffect(() => {
    const resetOnResize = () => setIsOpen(false)
    window.addEventListener('resize', resetOnResize)

    return () => window.removeEventListener('resize', resetOnResize)
  }, [])

  return (
    <header
      className={`${
        scroll > 0 || isColoredBg ? 'bg-deep-charcoal' : 'bg-transparent'
      } duration-300 fixed top-0 left-0 w-full z-10000`}
    >
      <FlowbiteNav>
        <FlowbiteNav.Brand as={Link} href={AppRoutes.Home} className='lg:flex-1 min-w-23.75 z-1000'>
          <Image alt='' src='/assets/versus.svg' width={95} height={21} />
        </FlowbiteNav.Brand>

        {hasSearch && (
          <div className='flex items-center rounded-lg bg-white/10 px-3 py-1 shadow-md w-full lg:w-44 z-1000'>
            <FaSearch className='mr-2 text-white/80' />
            <input
              type='text'
              placeholder='Search'
              className='w-full border-none bg-transparent outline-0 ring-0 text-white p-0'
            />
          </div>
        )}
        <div className='flex lg:hidden z-1000'>
          <FlowbiteNav.Toggle
            onClick={() => {
              toggle()
              setIsOpen(prev => !prev)
            }}
            barIcon={() => (
              <div className='flex w-full h-full flex-col gap-1 rotate-y-180'>
                <div
                  className={`${isOpen ? 'w-2/3' : 'w-full'} h-1 bg-white rounded-full transition-all duration-300`}
                />
                <div className='h-1 bg-white rounded-full transition-all duration-300' />
                <div
                  className={`${isOpen ? 'w-1/3' : 'w-full'} h-1 bg-white rounded-full transition-all duration-300`}
                />
              </div>
            )}
          ></FlowbiteNav.Toggle>
        </div>

        {navLinks.map((item, idx) => (
          <NavItem {...item} key={`nav-${idx}`} />
        ))}

        <FlowbiteNav.Collapse className={isOpen ? 'block' : 'hidden'}>
          {navLinks.map((item, idx) => (
            <MobileNavItem {...item} key={`mob-nav-${idx}`} />
          ))}
        </FlowbiteNav.Collapse>
      </FlowbiteNav>
    </header>
  )
}

export default Navbar
