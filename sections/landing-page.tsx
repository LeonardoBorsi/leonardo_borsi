import { DownloadIcon, GithubIcon, LinkedinIcon, SendIcon } from '@/components/icons'
import { GITHUB_PROFILE, LINKEDIN_PROFILE, PAGE_ANCHORS } from '@/definitions/costants'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function LandingPage() {
  const renderMemoji = () => (
    <div>
      <div className='block dark:hidden'>
        {/* <video className='w-[250px] lg:w-[350px]' autoPlay={true} loop muted>
          <source src='/videos/memoji-light.mp4' type='video/mp4' />
        </video> */}
      </div>
      <div className='hidden dark:block'>
        {/*  <video className='w-[250px] lg:w-[350px]' autoPlay={true} loop muted>
          <source src='/videos/memoji-dark.mp4' type='video/mp4' />
        </video> */}
        {/* <img className='w-[250px] lg:w-[350px]' src='/videos/memoji-dark.gif'></img> */}
      </div>
    </div>
  )

  const renderTitles = () => (
    <div>
      <h1 className='hidden lg:block text-5xl lg:text-7xl font-medium'>Leonardo Borsi</h1>
      <h2 className='text-4xl sm:text-5xl font-thin mt-3'>Software Engineer</h2>
      <h3 className='text-3xl sm:text-4xl font-thin text-primary mt-3'>UX/UI Designer</h3>
    </div>
  )

  const renderButtons = () => (
    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-5'>
      <div className='flex gap-5'>
        <Link className='w-1/2' target='_blank' href={GITHUB_PROFILE}>
          <Button isIconOnly className='text-sm font-medium border-default-700 w-full' variant='bordered' size='lg'>
            <GithubIcon size={28} />
          </Button>
        </Link>
        <Link className='w-1/2' target='_blank' href={LINKEDIN_PROFILE}>
          <Button isIconOnly className='text-sm font-medium border-default-700 w-full' variant='bordered' size='lg'>
            <LinkedinIcon size={28} />
          </Button>
        </Link>
      </div>
      <Button className='text-base font-medium border-default-700' href='#' startContent={<DownloadIcon />} variant='bordered' size='lg'>
        Download CV
      </Button>
      <Button as={Link} color='primary' className='text-base font-medium bg-primary' href='#contacts' startContent={<SendIcon />} variant='solid' size='lg'>
        Contact Me
      </Button>
    </div>
  )

  const renderAnchors = () => (
    <div className='flex flex-col items-center lg:items-start gap-5'>
      {PAGE_ANCHORS.map((link, i) => (
        <Link key={i} className='text-[32px] font-light hover:text-primary w-fit' href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  )

  return (
    <section>
      <div className='h-screen pb-20 lg:pb-32'>
        <div className='h-full flex flex-col lg:flex-row justify-between py-10 lg:py-20 gap-10'>
          <div className='text-center lg:text-left flex flex-col justify-between space-y-28'>
            <div className='space-y-10'>
              {renderTitles()}
              <div className='hidden lg:block'>{renderButtons()}</div>
            </div>
            <div className='hidden lg:block'>{renderAnchors()}</div>
          </div>
          <div className='flex items-center justify-center lg:pr-10'>{renderMemoji()}</div>
          <div className='block lg:hidden'>{renderButtons()}</div>
        </div>
      </div>
    </section>
  )
}
