'use client'

import { Drawer } from 'flowbite-react'
import FilterPanel from './FilterPanel'
import useFilterDrawerrModal from './store'
import { useEffect } from 'react'

const FilterDrawer = () => {
  const { filterDrawerrIsOpen: isOpen, setFilterDrawerrOpen: setIsOpen } = useFilterDrawerrModal()
  const handleDrawer = () => setIsOpen(!isOpen)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      <button
        className='fixed bottom-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-t-2xl rounded-r-2xl shadow-md z-100 cursor-pointer md:hidden'
        onClick={handleDrawer}
      >
        FILTERS
      </button>
      <Drawer
        open={isOpen}
        onClose={handleDrawer}
        className='z-10000 overflow-hidden h-svh p-0 pt-1 pr-1 pb-11 bg-soft-alabaster'
        clearTheme
      >
        <FilterPanel className='px-3' />
        <div className='absolute bottom-0 left-0 h-10 w-full'></div>
      </Drawer>
    </>
  )
}

export default FilterDrawer
