import GameOfLifeCard from '@/components/cards/personal-projects/game-of-life-card'
import PortfolioWebsite from '@/components/cards/personal-projects/portfolio-website'
import SectionTitle from '@/components/section-title'

export default function PersonalProjects() {
  return (
    <section className='flex flex-col gap-7'>
      <SectionTitle title='Personal Projects' anchorId='personal-projects' />
      <GameOfLifeCard />
      <PortfolioWebsite />
    </section>
  )
}
