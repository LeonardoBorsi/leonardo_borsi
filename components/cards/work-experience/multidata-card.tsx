import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { HibernateChip, JavaChip } from '../../chips'

export default function MultidataCard() {
  return (
    <Card className='bg-multidata text-white'>
      <CardContent
        title='Multidata'
        subtitle='Backend Developer Intern'
        period='2020 - 2021'
        imageSrc='/images/multidata-white.png'
        imageSize={60}
        description='Contributed to backend services at a company specializing in management solutions for the textile industry by developing APIs with Spring and optimizing database queries using Hibernate'
        externalLink='https://www.multidata.org'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <HibernateChip white />
            <JavaChip white />
          </div>
        }
      />
    </Card>
  )
}
