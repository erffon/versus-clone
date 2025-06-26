import { createTheme } from 'flowbite-react'

const customTheme = createTheme({
  navbar: {
    root: {
      base: 'mx-auto flex items-center justify-between lg:justify-center py-5 max-w-1170 w-11/12',
      inner: {
        base: 'mx-auto flex items-center justify-between lg:justify-center max-w-1170 w-full gap-x-8 lg:gap-x-12',
        fluid: {
          on: '',
          off: ''
        }
      }
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg w-7 h-5 focus:outline-none lg:hidden cursor-pointer',
      icon: 'h-6 w-6 shrink-0',
      title: 'sr-only'
    },
    collapse: {
      base: 'absolute right-0 top-0 w-svw h-svh bg-deep-charcoal pt-18 duration-300 transition',
      list: 'flex flex-col px-4 relative h-full',
      hidden: {
        on: 'block',
        off: 'block'
      }
    }
  },
  tooltip: {
    target: 'w-fit',
    animation: 'transition-opacity',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-gray-900 dark:bg-gray-700',
        light: 'bg-white',
        auto: 'bg-white dark:bg-gray-700'
      },
      placement: '-4px'
    },
    base: 'absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-gray-900 text-white dark:bg-gray-700',
      light: 'border border-gray-200 bg-white text-deep-charcoal',
      auto: 'border border-gray-200 bg-white text-deep-charcoal dark:border-none dark:bg-gray-700 dark:text-white'
    },
    content: 'relative z-20 min-w-40'
  },
  dropdown: {
    arrowIcon: 'ml-2 h-4 w-4',
    content: 'py-1 focus:outline-none',
    floating: {
      animation: 'transition-opacity',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-white',
          light: 'bg-white',
          auto: 'bg-white'
        },
        placement: '-4px'
      },
      base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
      content: 'py-1 text-sm text-gray-700',
      divider: 'my-1 h-px bg-gray-100',
      header: 'block px-4 py-2 text-sm text-gray-700',
      hidden: 'invisible opacity-0',
      item: {
        container: '',
        base: 'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
        icon: 'mr-2 h-4 w-4'
      },
      style: {
        dark: 'border border-gray-200 bg-white text-gray-900',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900'
      },
      target: 'w-fit'
    },
    inlineWrapper: 'flex items-center'
  },
  checkbox: {
    base: 'h-4 w-4 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2',
    color: {
      default: 'text-primary-600 focus:ring-primary-600',
      dark: 'text-gray-800 focus:ring-gray-800',
      failure: 'text-red-900 focus:ring-red-900',
      gray: 'text-gray-900 focus:ring-gray-900',
      info: 'text-cyan-800 focus:ring-cyan-800',
      light: 'text-gray-900 focus:ring-gray-900',
      purple: 'text-purple-600 focus:ring-purple-600',
      success: 'text-green-800 focus:ring-green-800',
      warning: 'text-yellow-400 focus:ring-yellow-400',
      blue: 'text-blue-700 focus:ring-blue-600',
      cyan: 'text-cyan-600 focus:ring-cyan-600',
      green: 'text-green-600 focus:ring-green-600',
      indigo: 'text-indigo-700 focus:ring-indigo-700',
      lime: 'text-lime-700 focus:ring-lime-700',
      pink: 'text-pink-600 focus:ring-pink-600',
      red: 'text-red-600 focus:ring-red-600',
      teal: 'text-teal-600 focus:ring-teal-600',
      yellow: 'text-yellow-400 focus:ring-yellow-400'
    }
  },
  drawer: {
    root: {
      base: 'fixed z-40 overflow-y-auto bg-white p-4 transition-transform',
      backdrop: 'fixed inset-0 z-30 bg-gray-900/50',
      edge: 'bottom-16',
      position: {
        top: {
          on: 'left-0 right-0 top-0 w-full transform-none',
          off: 'left-0 right-0 top-0 w-full -translate-y-full'
        },
        right: {
          on: 'right-0 top-0 h-screen w-80 transform-none',
          off: 'right-0 top-0 h-screen w-80 translate-x-full'
        },
        bottom: {
          on: 'bottom-0 left-0 right-0 w-full transform-none',
          off: 'bottom-0 left-0 right-0 w-full translate-y-full'
        },
        left: {
          on: 'left-0 top-0 h-screen w-full max-w-100 transform-none',
          off: 'left-0 top-0 h-screen w-full max-w-100 -translate-x-full'
        }
      }
    },
    header: {
      inner: {
        closeButton:
          'absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900',
        closeIcon: 'h-4 w-4',
        titleCloseIcon: 'sr-only',
        titleIcon: 'me-2.5 h-4 w-4',
        titleText: 'mb-4 inline-flex items-center text-base font-semibold text-gray-500'
      },
      collapsed: {
        on: 'hidden',
        off: 'block'
      }
    },
    items: {
      base: ''
    }
  }
})

export default customTheme
