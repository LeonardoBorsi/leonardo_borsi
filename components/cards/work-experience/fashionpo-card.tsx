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
        description={
          <>
            Worked at a B2B e-commerce company specializing in wholesale women's apparel, focusing on both the e-commerce platform and its CMS
            <ul className='list-inside list-disc'>
              <li>
                Led a complete redesign of the e-commerce site, from creating mock-ups to final implementation, while preserving the original stack of PHP,
                HTML/CSS and jQuery
              </li>
              <li>
                Designed and implemented a comprehensive labeling system for inventory management, utilizing Zebra printers for labels and mobile devices with
                scanners to efficiently manage the movement of goods from suppliers to the warehouse and facilitate package preparation for shipment
              </li>
            </ul>
          </>
        }
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
