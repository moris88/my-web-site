'use client'

import { createStore, Provider } from 'jotai'
import { usePathname } from 'next/navigation'
import React from 'react'

import type { Dictionary } from '@/app/dictionaries'
import { themeAtom } from '@/atoms'
import { AssistantChat, Footer, Header } from '@/components'
import type { StoreLink, Theme } from '@/types'
import { setThemeDocument } from '@/utils'

const atomStore = createStore()

interface UIWrapperProps {
	children: React.ReactNode
	dict: Dictionary
	links: StoreLink[]
}

export default function UIWrapper({
	children,
	dict,
	links,
}: Readonly<UIWrapperProps>) {
	const [inizializate, setInizializate] = React.useState<boolean>(false)
	const pathname = usePathname()

	React.useEffect(() => {
		if (!inizializate) {
			const theme = window.localStorage.getItem('theme') as Theme
			if (!theme) window.localStorage.setItem('theme', 'light')
			atomStore.set(themeAtom, theme || 'light')
			setThemeDocument(theme || 'light')
			setInizializate(true)
		}
	}, [inizializate])

	if (!inizializate) return null

	const isSocialsPage = pathname === '/socials'

	return (
		<Provider store={atomStore}>
			{!isSocialsPage && <Header dict={dict} />}
			<main className={isSocialsPage ? '' : 'min-h-[calc(100vh-144px)]'}>
				{children}
			</main>
			{!isSocialsPage && <Footer links={links} />}
			<AssistantChat dict={dict} />
		</Provider>
	)
}
