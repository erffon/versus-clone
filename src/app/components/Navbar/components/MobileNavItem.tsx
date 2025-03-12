import { NavLink } from '@/configs'
import { Accordion } from 'flowbite-react'
import NavBadge from './NavBadge'
import Link from 'next/link'
import { cn } from '@/utils'

const MobileNavItem = (props: NavLink) => {
  const { href, label, badge, icon: Icon, subMenu, className } = props

  if (subMenu) {
    return (
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            {Icon && <Icon />}
            {label}
            {badge && <NavBadge badge={badge} />}
          </Accordion.Title>
          <Accordion.Content>
            <Accordion collapseAll className='!border-0'>
              {subMenu.map(item => {
                return (
                  <Accordion.Panel key={item.label}>
                    <Accordion.Title>
                      {item.icon && <item.icon />}
                      {item.label}
                      {item.badge && <NavBadge badge={item.badge} />}
                    </Accordion.Title>
                    <Accordion.Content className='border-b border-raisin-black'>
                      {item?.subMenu?.map((item, idx) => {
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            className={cn(
                              `text-sm font-semibold leading-6 items-center gap-2 uppercase hover:underline flex`,
                              item.className
                            )}
                          >
                            {item.icon && <item.icon />}
                            {item.label}
                            {item.badge && <NavBadge badge={item.badge} />}
                          </Link>
                        )
                      })}
                    </Accordion.Content>
                  </Accordion.Panel>
                )
              })}
            </Accordion>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        `gap-2 hover:underline flex w-full items-center p-2 text-sm font-semibold leading-6 uppercase cursor-pointer border-b border-raisin-black`,
        className
      )}
    >
      {Icon && <Icon />}
      {label}
      {badge && <NavBadge badge={badge} />}
    </Link>
  )
}

export default MobileNavItem
