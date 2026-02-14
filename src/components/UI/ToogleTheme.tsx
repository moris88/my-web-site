'use client'

import { useStore } from 'jotai'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { themeAtom } from '@/atoms'
import type { Theme } from '@/types'
import { setThemeDocument } from '@/utils'

function ToogleTheme() {
	const atomStore = useStore()
	// Leggi il tema direttamente dall'atomo per mantenere la sincronia
	const theme = atomStore.get(themeAtom)
	const [myTheme, setMyTheme] = React.useState<Theme>(theme)

	const handleToggle = () => {
		// 1. Calcola il nuovo valore immediatamente
		const nextTheme = myTheme === 'light' ? 'dark' : 'light'

		// 2. Aggiorna lo stato locale per l'animazione UI
		setMyTheme(nextTheme)

		// 3. Aggiorna lo store globale e il documento con il valore calcolato
		atomStore.set(themeAtom, nextTheme)
		setThemeDocument(nextTheme)
	}

	return (
		<div className="flex items-center justify-center p-4">
			<button
				type="button"
				onClick={handleToggle}
				className={`relative inline-flex h-10 w-20 cursor-pointer items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${
					myTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
				}`}
				aria-label="Toggle Theme"
			>
				<div className="flex w-full items-center justify-around px-2 text-slate-500">
					<Sun
						size={16}
						className={myTheme === 'light' ? 'text-amber-500' : ''}
					/>
					<Moon
						size={16}
						className={myTheme === 'dark' ? 'text-blue-400' : ''}
					/>
				</div>

				<span
					className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
						myTheme === 'dark' ? 'translate-x-10' : 'translate-x-0'
					}`}
				>
					{myTheme === 'dark' ? (
						<Moon size={18} className="text-slate-800" />
					) : (
						<Sun size={18} className="text-amber-500" />
					)}
				</span>
			</button>
		</div>
	)
}

export default ToogleTheme
