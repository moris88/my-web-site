import { getDictionary } from '@/app/dictionaries'
import { PageContacts } from '@/components'
import { getContacts, getLinks } from '@/lib/data'

export default async function ContactPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const contacts = await getContacts(language)
	const links = await getLinks()
	return <PageContacts contacts={contacts} dict={dict} links={links} />
}
