'use client'
import FashionpoCard from '@/components/cards/fashionpo-card'
import HucareCard from '@/components/cards/hucare-card'
import KeylessCard from '@/components/cards/keyless-card'
import MultidataCard from '@/components/cards/multidata-card'
import SwarmCard from '@/components/cards/swarm-card'

export default function WorkExperience() {
  return (
    <section className='flex flex-col gap-7'>
      <div id='work-experience' className='text-center py-5 lg:py-10'>
        <h2 className='text-4xl lg:text-5xl font-medium'>Work Experience</h2>
      </div>
      <KeylessCard />
      <HucareCard />
      <FashionpoCard />
      <MultidataCard />
      <SwarmCard />
    </section>
  )
}
