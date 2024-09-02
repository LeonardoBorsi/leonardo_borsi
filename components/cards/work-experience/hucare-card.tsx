import { Card } from '@nextui-org/card'
import CardContent from '../../card-content'
import { GraphQLChip, MaterialUIChip, ReactChip, ReactNativeChip, TypeScriptChip } from '../../chips'

export default function HucareCard() {
  return (
    <Card className='bg-hucare text-white'>
      <CardContent
        title='HuCare'
        subtitle='Lead Frontend Developer'
        period='2022 - 2023'
        imageSrc='/images/hucare-logo-nobg.png'
        imageSize={60}
        description={
          <>
            Led the frontend development and UX/UI design for a platform focused on managing the doctor patient relationship. Major contributions and impacts:
            <ul className='list-inside list-disc'>
              <li>Refactored the React based web app for doctors and secretaries, focusing on a complete redesign of the calendar system</li>
              <li>
                Executed a full refactor of the existing React based mobile app for patients, initially developed with Capacitor, transitioning to a native
                application using React Native. This included working from mock ups to final implementation
              </li>
            </ul>
          </>
        }
        externalLink='https://www.hu-care.com'
        skills={
          <div className='flex flex-wrap gap-2 sm:justify-end'>
            <ReactChip white />
            <ReactNativeChip white />
            <TypeScriptChip white />
            <GraphQLChip white />
            <MaterialUIChip white />
          </div>
        }
      />
    </Card>
  )
}
