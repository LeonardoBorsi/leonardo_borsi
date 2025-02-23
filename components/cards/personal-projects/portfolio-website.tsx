'use client'

import CardContent from '@/components/card-content'
import { Card } from '@nextui-org/card'
import { HeroUIChip, NextChip, ReactChip, TailwindChip, TypeScriptChip } from '../../chips'

export default function PortfolioWebsite() {
  return (
    <Card className=''>
      <CardContent
        title='Portfolio Website'
        period='2024'
        imageSrc='/favicon.ico'
        imageSize={45}
        description="The very website you're browsing right now! A clean and intuitive portfolio showcasing my projects, skills, and experience."
        linkGithub='https://github.com/LeonardoBorsi/leonardo_borsi'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <NextChip />
            <ReactChip />
            <TypeScriptChip />
            <HeroUIChip />
            <TailwindChip />
          </div>
        }
      />
    </Card>
  )
}
