'use client'

import CardContent from '@/components/card-content'
import { Card } from '@nextui-org/card'
import Link from 'next/link'
import { NextChip, ReactChip, ShadcnUIChip, TailwindChip, TypeScriptChip } from '../../chips'

export default function GameOfLifeCard() {
  return (
    <Card className=''>
      <CardContent
        title='Game Of Life'
        period='2025'
        imageSrc='/images/game-of-life/game-of-life.png'
        imageSize={45}
        description={
          <div className='flex flex-col lg:flex-row gap-10 w-full items-center'>
            <div className='flex items-center'>
              <p>
                An interactive version of{' '}
                <Link className='underline' href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' target='_blank'>
                  Conway's Game of Life
                </Link>
                , a zero-player game that simulates cellular evolution on a grid. Each cell follows simple rules: it survives, dies, or is born based on the
                number of neighboring cells.
                <br />
                <br />
                Despite its simplicity, the game can produce incredibly complex patterns, from stable structures to oscillators and even self-replicating
                machines. Experiment with different initial setups and discover how simple rules can lead to unpredictable and fascinating behaviors over time.
              </p>
            </div>
            <div className='rounded-lg max-w-[400px] overflow-hidden'>
              <img className='mx-auto' src='/images/game-of-life/game-of-life-gif-cropped.gif' />
            </div>
          </div>
        }
        externalLink='https://game-of-life-liart-three.vercel.app/'
        externalLinkLabel='Play Game'
        linkGithub='https://github.com/LeonardoBorsi/game-of-life'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <NextChip />
            <ReactChip />
            <TypeScriptChip />
            <ShadcnUIChip />
            <TailwindChip />
          </div>
        }
      />
    </Card>
  )
}
