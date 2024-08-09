import { Card } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

export default function Cambridge() {
  return (
    <Card className='p-7'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='dark:hidden md:w-[300px]'>
            <Image className='block sm:hidden min-w-[165px]' as={NextImage} width={165} height={40} src='/images/cambridge.png' radius='none' />
            <Image className='hidden sm:block min-w-[225px]' as={NextImage} width={225} height={55} src='/images/cambridge.png' radius='none' />
          </div>
          <div className='hidden dark:block md:w-[300px]'>
            <Image className='block sm:hidden min-w-[165px]' as={NextImage} width={165} height={40} src='/images/cambridge-white.png' radius='none' />
            <Image className='hidden sm:block min-w-[225px]' as={NextImage} width={225} height={55} src='/images/cambridge-white.png' radius='none' />
          </div>
          <div>
            <span className='font-light text-xl md:text-2xl'>FCE Certificate (B2)</span>
          </div>
        </div>
        <div>
          <span className='font-regular text-lg md:text-xl'>2018</span>
        </div>
      </div>
    </Card>
  )
}
