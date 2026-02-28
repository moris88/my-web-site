import { NotFoundPage } from '@/components'
import { getDictionary } from './dictionaries'

export default async function NotFound() {
	const dict = await getDictionary()

	return <NotFoundPage dict={dict} />
}
