import Link from 'next/link'

const gridConfig = [
  'row-end-[span_16] h-[413px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_9] h-[224px]',
  'row-end-[span_12] h-[305px]',
  'row-end-[span_9] h-[224px]'
]

const Categories = (props: {
  data: {
    id: number
    title: string
    description: string
    imageUrl: string
    href: string
  }[]
  categoryTitle: string
  title: string
}) => {
  const { categoryTitle, data, title } = props

  return (
    <>
      <h3 className='text-neutral-gray text-xs font-bold capitalize tracking-[3px]'>{title}</h3>
      <h2 className='text-black text-2xl font-bold capitalize relative mb-6 after:content-[""] after:absolute after:-bottom-2 after:left-0 after:bg-deep-charcoal after:w-10 after:h-px'>
        {categoryTitle}
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 auto-rows-[25px] mb-8'>
        {data.map((item, idx) => {
          const classes = gridConfig[idx]

          return (
            <Link key={item.description} href={item.href} className={`flex flex-col ${classes}`}>
              <div className='relative overflow-hidden rounded-lg shadow-lg group h-full'>
                <img src={item.imageUrl} alt={'Cars updated'} className='object-cover w-full h-full' />
                <h3 className='text-lg font-bold absolute left-4 bottom-2'>{item.title}</h3>
              </div>
              <div className='p-4'>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories
