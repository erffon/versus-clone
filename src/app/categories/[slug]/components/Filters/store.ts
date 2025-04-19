import { create } from 'zustand'

interface IFilterDrawerrModal {
  setFilterDrawerrOpen: (isOpen: boolean) => void
  filterDrawerrIsOpen: boolean
}

const useFilterDrawerrModal = create<IFilterDrawerrModal>(set => ({
  filterDrawerrIsOpen: false,
  setFilterDrawerrOpen: isOpen =>
    set(() => {
      return { filterDrawerrIsOpen: isOpen }
    })
}))

export default useFilterDrawerrModal
