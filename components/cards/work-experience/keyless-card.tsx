import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { LitChip, NextChip, PrismaChip, ReactChip, TailwindChip, TypeScriptChip } from '../../chips'

export default function KeylessCard() {
  return (
    <Card className='bg-black text-white dark:border-white/25 dark:border-1'>
      <CardContent
        title='Keyless'
        subtitle='Frontend Software Engineer'
        period='2023 - Present'
        imageSrc='/images/keyless/keyless-white.png'
        imageSize={50}
        description={
          <>
            Contributed to the frontend team in a privacy first, passwordless biometric authentication company, delivering key web based projects:
            <ul className='list-inside list-disc'>
              <li>Developed internal and customer facing dashboards using Next.js, which improved user engagement and efficiency</li>
              <li>Built and maintained the company s website, along with interactive client demos</li>
              <li>
                Created a JavaScript SDK using the Lit library for WebComponents, allowing client companies to integrate the authentication flow into their
                products while ensuring compatibility across all devices and browsers
              </li>
            </ul>
          </>
        }
        externalLink='https://keyless.io'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <NextChip white />
            <ReactChip white />
            <LitChip white />
            <PrismaChip white />
            <TypeScriptChip white />
            <TailwindChip white />
          </div>
        }
        whiteButtons
      />
    </Card>
  )
}
