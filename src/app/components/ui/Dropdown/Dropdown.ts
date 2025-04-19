import { Item, Main } from './components'

type DropdownComponent = typeof Main & {
  Item: typeof Item
}

const Dropdown = Main as DropdownComponent
Dropdown.Item = Item

export default Dropdown
