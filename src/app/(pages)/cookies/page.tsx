import { getDictionary } from '@/app/dictionaries'
import { Page } from '@/components'

export default async function SkillsPage() {
	const dict = await getDictionary()
	return <Page dict={dict} page="cookies" />
}
