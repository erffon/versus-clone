'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { UrlObject } from 'url'

interface ComparisonSlider {
  data: Comparison[]
}

export interface Comparison {
  id: number
  first: { imageUrl: string; name: string }
  second: { imageUrl: string; name: string }
  pageUrl: string | UrlObject
}

const ComparisonSlider = ({ data }: ComparisonSlider) => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div className='pb-10 relative w-11/12 xl:w-full mx-auto'>
      <h3 className='text-base uppercase font-bold mb-4 text-submenu'>WHICH ARE THE MOST POPULAR COMPARISONS?</h3>
      <div ref={prevRef}>
        <TbChevronLeft
          className='text-nav-back absolute top-1/2 -translate-y-1/2 z-20 -left-16 cursor-pointer'
          size={64}
        />
      </div>
      <div ref={nextRef}>
        <TbChevronRight
          className='text-nav-back absolute top-1/2 -translate-y-1/2 z-20 -right-16 cursor-pointer'
          size={64}
        />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        loop
        breakpoints={{
          // Responsive breakpoints
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onInit={swiper => {
          ;(swiper.params.navigation as any).prevEl = prevRef.current
          ;(swiper.params.navigation as any).nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className='swiper-container relative'
      >
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <Link href={item.pageUrl} className='flex flex-col items-center justify-center w-fit mx-auto'>
              <div className='flex space-x-4 items-center justify-evenly relative'>
                {/* Camera 1 */}
                <div className='text-center '>
                  <img src={item.first.imageUrl} alt={item.first.name} className='w-24 h-24' />
                </div>
                {/* VS Badge */}
                <div className='text-center absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-1/4'>
                  <span className='bg-white text-black font-bold rounded-full px-4 py-2 shadow-lg'>VS</span>
                </div>
                {/* Camera 2 */}
                <div className='text-center '>
                  <img src={item.second.imageUrl} alt={item.second.name} className='w-24 h-24' />
                </div>
              </div>
              <p className='text-center mt-4 text-gray-700 text-sm'>
                {item.first.name} <br /> vs <br /> {item.second.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ComparisonSlider
