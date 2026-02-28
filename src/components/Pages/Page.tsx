'use client'

import type { Dictionary } from '@/app/dictionaries'
import { Button, ModalMessage, SectionHero } from '@/components'

interface PageCookiesProps {
	dict: Dictionary
	page: 'cookies' | 'privacy'
}

function Page({ dict, page }: Readonly<PageCookiesProps>) {
	const content = dict[page].content as unknown as Record<
		'cookies' | 'privacy',
		string[]
	>
	return (
		<SectionHero subtitle={dict[page].content.top} title={dict[page].title}>
			<section className="flex flex-col items-center justify-center gap-10 p-2">
				<ul className="flex max-w-sm flex-col gap-4 md:max-w-lg">
					{content[page].map((item, index) => (
						<li key={index} className="list-disc">
							{item}
						</li>
					))}
				</ul>
			</section>
			<section>
				<p className="text-center text-gray-500 text-sm dark:text-gray-400">
					{dict[page].content.bottom}
				</p>
			</section>
			<section className="flex flex-col items-center justify-center gap-2 md:flex-row">
				<Button variant="outline" onClick={() => window.history.back()}>
					{dict.go_back}
				</Button>
				{page === 'cookies' && (
					<Button variant="outline">
						<a href="/privacy">{dict.go_privacy}</a>
					</Button>
				)}
				{page === 'privacy' && (
					<Button variant="outline">
						<a href="/cookies">{dict.go_cookies}</a>
					</Button>
				)}
				<ModalMessage dict={dict} />
			</section>
		</SectionHero>
	)
}

export default Page
