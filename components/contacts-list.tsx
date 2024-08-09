import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from '@/components/icons'
import { EMAIL, GITHUB_PROFILE, LINKEDIN_PROFILE, PHONE } from '@/definitions/costants'
import Link from 'next/link'

export default function ContactsList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <Link target='_blank' href={LINKEDIN_PROFILE}>
        <div className='flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary text-lg font-semibold'>
          <LinkedinIcon size={28} />
          <span>Leonardo Borsi</span>
        </div>
      </Link>

      <Link target='_blank' href={GITHUB_PROFILE}>
        <div className='flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary text-lg font-semibold'>
          <GithubIcon size={28} />
          <span>github.com/LeonardoBorsi</span>
        </div>
      </Link>

      <a className='block sm:hidden' href={`tel:${PHONE}`}>
        <div className='flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary text-lg font-semibold'>
          <PhoneIcon size={24} />
          <span>{PHONE}</span>
        </div>
      </a>
      <div className='hidden sm:flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white text-lg font-semibold'>
        <PhoneIcon size={24} />
        <span>{PHONE}</span>
      </div>

      <a className='block sm:hidden' href={`mailto:${EMAIL}`}>
        <div className='flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary text-lg font-semibold'>
          <MailIcon size={24} />
          <span>{EMAIL}</span>
        </div>
      </a>
      <div className='hidden sm:flex items-center gap-3 h-12 px-6 text-gray-900 dark:text-white text-lg font-semibold'>
        <MailIcon size={24} />
        <span>{EMAIL}</span>
      </div>
    </div>
  )
}
