'use client'
import BuzziCard from '@/components/cards/buzzi-card'
import UnifiCard from '@/components/cards/unifi-card'

export default function Education() {
  return (
    <section className='flex flex-col gap-7'>
      <div id='education' className='text-center py-5 lg:py-10'>
        <h2 className='text-4xl lg:text-5xl font-medium'>Education</h2>
      </div>
      <UnifiCard />
      <BuzziCard />
    </section>
  )
}
