import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { BootstrapChip, JQueryChip, MySQLChip, PHPChip } from '../../chips'

export default function FashionpoCard() {
  return (
    <Card className='bg-fashionpo text-white'>
      <CardContent
        title='FashionPO'
        subtitle='Fullstack Developer'
        period='2021 - 2022'
        imageSrc='/images/fashionpo-logo-white.png'
        imageSize={60}
        description='Development of B2B Ecommerce and related CMS using PHP and HTML/jQuery. Restyling of the UX/UI of both desktop and mobile versions.  Design and development of a labeling system via Zebra printers used to optimize warehouse operations.'
        externalLink='https://www.fashionpo.com'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <PHPChip white />
            <JQueryChip white />
            <MySQLChip white />
            <BootstrapChip white />
          </div>
        }
      />
    </Card>
  )
}
