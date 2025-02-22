import React from 'react'
import { PageContacts } from '@/components'
import { getContacts, getLinks } from '@/lib/data'
import { getDictionary } from '@/app/dictionaries'

export default async function ContactPage() {
  const dict = await getDictionary()
  const language = dict.language === 'Italiano' ? 'it' : 'en'
  const contacts = await getContacts(language)
  const links = await getLinks()
  return <PageContacts contacts={contacts} dict={dict} links={links} />
}
