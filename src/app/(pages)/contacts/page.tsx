import type { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries'
import { PageContacts } from '@/components'
import { getContacts, getLinks } from '@/lib/data'

export async function generateMetadata(): Promise<Metadata> {
	const dict = await getDictionary()
	return {
		title: `${dict.contacts.title} | Maurizio Tolomeo`,
		description: dict.contacts.subtitle,
		alternates: {
			canonical: '/contacts',
		},
		openGraph: {
			title: `${dict.contacts.title} | Maurizio Tolomeo`,
			description: dict.contacts.subtitle,
			url: '/contacts',
			type: 'website',
		},
	}
}

export default async function ContactPage() {
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	const contacts = await getContacts(language)
	const links = await getLinks()
	return <PageContacts contacts={contacts} dict={dict} links={links} />
}
