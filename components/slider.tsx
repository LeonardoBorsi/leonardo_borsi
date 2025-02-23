'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderProps {
  items: { type: 'image' | 'gif' | 'video'; src: string }[]
  pagination?: boolean
  navigation?: boolean
  loop?: boolean
}

const Slider: React.FC<SliderProps> = ({ items, pagination = false, navigation = false, loop = false }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={pagination ? { clickable: true } : false}
      loop={loop}
      navigation={navigation}
      className='w-full h-full'
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className='flex justify-center items-center'>
          {item.type === 'video' ? (
            <video src={item.src} controls className='max-w-full max-h-full' />
          ) : (
            <div className='rounded-lg overflow-hidden mx-auto max-w-full max-h-full'>
              <img src={item.src} alt={`slide-${index}`} />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
