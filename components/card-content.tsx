'use client'
import { Image } from '@nextui-org/image'
import { Button, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'
import { ExternalLinkIcon } from './icons'

interface ExperienceCardProps {
  title: string
  subtitle: string
  period: string
  imageSrc: string
  imageSize: number
  imageSrcDark?: string
  imageSizeDark?: number
  description?: string | React.ReactNode
  children?: React.ReactNode
  externalLink?: string
  skills?: React.ReactNode
}

export default function CardContent(props: ExperienceCardProps) {
  return (
    <div className='p-2 md:p-4'>
      <CardHeader className='flex flex-col sm:flex-row justify-between items-start gap-2'>
        <div className='flex items-center gap-5'>
          <div>
            <Image
              className={props.imageSrcDark ? 'dark:hidden' : ''}
              as={NextImage}
              width={props.imageSize}
              height={props.imageSize}
              src={props.imageSrc}
              radius='none'
            />
            {props.imageSrcDark && (
              <Image
                className='hidden dark:block'
                as={NextImage}
                width={props.imageSizeDark}
                height={props.imageSizeDark}
                src={props.imageSrcDark}
                radius='none'
              />
            )}
          </div>
          <div className='flex flex-col'>
            <span className='font-medium text-2xl md:text-3xl'>{props.title}</span>
            <span className='font-thin text-xl md:text-2xl'>{props.subtitle}</span>
            <span className='block md:hidden font-regular text-lg sm:text-xl'>{props.period}</span>
          </div>
        </div>
        <div className='hidden md:block'>
          <span className='font-regular text-lg md:text-xl'>{props.period}</span>
        </div>
      </CardHeader>
      <CardBody>
        {props.description && <div className='text-xl md:text-2xl font-light'>{props.description}</div>}
        {props.children}
      </CardBody>
      <CardFooter className='flex flex-col flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-4'>
        {props.externalLink && (
          <Link target='_blank' href={props.externalLink}>
            <Button className='text-base font-medium border-white text-white' startContent={<ExternalLinkIcon />} variant='bordered'>
              {props.title} Website
            </Button>
          </Link>
        )}
        {props.skills}
      </CardFooter>
    </div>
  )
}
