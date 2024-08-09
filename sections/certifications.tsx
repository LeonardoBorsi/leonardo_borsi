import Cambridge from '@/components/cards/certifications/cambridge'
import GoogleMarketing from '@/components/cards/certifications/google-marketing'
import SectionTitle from '@/components/section-title'

export default function Certifications() {
  return (
    <section className='flex flex-col gap-7'>
      <SectionTitle title='Certifications' anchorId='certifications' />
      <GoogleMarketing />
      <Cambridge />
    </section>
  )
}
