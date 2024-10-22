'use client'

import { navLinks } from '@/configs'
import { useScrollPosition } from '@/hooks'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  TbCategoryPlus,
  TbChartPie,
  TbChevronDown,
  TbDeviceMobile,
  TbFingerprint,
  TbLetterX,
  TbList,
  TbRepeat
} from 'react-icons/tb'
import { NavItem } from './components'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: TbChartPie },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: TbDeviceMobile },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: TbFingerprint },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: TbCategoryPlus },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: TbRepeat }
]

const Navbar = () => {
  const scroll = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`${
        scroll > 0 ? 'bg-deep-charcoal' : 'bg-transparent'
      } duration-300 fixed top-0 left-0 w-full z-[10000]`}
    >
      <nav aria-label='Global' className='mx-auto flex items-center justify-between py-5 max-w-1170 w-11/12'>
        <div className='flex lg:flex-1'>
          <Link href='/'>
            <Image alt='' src='/assets/versus.svg' width={95} height={21} />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
          >
            <span className='sr-only'>Open main menu</span>
            <TbList aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          {navLinks.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <TbLetterX aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                    Product
                    <TbChevronDown aria-hidden='true' className='h-5 w-5 flex-none group-data-[open]:rotate-180' />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...products].map(item => (
                      <DisclosureButton
                        key={item.name}
                        as='a'
                        href={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50'
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar
