import { DownloadIcon, GithubIcon, LinkedinIcon, SendIcon } from '@/components/icons'
import { FULLNAME, GITHUB_PROFILE, LINKEDIN_PROFILE, MAIN_JOB_TITLE, MEMOJI_SIZE, SECONDARY_JOB_TITLE } from '@/definitions/costants'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <section className='h-screen pb-20 lg:pb-32 '>
      <div className='h-full flex flex-col justify-between items-center gap-5'>
        <div className='space-y-2 pt-5 lg:pt-0 text-center'>
          <h1 className='hidden lg:block text-5xl lg:text-7xl font-medium'>{FULLNAME}</h1>
          <h2 className='text-4xl sm:text-5xl font-thin mt-3'>{MAIN_JOB_TITLE}</h2>
          <h3 className='text-3xl sm:text-4xl font-thin text-primary mt-3'>{SECONDARY_JOB_TITLE}</h3>
        </div>
        <div>
          <div className='block dark:hidden'>
            <img className='rounded-full' src='/images/memoji-light.jpeg' style={{ width: MEMOJI_SIZE, height: MEMOJI_SIZE }} />
          </div>
          <div className='hidden dark:block'>
            <img className='rounded-full' src='/images/memoji-dark.jpeg' style={{ width: MEMOJI_SIZE, height: MEMOJI_SIZE }} />
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row justify-center gap-3'>
          <div className='flex gap-3'>
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
          <Button
            as={Link}
            className='text-base font-medium border-default-700'
            href='/files/Leonardo Borsi - CV.pdf'
            startContent={<DownloadIcon />}
            variant='bordered'
            size='lg'
            target='_blank'
          >
            Download CV
          </Button>
          <Button as={Link} color='primary' className='text-base font-medium bg-primary' href='#contacts' startContent={<SendIcon />} variant='solid' size='lg'>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
