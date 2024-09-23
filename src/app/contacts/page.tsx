import { PageInfo } from '@/components/PagesDetails'
import { getContacts } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function ContactPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const contacts = await getContacts(language)
  return <PageInfo contacts={contacts} dict={dict} />
}
