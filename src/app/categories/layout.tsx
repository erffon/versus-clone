import { Breadcrumb } from '../components'

export default ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className='w-full overflow-x-hidden bg-white pt-14 h-full'>
      <div className='max-w-1170 w-11/12 mx-auto'>
        <div className='container mx-auto'>
          <Breadcrumb />
          {children}
        </div>
      </div>
    </main>
  )
}
