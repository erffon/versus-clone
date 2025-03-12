import { NavLink } from '@/configs'
import { cn } from '@/utils'
import { Popover } from 'flowbite-react'
import Link from 'next/link'
import { useState } from 'react'
import { TbChevronDown } from 'react-icons/tb'
import NavBadge from './NavBadge'
import Submenu from './Submenu'

const NavItem = (props: NavLink) => {
  const { href, label, badge, icon: Icon, subMenu, className } = props
  const [activeSubMenu, setactiveSubMenu] = useState('')

  if (subMenu)
    return (
      <div className='relative hidden lg:block'>
        <Popover
          trigger='hover'
          arrow={false}
          placement='bottom-start'
          content={
            <div className='min-w-fit max-w-md rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition before:content-[""] before:absolute before:left-3 before:-top-4 before:border-8 before:border-solid before:border-transparent before:border-b-white overflow-visible'>
              <div className='overflow-hidden rounded-lg'>
                <div className='flex'>
                  <div className={!!activeSubMenu ? `border-r-soft-silver border-r` : ''}>
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
                          {item.subMenu?.map((item, idx) => (
                            <Submenu {...item} key={`sub-${idx}`} />
                          ))}
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          }
        >
          <div className='border-0 flex items-center gap-x-1 text-sm font-semibold leading-6 uppercase cursor-pointer'>
            {Icon && <Icon />}
            {label}
            {badge && <NavBadge badge={badge} />}
            <TbChevronDown aria-hidden='true' className='h-5 w-5 flex-none text-gray-400' />
          </div>
        </Popover>
      </div>
    )

  return (
    <Link
      href={href}
      className={cn(
        `text-sm font-semibold leading-6 items-center gap-2 uppercase hover:underline hidden lg:flex`,
        className
      )}
    >
      {Icon && <Icon />}
      {label}
      {badge && <NavBadge badge={badge} />}
    </Link>
  )
}

export default NavItem
