import { PageInfo } from '@/components/PagesDetails'
import { getContacts, getLinks } from '@/lib/request'
import { getDictionary } from '../../dictionaries'

export default async function ContactPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const contacts = await getContacts(language)
  const links = await getLinks()
  return <PageInfo contacts={contacts} links={links} dict={dict} />
}
