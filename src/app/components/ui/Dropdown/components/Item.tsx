import { DropdownItem, DropdownItemProps } from 'flowbite-react'

const Item = ({ children, ...rest }: DropdownItemProps) => {
  return <DropdownItem {...rest}>{children}</DropdownItem>
}

export default Item
