import { BalsamiqChip, JavaChip, PostgresqlChip } from '@/components/chips'
import Project from '@/components/project'

export default function SWE() {
  return (
    <Project
      course=' Software Engineering'
      project='B2B Fashion Ecommerce'
      description='Web application developed entirely with Django which simulates a management system used to assign domains to IP addresses. Project developed for the multimedia design and production exam and distributed with Ren'
      linkGithub='https://github.com/LeonardoBorsi/fashion-b2b'
      skills={
        <>
          <JavaChip />
          <BalsamiqChip />
          <PostgresqlChip />
        </>
      }
    />
  )
}
