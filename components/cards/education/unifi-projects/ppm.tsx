import { DjangoChip } from '@/components/chips'
import Project from '@/components/project'

export default function PPM() {
  return (
    <Project
      course='Multimedia Design and Production'
      project='DNS Management System'
      description='Web application developed entirely with Django which simulates a management system used to assign domains to IP addresses. Project developed for the multimedia design and production exam and distributed with Render.'
      linkGithub='https://github.com/LeonardoBorsi/dns-manager'
      skills={<DjangoChip />}
    />
  )
}
