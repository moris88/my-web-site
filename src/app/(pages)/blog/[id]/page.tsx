import { PageArticle } from '@/components'

import { getDictionary } from '../../../dictionaries'

export default async function BlogPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>
}>) {
	const { id } = await params
	const dict = await getDictionary()
	const language = dict.language === 'Italiano' ? 'it' : 'en'
	return <PageArticle language={language} id={id} dict={dict} />
}
