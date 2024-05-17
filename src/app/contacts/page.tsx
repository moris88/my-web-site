import PageInfo from '@/components/PagesDetails/PageInfo'
import { getContacts } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function ContactPage() {
  const contacts = await getContacts()
  const dict = await getDictionary()
  return <PageInfo contacts={dict.language === 'Italiano' ? contacts.it : contacts.en } dict={dict} />
}
