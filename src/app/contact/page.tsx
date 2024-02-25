import PageInfo from '@/components/PagesDetails/PageInfo'
import { getContact } from '@/lib/request'

export default async function ContactPage() {
  const contact = await getContact()
  return <PageInfo contact={contact} />
}
