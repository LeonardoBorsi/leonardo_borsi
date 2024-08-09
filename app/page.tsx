import Certifications from '@/sections/certifications'
import Contacts from '@/sections/contacts'
import Education from '@/sections/education'
import LandingPage from '@/sections/landing-page'
import WorkExperience from '@/sections/work-experience'

export default function Home() {
  return (
    <div className='pb-32'>
      <LandingPage />
      <div className='space-y-10 lg:space-y-32'>
        <WorkExperience />
        <Education />
        <Certifications />
        <Contacts />
      </div>
    </div>
  )
}
