import { NavLink } from '@/configs'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react'
import NavBadge from './NavBadge'
import Link from 'next/link'
import { cn } from '@/utils'

const titleStyle = {
  base: 'flex w-full items-center justify-between p-2 text-sm font-semibold leading-6 uppercase cursor-pointer',
  heading: 'flex items-center gap-x-1',
  arrow: {
    base: 'h-6 w-6 shrink-0 transition-all duration-300',
    open: {
      off: '-rotate-90',
      on: 'rotate-0'
    }
  },
  flush: {
    off: '',
    on: 'bg-transparent'
  },
  open: {
    off: 'border-b border-raisin-black',
    on: ''
  }
}

const contentStyle = {
  base: 'px-6 pb-2'
}

const MobileNavItem = (props: NavLink) => {
  const { href, label, badge, icon: Icon, subMenu, className } = props

  if (subMenu) {
    return (
      <Accordion collapseAll clearTheme>
        <AccordionPanel>
          <AccordionTitle clearTheme theme={titleStyle}>
            {Icon && <Icon />}
            {label}
            {badge && <NavBadge badge={badge} />}
          </AccordionTitle>
          <AccordionContent clearTheme theme={contentStyle}>
            <Accordion collapseAll clearTheme>
              {subMenu.map(item => {
                return (
                  <AccordionPanel key={item.label}>
                    <AccordionTitle clearTheme theme={titleStyle}>
                      {item.icon && <item.icon />}
                      {item.label}
                      {item.badge && <NavBadge badge={item.badge} />}
                    </AccordionTitle>
                    <AccordionContent clearTheme theme={contentStyle} className='border-b border-raisin-black'>
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
                    </AccordionContent>
                  </AccordionPanel>
                )
              })}
            </Accordion>
          </AccordionContent>
        </AccordionPanel>
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
