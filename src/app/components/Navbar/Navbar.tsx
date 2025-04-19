'use client'

import { AppRoutes, navLinks } from '@/configs'
import { useBodyScrollLock, useScrollPosition } from '@/hooks'
import { Navbar as FlowbiteNav, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MobileNavItem, NavItem } from './components'
import { Transition } from '@headlessui/react'
import { cn } from '@/utils'

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
      <FlowbiteNav clearTheme>
        <NavbarBrand as={Link} href={AppRoutes.Home} className='lg:flex-1 min-w-23.75 z-1000'>
          <Image alt='' src='/assets/versus.svg' width={95} height={21} />
        </NavbarBrand>

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
          <NavbarToggle
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
          ></NavbarToggle>
        </div>

        {navLinks.map((item, idx) => (
          <NavItem {...item} key={`nav-${idx}`} />
        ))}

        <Transition show={isOpen}>
          <NavbarCollapse
            className={cn(
              // Shared closed styles
              'data-[closed]:opacity-0',
              // Entering styles
              'data-[enter]:duration-300 data-[enter]:data-[closed]:translate-x-full',
              // Leaving styles
              'data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full'
            )}
          >
            {navLinks.map((item, idx) => (
              <MobileNavItem {...item} key={`mob-nav-${idx}`} />
            ))}
          </NavbarCollapse>
        </Transition>
      </FlowbiteNav>
    </header>
  )
}

export default Navbar
