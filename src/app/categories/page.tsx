import { Breadcrumb } from '../components'
import { CategoryCard } from './components'
import { CategoryCardData } from './components/CategoryCard'

const categories: CategoryCardData[] = [
  {
    title: 'Mobile Devices',
    iconUrl: '/icons/mobile.svg',
    subcategories: [
      {
        title: 'Smartphones'
      },
      { title: 'Tablets' },
      { title: 'Fitness Trackers' },
      { title: 'Smart Watches' }
    ]
  },
  {
    title: 'Wearables',
    iconUrl: '/icons/wearable.svg',
    subcategories: [{ title: 'Fitness Trackers' }, { title: 'Smart Watches' }, { title: 'Sports Watches' }]
  },
  {
    title: 'Photo & Video',
    iconUrl: '/icons/photo-video.svg',
    subcategories: [
      { title: 'Cameras' },
      { title: 'Camcorders' },
      { title: 'Drones' },
      { title: 'Action Cameras', badge: 'new' }
    ]
  },
  {
    title: 'Audio',
    iconUrl: '/icons/audio.svg',
    subcategories: [{ title: 'Headphones' }, { title: 'Speakers' }, { title: 'Soundbars' }, { title: 'Record Players' }]
  },
  {
    title: 'Computer Components',
    iconUrl: '/icons/computer-components.svg',
    subcategories: [
      { title: 'Graphics Cards' },
      { title: 'CPUs' },
      { title: 'Motherboards' },
      { title: 'RAM' },
      { title: 'Power Supplies' }
    ]
  },
  {
    title: 'Printers & Scanners',
    iconUrl: '/icons/printers-scanners.svg',
    subcategories: [{ title: 'Printers' }, { title: '3D Printers' }, { title: 'Scanners' }, { title: 'Plotters' }]
  },
  {
    title: 'Apps & Software',
    iconUrl: '/icons/apps-software.svg',
    subcategories: [
      { title: 'Messaging Apps' },
      { title: 'Dating Apps' },
      { title: 'Streaming Apps' },
      { title: 'Educational Software' }
    ]
  },
  {
    title: 'Education',
    iconUrl: '/icons/education.svg',
    subcategories: [{ title: 'E-learning Platforms' }, { title: 'Online Courses' }, { title: 'Educational Software' }]
  },
  {
    title: 'Home & Garden',
    iconUrl: '/icons/home-garden.svg',
    subcategories: [
      { title: 'Air Purifiers' },
      { title: 'Pressure Cookers' },
      { title: 'Coffee Machines' },
      { title: 'Grills' },
      { title: 'Robotic Vacuums' }
    ]
  },
  {
    title: 'Food',
    iconUrl: '/icons/food.svg',
    subcategories: [{ title: 'Apples' }, { title: 'Bananas' }, { title: 'Oranges' }, { title: 'Milk' }]
  },
  {
    title: 'Transportation',
    iconUrl: '/icons/transportation.svg',
    subcategories: [{ title: 'Cars' }, { title: 'Electric Scooters' }, { title: 'Bicycles' }]
  },
  {
    title: 'Soccer',
    iconUrl: '/icons/soccer.svg',
    subcategories: [{ title: 'National Teams' }, { title: 'Soccer Clubs' }, { title: 'Soccer Players' }]
  }
]

const CategoriesPage = () => {
  return (
    <main className='w-full overflow-x-hidden bg-white pt-14'>
      <div className='max-w-1170 mx-auto'>
        <Breadcrumb />
        <CategoryCard data={categories} />
      </div>
    </main>
  )
}

export default CategoriesPage
