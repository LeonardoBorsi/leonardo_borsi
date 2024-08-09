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
        imageSrc='/images/the-swarm-logo-white.png'
        imageSize={60}
        description='Assembly of servers intended for Cloud Storage and script development  batches intended for testing.'
        externalLink='https://www.linkedin.com/company/theswarm/about/'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <ScriptChip white />
          </div>
        }
      />
    </Card>
  )
}
