import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { LitChip, NextChip, PrismaChip, ReactChip, TailwindChip, TypeScriptChip } from '../../chips'

export default function KeylessCard() {
  return (
    <Card className='bg-black text-white dark:border-white/25 dark:border-1'>
      <CardContent
        title='Keyless'
        subtitle='Software Engineer'
        period='2023 - Present'
        imageSrc='/images/keyless-white.png'
        imageSize={50}
        description='Development of Frontend projects related to privacy-focused passwordless biometric authentication, including internal and client-facing dashboards using the Next.js framework, and a web SDK developed with JavaScript and the Lit library'
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
      />
    </Card>
  )
}
