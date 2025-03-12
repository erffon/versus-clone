import type { CustomFlowbiteTheme } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: 'mx-auto flex items-center justify-center py-5 max-w-1170 w-11/12',
      inner: {
        base: 'mx-auto flex items-center justify-center max-w-1170 w-full gap-x-8 lg:gap-x-12',
        fluid: {
          on: '',
          off: ''
        }
      }
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg w-7 h-5 focus:outline-none lg:hidden cursor-pointer',
      icon: 'h-6 w-6 shrink-0'
    },
    collapse: {
      base: 'absolute left-0 top-0 w-svw h-svh bg-deep-charcoal pt-18',
      list: 'flex flex-col px-4 relative h-full',
      hidden: {
        on: 'hidden',
        off: 'block'
      }
    }
  },
  accordion: {
    root: {
      base: '',
      flush: {
        off: '',
        on: ''
      }
    },

    title: {
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
    },
    content: {
      base: 'px-6 pb-2'
    }
  }
}

export default customTheme
