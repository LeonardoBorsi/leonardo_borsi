'use client'
import { Card, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Button, CardBody, CardFooter } from '@nextui-org/react'
import NextImage from 'next/image'
import { ExternalLinkIcon } from '../icons'
import Alg from './courses/alg'
import Lab from './courses/lab'
import PPM from './courses/ppm'
import SWE from './courses/swe'
import Thesis from './courses/thesis'

export default function UnifiCard() {
  return (
    <Card className='p-2 md:p-4'>
      <CardHeader className='flex flex-col sm:flex-row justify-between items-start gap-8'>
        <div className='flex items-start sm:items-center gap-4 sm:gap-5'>
          <div className='max-w-3/12 sm:w-auto flex justify-center'>
            <div className='dark:hidden w-fit'>
              <Image className='block sm:hidden  min-w-[75px]' as={NextImage} width={75} height={75} src='/images/unifi.png' radius='none' />
              <Image className='hidden sm:block min-w-[100px]' as={NextImage} width={100} height={100} src='/images/unifi.png' radius='none' />
            </div>
            <div className='hidden dark:block w-fit'>
              <Image className='block sm:hidden min-w-[75px]' as={NextImage} width={75} height={75} src='/images/unifi-white.png' radius='none' />
              <Image className='hidden sm:block min-w-[100px]' as={NextImage} width={100} height={100} src='/images/unifi-white.png' radius='none' />
            </div>
          </div>
          <div className='w-9/12 sm:w-auto flex flex-col'>
            <span className='font-medium text-2xl md:text-3xl'>Università degli Studi di Firenze</span>
            <span className='font-thin text-xl md:text-2xl'>Bachelor's degree in Computer Science and Engineering</span>
            <span className='block md:hidden font-regular text-lg sm:text-xl text-nowrap	'>2020 - 2024</span>
          </div>
        </div>
        <div className='hidden md:block'>
          <span className='font-regular text-lg md:text-xl text-nowrap	'>2020 - 2024</span>
        </div>
      </CardHeader>
      <CardBody className='space-y-5'>
        <Thesis />
        <SWE />
        <PPM />
        <Alg />
        <Lab />
      </CardBody>
      <CardFooter className='justify-between items-end'>
        <Button className='text-base border-default-700' href='https://keyless.io' startContent={<ExternalLinkIcon />} variant='bordered'>
          Corso di Studio
        </Button>
      </CardFooter>
    </Card>
  )
}
