import { PageInfo } from '@/components/PagesDetails'
import { getContacts } from '@/lib/request'
import { getDictionary } from '../dictionaries'

export default async function ContactPage() {
  const contacts = await getContacts()
  const dict = await getDictionary()
  return (
    <div className="container">
      <PageInfo
        contacts={dict.language === 'Italiano' ? contacts.it : contacts.en}
        dict={dict}
      />
    </div>
  )
}
