import BuzziCard from '@/components/cards/education/buzzi-card'
import UnifiCard from '@/components/cards/education/unifi-card'
import SectionTitle from '@/components/section-title'

export default function Education() {
  return (
    <section className='flex flex-col gap-7'>
      <SectionTitle title='Education' anchorId='education' />
      <UnifiCard />
      <BuzziCard />
    </section>
  )
}
