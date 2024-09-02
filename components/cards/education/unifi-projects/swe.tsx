import { BalsamiqChip, JavaChip, PostgresqlChip } from '@/components/chips'
import Project from '@/components/project'

export default function SWE() {
  return (
    <Project
      course=' Software Engineering'
      project='B2B Fashion Ecommerce'
      description='Development of the backend for a B2B clothing e-commerce application, including requirements analysis, mock-up creation, implementation of backend services using Java and PostgreSQL, and testing with JUnit.'
      linkGithub='https://github.com/LeonardoBorsi/fashion-b2b'
      linkPDF='/files/Leonardo Borsi - Relazione Progetto SWE.pdf'
      linkPDFLabel='Download Report'
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
