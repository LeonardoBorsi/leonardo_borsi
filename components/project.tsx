import { GithubIcon, YouTubeIcon } from '@/components/icons'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import Link from 'next/link'
import React from 'react'

interface ProjectProps {
  children?: React.ReactNode
  course: string
  description: string
  linkYoutube?: string
  linkGithub?: string
  linkPDF?: string
  project: string
  skills?: React.ReactNode
}

export default function Project(props: ProjectProps) {
  return (
    <Card className='border-default-700 border-2 shadow-none bg-trasparent p-2'>
      <CardHeader className='flex flex-col items-start'>
        <span className='font-thin text-lg md:text-xl'>{props.course}</span>
        <span className='font-medium text-lg md:text-xl'>{props.project}</span>
      </CardHeader>
      <CardBody className='flex flex-col items-start'>
        <p className='text-base md:text-lg font-light'>{props.description}</p>
        {props.children}
      </CardBody>
      <CardFooter className='flex flex-col flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-4'>
        <div className='flex gap-2'>
          {props.linkGithub && (
            <Link target='_blank' href={props.linkGithub}>
              <Button isIconOnly className='text-sm font-medium border-default-700' variant='bordered'>
                <GithubIcon size={28} />
              </Button>
            </Link>
          )}
          {props.linkYoutube && (
            <Link target='_blank' href={props.linkYoutube}>
              <Button className='text-base font-medium border-default-700' href='#' startContent={<YouTubeIcon color='red' size={28} />} variant='bordered'>
                View on Youtube
              </Button>
            </Link>
          )}
        </div>

        {props.skills && <div className='flex flex-wrap gap-2 sm:justify-end'>{props.skills}</div>}
      </CardFooter>
    </Card>
  )
}
