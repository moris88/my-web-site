'use server'

import MyInfo from '@/components/MyInfo'
import { getContact } from '@/data/data'
import { Contact } from '@/utils/types'

export default async function ContactPage() {
  const contact = await getContact().then((data) => {
    return data as unknown as { contact: Contact }
  })
  return <MyInfo data={contact} />
}
