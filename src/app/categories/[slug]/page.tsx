import { Breadcrumb } from '@/app/components'
import { TbAward } from 'react-icons/tb'
import { Filters, IProductItem, ProductList, TagList, Title } from './components'

const tags = [
  { id: 1, label: 'TOP 10' },
  { id: 2, label: 'SAMSUNG' },
  { id: 3, label: 'BATTERY LIFE' },
  { id: 4, label: '5G' },
  { id: 5, label: 'HEADPHONE JACK' },
  { id: 6, label: 'BIGGEST SCREEN' },
  { id: 7, label: '120HZ' },
  { id: 8, label: 'MICROSD SLOT' },
  { id: 9, label: 'RAM' },
  { id: 10, label: 'BUDGET' },
  { id: 11, label: 'BIGGEST BATTERY' },
  { id: 12, label: 'SMALL' },
  { id: 13, label: 'FOLDABLE' }
]

const phones: IProductItem[] = [
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  },
  {
    id: Math.random() + 1,
    name: 'Nothing Phone (3a) Pro',
    points: 62,
    image: '/assets/canon-eos-200d.webp',
    // screenSize: '6.77',
    // memory: '12GB',
    // ppi: 387,
    // battery: 5000,
    features: [
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      },
      {
        icon: <TbAward />,
        label: '6.77'
      }
    ]
  }

  // {
  //   id: 2,
  //   name: 'Xiaomi Poco M7',
  //   points: 49,
  //   image: '/images/phone2.jpg',
  //   screenSize: '6.88',
  //   memory: '8GB',
  //   ppi: 260,
  //   battery: 5160,
  // },
]

const CategoryPage = () => {
  return (
    <>
      <section>
        <div className='bg-hero relative -mt-18 pt-18'>
          <div className='max-w-1170 w-11/12 mx-auto'>
            <div className='container mx-auto'>
              <div className='pb-10'>
                <Breadcrumb color='gray' />
                <Title />
                <TagList tags={tags} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-soft-alabaster'>
        <div className='max-w-1170 sm:w-11/12 mx-auto'>
          <div className='container mx-auto flex'>
            <Filters />

            <ProductList items={phones} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryPage
