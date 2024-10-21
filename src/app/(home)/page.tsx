import Link from 'next/link'
import Categories from './Categories'
import CategoriesTable from './CategoriesTable'
import ComparisonSlider, { Comparison } from './ComparisonSlider'

const articles = [
  {
    id: 1,
    title: 'Cars updated',
    description: 'We updated our cars category with more data and more than 4000 models. Check it out!',
    imageUrl: '/assets/cars-updated.jpg',
    href: '/'
  },
  {
    id: 2,
    title: '',
    description: 'Mini LED vs OLED: What’s the difference and which TV should you buy?',
    imageUrl: '/assets/oled-vs-mini-led.webp',
    href: '/'
  },
  {
    id: 3,
    title: 'Hisense 110UX 110"',
    description: 'New product / Hisense 110UX 110"',
    imageUrl: '/assets/hisense-110ux.webp',
    href: '/'
  },
  {
    id: 4,
    title: '',
    description: 'SHOCKING camera comparison! Pixel 9 Pro XL vs Sony Xperia 1 VI',
    imageUrl: '/assets/camera-only.jpg',
    href: '/'
  },
  {
    id: 6,
    title: '',
    description: 'Mini LED vs OLED: What’s the difference and which TV should you buy?',
    imageUrl: '/assets/oled-vs-mini-led.webp',
    href: '/'
  },
  {
    id: 5,
    title: 'Cars updated',
    description: 'We updated our cars category with more data and more than 4000 models. Check it out!',
    imageUrl: '/assets/cars-updated.jpg',
    href: '/'
  },
  {
    id: 8,
    title: '',
    description: 'SHOCKING camera comparison! Pixel 9 Pro XL vs Sony Xperia 1 VI',
    imageUrl: '/assets/camera-only.jpg',
    href: '/'
  },
  {
    id: 7,
    title: 'Hisense 110UX 110"',
    description: 'New product / Hisense 110UX 110"',
    imageUrl: '/assets/hisense-110ux.webp',
    href: '/'
  },

  {
    id: 10,
    title: 'Cars updated',
    description: 'We updated our cars category with more data and more than 4000 models. Check it out!',
    imageUrl: '/assets/cars-updated.jpg',
    href: '/'
  },

  {
    id: 11,
    title: '',
    description: 'SHOCKING camera comparison! Pixel 9 Pro XL vs Sony Xperia 1 VI',
    imageUrl: '/assets/camera-only.jpg',
    href: '/'
  },
  {
    id: 9,
    title: '',
    description: 'Mini LED vs OLED: What’s the difference and which TV should you buy?',
    imageUrl: '/assets/oled-vs-mini-led.webp',
    href: '/'
  },
  {
    id: 12,
    title: 'Hisense 110UX 110"',
    description: 'New product / Hisense 110UX 110"',
    imageUrl: '/assets/hisense-110ux.webp',
    href: '/'
  }
]

const cameras = {
  popular: [
    { id: 1, imageUrl: '/assets/canon-eos-200d.webp', name: 'Panasonic Lumix DC-S5' },
    { id: 2, imageUrl: '/assets/canon-eos-200d.webp', name: 'Sony a7S III' },
    { id: 3, imageUrl: '/assets/canon-eos-200d.webp', name: 'Olympus OM-D E-M10 Mark IV' },
    { id: 4, imageUrl: '/assets/canon-eos-200d.webp', name: 'Nikon Z 5' },
    { id: 5, imageUrl: '/assets/canon-eos-200d.webp', name: 'Leica M10-R' }
  ],
  topRated: [
    { id: 1, imageUrl: '/assets/canon-eos-200d.webp', name: 'Panasonic Lumix DC-S5' },
    { id: 2, imageUrl: '/assets/canon-eos-200d.webp', name: 'Sony a7S III' },
    { id: 3, imageUrl: '/assets/canon-eos-200d.webp', name: 'Olympus OM-D E-M10 Mark IV' },
    { id: 4, imageUrl: '/assets/canon-eos-200d.webp', name: 'Nikon Z 5' },
    { id: 5, imageUrl: '/assets/canon-eos-200d.webp', name: 'Leica M10-R' }
  ],
  newest: [
    { id: 1, imageUrl: '/assets/canon-eos-200d.webp', name: 'Panasonic Lumix DC-S5' },
    { id: 2, imageUrl: '/assets/canon-eos-200d.webp', name: 'Sony a7S III' },
    { id: 3, imageUrl: '/assets/canon-eos-200d.webp', name: 'Olympus OM-D E-M10 Mark IV' },
    { id: 4, imageUrl: '/assets/canon-eos-200d.webp', name: 'Nikon Z 5' },
    { id: 5, imageUrl: '/assets/canon-eos-200d.webp', name: 'Leica M10-R' }
  ]
}

const cameraComparisons: Comparison[] = [
  {
    id: 1,
    first: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon EOS 200D' },
    second: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon EOS M50' },
    pageUrl: '/'
  },
  {
    id: 2,
    first: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon PowerShot SX720 HS' },
    second: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon PowerShot SX740 HS' },
    pageUrl: '/'
  },
  {
    id: 3,
    first: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Blackmagic Pocket Cinema Camera 6K' },
    second: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Sony Alpha a7 III' },
    pageUrl: '/'
  },
  {
    id: 4,
    first: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon EOS 200D' },
    second: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon EOS 250D' },
    pageUrl: '/'
  },
  {
    id: 5,
    first: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Canon EOS M50' },
    second: { imageUrl: '/assets/canon-eos-200d.webp', name: 'Sony A6000' },
    pageUrl: '/'
  }
]

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <section className='w-full h-screen max-h-[880px] bg-hero relative pt-14'>
        <div className='opacity-20 absolute left-0 -bottom-px h-[90px] z-10 w-full'>
          <svg width='100%' height='100%' viewBox='0 0 400 100' preserveAspectRatio='none'>
            <path d='M0 0 C50 0, 150 50, 200 50 S350 0, 400 10 L400 100 L0 100 Z' fill='white'></path>
          </svg>
        </div>
        <div className='opacity-20 absolute left-0 -bottom-px h-[90px] z-10 w-full'>
          <svg width='100%' height='100%' viewBox='0 0 400 100' preserveAspectRatio='none'>
            <path d='M0 100 Q200 -50, 400 100 Z' fill='white'></path>
          </svg>
        </div>
        <div className='absolute left-0 -bottom-px h-[90px] z-10 w-full'>
          <svg width='100%' height='100%' viewBox='0 0 400 100' preserveAspectRatio='none'>
            <path d='M0 50 C50 110, 110 110, 200 50 S300 0, 400 90 L400 100 L0 100 Z' fill='white'></path>
          </svg>
        </div>
        <div className='flex flex-col justify-center items-center mt-14 max-w-1170 w-11/12 mx-auto'>
          <h1 className='lowercase text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl relative -tracking-[4px] !leading-relaxed font-bold text-center'>
            Compare{' '}
            <span className='relative z-20 after:content-[""] after:absolute after:bottom-1 xs:after:bottom-2 md:after:bottom-2.5 lg:after:bottom-3.5 after:h-1 sm:after:h-1.5 md:after:h-2 lg:after:h-2.5 after:w-[calc(100%_+_12px)] after:-right-2.5 after:bg-[linear-gradient(92deg,_rgb(60,_89,_252),_rgb(118,_0,_224))] after:-z-10'>
              everything
            </span>
          </h1>
          <p className='text-white text-xl md:text-2xl font-normal mb-[4.5rem] text-center'>
            <Link className='no-underline hover:underline duration-300 capitalize' href='/en/phone'>
              smartphones
            </Link>
            ,{' '}
            <Link className='no-underline hover:underline duration-300' href='/en/city'>
              cities
            </Link>
            ,{' '}
            <Link className='no-underline hover:underline duration-300' href='/en/graphics-card'>
              graphics cards
            </Link>
            ,{' '}
            <Link className='no-underline hover:underline duration-300' href='/en/university'>
              universities
            </Link>
            , and{' '}
            <Link className='no-underline hover:underline duration-300' href='/en/categories'>
              much more
            </Link>
          </p>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap max-w-screen-sm gap-4 justify-center mx-auto w-11/12'>
          <input
            id='compare'
            name='compare'
            type='compare'
            placeholder='Type here to compare'
            autoComplete='off'
            className='w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
          />
          <button
            type='submit'
            className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
          >
            Compare
          </button>
        </div>
      </section>
      <section className='w-full bg-white pt-28'>
        <div className='max-w-1170 mx-auto w-11/12'>
          <Categories categoryTitle='camera' title='trending category' data={articles} />

          <CategoriesTable {...cameras} />

          <ComparisonSlider data={cameraComparisons} />
        </div>
      </section>
      <section className='w-full bg-white pt-14'>
        <div className='max-w-1170 mx-auto w-11/12'>
          <Categories categoryTitle='camera' title='trending category' data={articles} />

          <CategoriesTable {...cameras} />

          <ComparisonSlider data={cameraComparisons} />
        </div>
      </section>

      <section className='w-full bg-white pt-14 pb-12'>
        <div className='max-w-1170 mx-auto w-full'>
          <h2 className='text-color font-bold tracking-tight text-center whitespace-pre-wrap text-4xl md:text-6xl mb-6 w-3/4 mx-auto'>
            73k products in 110 categories. A single objective.
          </h2>
          <p className='text-color text-lg text-center w-4/5 mx-auto mb-10'>
            We have been working for more than a decade to become your reference guide when it comes to comparisons. We
            are an impartial team of technology enthusiasts: our sole mission is to help you make informed decisions.
          </p>
          <div className='flex items-center justify-center gap-8'>
            <Link
              className='px-8 py-3 rounded-full duration-300 bg-active hover:bg-color2 text-sm font-semibold'
              href={'/'}
            >
              See all categories
            </Link>
            <Link className='duration-300 text-active hover:text-color2 text-sm font-semibold' href={'/'}>
              How we work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
