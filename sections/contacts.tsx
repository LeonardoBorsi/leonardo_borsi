import { ContactForm } from '@/components/contact-form'
import ContactsList from '@/components/contacts-list'
import SectionTitle from '@/components/section-title'

export default function Contacts() {
  return (
    <section className='flex flex-col gap-7 max-w-screen-sm sm:mx-auto'>
      <SectionTitle title='Contacts' anchorId='contacts' />
      <ContactsList />
      <ContactForm />
    </section>
  )
}
