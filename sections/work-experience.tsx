import FashionpoCard from '@/components/cards/work-experience/fashionpo-card'
import HucareCard from '@/components/cards/work-experience/hucare-card'
import KeylessCard from '@/components/cards/work-experience/keyless-card'
import MultidataCard from '@/components/cards/work-experience/multidata-card'
import SwarmCard from '@/components/cards/work-experience/swarm-card'
import SectionTitle from '@/components/section-title'

export default function WorkExperience() {
  return (
    <section className='flex flex-col gap-7'>
      <SectionTitle title='Work Experience' anchorId='work-experience' />
      <KeylessCard />
      <HucareCard />
      <FashionpoCard />
      <MultidataCard />
      <SwarmCard />
    </section>
  )
}
