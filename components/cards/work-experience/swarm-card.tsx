import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { ScriptChip } from '../../chips'

export default function SwarmCard() {
  return (
    <Card className='bg-swarm text-white'>
      <CardContent
        title='The SwARM'
        subtitle='Summer Internship'
        period='2018'
        imageSrc='/images/the-swarm/the-swarm-logo-white.png'
        imageSize={60}
        description='Focused on assembling cloud storage servers and developing bash scripts for equipment testing and quality assurance'
        externalLink='https://www.linkedin.com/company/theswarm/about/'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <ScriptChip white />
          </div>
        }
        whiteButtons
      />
    </Card>
  )
}
