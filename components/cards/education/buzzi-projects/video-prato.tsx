import { PremiereChip } from '@/components/chips'
import Project from '@/components/project'

export default function VideoPrato() {
  return (
    <Project
      course='Video Making Contest'
      project='"Ti racconto la mia Prato" - 1st Place'
      description="Produced a winning video for the video-making contest hosted by the city of Prato and Primavera d'Impresa, securing first place."
      linkYoutube='https://www.youtube.com/watch?v=DJXnosBpIrU'
      skills={<PremiereChip />}
    />
  )
}
