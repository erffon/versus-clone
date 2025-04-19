import { cn } from '@/utils'
import { Dropdown, DropdownProps } from 'flowbite-react'

const Main = (props: DropdownProps) => {
  const { clearTheme, size = 'xl', inline = true, className, children, ...rest } = props

  return (
    <Dropdown clearTheme inline={inline} className={cn('!-top-3.5', className)} size={size} {...rest}>
      {children}
    </Dropdown>
  )
}

export default Main
