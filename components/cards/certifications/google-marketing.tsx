import { Card } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

export default function GoogleMarketing() {
  return (
    <Card className='p-7'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='pl-1 md:w-[300px]'>
            <Image
              className='block sm:hidden min-w-[120px]'
              as={NextImage}
              width={120}
              height={40}
              src='/images/certifications/google-digital-garage.png'
              radius='none'
            />
            <Image
              className='hidden sm:block min-w-[165px]'
              as={NextImage}
              width={165}
              height={55}
              src='/images/certifications/google-digital-garage.png'
              radius='none'
            />
          </div>
          <div className='text-center md:text-left'>
            <span className='font-light text-xl md:text-2xl'>Fundamentals of Digital Marketing</span>
          </div>
        </div>
        <div>
          <span className='font-regular text-lg md:text-xl'>2021</span>
        </div>
      </div>
    </Card>
  )
}
