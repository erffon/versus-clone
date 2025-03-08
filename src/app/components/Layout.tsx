'use client'

import { AppRoutes } from '@/configs'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import { INavBar, Navbar } from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const commonNavConfig: INavBar = {
    hasSearch: true,
    isColoredBg: true
  }

  const resolveRoute = (path: string): INavBar => {
    if (path === AppRoutes.Home) {
      return {
        hasSearch: false,
        isColoredBg: false
      }
    }
    if (path === AppRoutes.Categories) {
      return commonNavConfig
    }
    if (path.startsWith(AppRoutes.Category)) {
      return {
        hasSearch: true,
        isColoredBg: false
      }
    }
    return commonNavConfig
  }

  return (
    <main className='w-full bg-white pt-18'>
      <Navbar {...resolveRoute(pathname)} />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
