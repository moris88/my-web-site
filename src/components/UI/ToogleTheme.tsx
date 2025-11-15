'use client'

import { Switch } from '@heroui/react'
import { useStore } from 'jotai'
import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2'

import { themeAtom } from '@/atoms'
import type { Theme } from '@/types'
import { setThemeDocument } from '@/utils'

interface ToogleThemeProps {
	children?: React.ReactNode
}

function ToogleTheme({ children }: ToogleThemeProps) {
	const atomStore = useStore()
	const theme = atomStore.get(themeAtom)
	return (
		<Switch
			color="primary"
			defaultSelected={theme === 'light'}
			endContent={<HiMiniSun />}
			size="sm"
			startContent={<HiMiniMoon />}
			onChange={(e) => {
				const myTheme: Theme = e.target.checked ? 'light' : 'dark'
				atomStore.set(themeAtom, myTheme)
				setThemeDocument(myTheme)
			}}
		>
			{children}
		</Switch>
	)
}

export default ToogleTheme
