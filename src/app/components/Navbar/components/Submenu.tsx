import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import NavBadge from './NavBadge'

interface Submenu {
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onMouseLeave?: MouseEventHandler<HTMLDivElement>
  activeSubMenu?: string
  label: string
  href?: string
  icon?: IconType
  badge?: string
}

const Submenu = (props: Submenu) => {
  const { href, label, badge, icon: Icon, onMouseEnter, onMouseLeave, activeSubMenu } = props

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={label}
      className={`group relative flex items-center gap-2 py-2 px-4 text-sm leading-6 border-b border-b-transparent  ${
        activeSubMenu === label ? 'border-b-soft-silver' : ''
      }`}
    >
      {href ? (
        <Link href={href} className='text-neutral-gray group-hover:text-vibrant-blue flex items-center gap-2'>
          {Icon && <Icon aria-hidden='true' className='h-4 w-4 text-neutral-gray group-hover:text-vibrant-blue' />}
          {label}
          {badge && <NavBadge badge={badge} />}
        </Link>
      ) : (
        <div
          className={`text-neutral-gray group-hover:text-vibrant-blue flex items-center gap-2 ${
            activeSubMenu === label ? 'text-vibrant-blue' : ''
          }`}
        >
          {Icon && (
            <Icon
              aria-hidden='true'
              className={`h-4 w-4 text-neutral-gray group-hover:text-vibrant-blue ${
                activeSubMenu === label ? 'text-vibrant-blue' : ''
              }`}
            />
          )}
          {label}
          {badge && <NavBadge badge={badge} />}
        </div>
      )}
    </div>
  )
}

export default Submenu
