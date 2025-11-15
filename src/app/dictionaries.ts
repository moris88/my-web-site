import { cookies } from 'next/headers'

const dictionaries = {
	en: () => import('./dictionaries/en').then((module) => module.default),
	it: () => import('./dictionaries/it').then((module) => module.default),
}

export const getDictionary = async () => {
	const locale = (await cookies()).get('locale')?.value.split('-')[0] || 'it'
	return dictionaries[locale as keyof typeof dictionaries]()
}

export type Dictionary = ReturnType<typeof getDictionary> extends Promise<
	infer T
>
	? T
	: never
