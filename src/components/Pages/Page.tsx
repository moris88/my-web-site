'use client'

import type { Dictionary } from '@/app/dictionaries'
import { ModalMessage, SectionHero } from '@/components'

interface PageCookiesProps {
	dict: Dictionary
	page: 'cookies' | 'privacy'
}

function Page({ dict, page }: Readonly<PageCookiesProps>) {
	return (
		<SectionHero subtitle={dict[page].content} title={dict[page].title}>
			<div className="flex flex-col items-center justify-center gap-2">
				<ModalMessage dict={dict} />
			</div>
		</SectionHero>
	)
}

export default Page
