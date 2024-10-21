import { NavLink } from '@/configs'
import { useScrollPosition } from '@/hooks'
import { CloseButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { TbChevronDown } from 'react-icons/tb'
import NavBadge from './NavBadge'
import Submenu from './Submenu'

const NavItem = (props: NavLink) => {
  const { href, label, badge, icon: Icon, subMenu } = props
  const scroll = useScrollPosition()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [activeSubMenu, setactiveSubMenu] = useState('')

  useEffect(() => {
    buttonRef.current?.click()
  }, [scroll])

  if (subMenu)
    return (
      <Popover className='relative'>
        <PopoverButton className='flex items-center gap-x-1 text-sm font-semibold leading-6 uppercase'>
          {Icon && <Icon />}
          {label}
          {badge && <NavBadge badge={badge} />}
          <TbChevronDown aria-hidden='true' className='h-5 w-5 flex-none text-gray-400' />
        </PopoverButton>

        <PopoverPanel
          transition
          className='absolute top-full z-10 mt-2 min-w-fit max-w-md rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in before:content-[""] before:absolute before:left-3 before:-top-4 before:border-8 before:border-solid before:border-transparent before:border-b-white overflow-visible'
        >
          <div className='overflow-hidden rounded-lg'>
            <CloseButton ref={buttonRef} className={'hidden'}></CloseButton>
            <div className='flex'>
              <div className={!!activeSubMenu ? `border-r-submenu-hover border-r` : ''}>
                {subMenu?.map(item => (
                  <Submenu
                    {...item}
                    onMouseEnter={() => setactiveSubMenu(item.label)}
                    onMouseLeave={() => setactiveSubMenu('')}
                    key={item.label}
                    activeSubMenu={activeSubMenu}
                  />
                ))}
              </div>
              {subMenu?.map(
                item =>
                  activeSubMenu === item.label && (
                    <div
                      key={item.label}
                      onMouseEnter={() => setactiveSubMenu(item.label)}
                      onMouseLeave={() => setactiveSubMenu('')}
                    >
                      {item.subMenu?.map(item => (
                        <Submenu {...item} key={item.label} />
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    )

  return (
    <Link href={href} className='text-sm font-semibold leading-6 flex items-center gap-2 uppercase'>
      {Icon && <Icon />}
      {label}
      {badge && <NavBadge badge={badge} />}
    </Link>
  )
}

export default NavItem
