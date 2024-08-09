import { AlexaChip, ElectronChip, RaspberryChip } from '@/components/chips'
import Project from '@/components/project'

export default function AlexaMirror() {
  return (
    <Project
      course='Project Management'
      project='Alexa Mirror'
      description='Development of a smart mirror integrated with Alexa, built using a Raspberry Pi connected to a monitor made reflective with a specialized film. The software interface was developed using the Electron framework. In addition to Alexa integration and voice commands, the smart mirror features weather, a clock, calendar, and a music player. This was a group project where I managed the project, including creating a Gantt chart with various tasks and producing all project documentation.'
      skills={
        <>
          <AlexaChip />
          <ElectronChip />
          <RaspberryChip />
        </>
      }
    />
  )
}
