import { NavLink } from '@/configs'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import NavBadge from './NavBadge'

const Submenu = (
  props: NavLink & {
    onMouseEnter?: MouseEventHandler<HTMLDivElement>
    onMouseLeave?: MouseEventHandler<HTMLDivElement>
    activeSubMenu?: string
  }
) => {
  const { href, label, badge, icon: Icon, onMouseEnter, onMouseLeave, activeSubMenu } = props

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={label}
      className={`group relative flex items-center gap-2 py-2 px-4 text-sm leading-6 border-b border-b-transparent  ${
        activeSubMenu === label ? 'border-b-submenu-hover' : ''
      }`}
    >
      {Icon && <Icon aria-hidden='true' className='h-4 w-4 text-submenu group-hover:text-active' />}

      <Link href={href} className='text-submenu group-hover:text-active flex items-center gap-2'>
        {label}
        {badge && <NavBadge badge={badge} />}
      </Link>
    </div>
  )
}

export default Submenu
