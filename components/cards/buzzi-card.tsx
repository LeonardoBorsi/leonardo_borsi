'use client'
import { Card, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Button, CardBody, CardFooter } from '@nextui-org/react'
import NextImage from 'next/image'
import { ExternalLinkIcon } from '../icons'

export default function BuzziCard() {
  return (
    <Card className='p-2 md:p-4'>
      <CardHeader className='flex flex-col sm:flex-row justify-between items-start gap-8'>
        <div className='flex items-start sm:items-center gap-4 sm:gap-5'>
          <div className='w-3/12 sm:w-auto flex justify-center'>
            <div className='dark:hidden w-fit'>
              <Image className='block sm:hidden  min-w-[75px]' as={NextImage} width={75} height={75} src='/images/buzzi.png' radius='none' />
              <Image className='hidden sm:block min-w-[100px]' as={NextImage} width={100} height={100} src='/images/buzzi.png' radius='none' />
            </div>
            <div className='hidden dark:block w-fit'>
              <Image className='block sm:hidden min-w-[75px]' as={NextImage} width={75} height={75} src='/images/buzzi-white.png' radius='none' />
              <Image className='hidden sm:block min-w-[100px]' as={NextImage} width={100} height={100} src='/images/buzzi-white.png' radius='none' />
            </div>
          </div>
          <div className='max-w-9/12 sm:w-auto flex flex-col'>
            <span className='font-medium text-2xl md:text-3xl'>ITS Tullio Buzzi</span>
            <span className='font-thin text-xl md:text-2xl'>High school diploma in IT and Telecommunications</span>
            <span className='block md:hidden font-regular text-lg sm:text-xl text-nowrap	'>2014 - 2019</span>
          </div>
        </div>
        <div className='hidden md:block'>
          <span className='font-regular text-lg md:text-xl text-nowrap	'>2014 - 2019</span>
        </div>
      </CardHeader>
      <CardBody>
        <p className='text-xl md:text-2xl font-light'>desc</p>
      </CardBody>
      <CardFooter className='justify-between items-end'>
        <Button className='text-base border-default-700' href='https://keyless.io' startContent={<ExternalLinkIcon />} variant='bordered'>
          School Website
        </Button>
      </CardFooter>
    </Card>
  )
}
