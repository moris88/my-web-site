import moment from 'moment'

import type { Theme } from '@/types'

export const priorityItems = ['urgent', 'high', 'medium', 'low']

export function isActive(currentPath: string, path: string): boolean {
	if (currentPath === '/' && path === '/') return true
	else if (path === '/' && currentPath !== '/') return false
	else return currentPath.startsWith(path)
}

export function formatDate(date?: string): string {
	if (!date) return ''
	return `${moment(date).format('DD/MM/YYYY HH:mm')}`
}

export function setThemeDocument(theme: Theme) {
	window.localStorage.setItem('theme', theme)
	if (theme === 'dark') document.documentElement.classList.add('dark')
	else document.documentElement.classList.remove('dark')
}

export function addAtSymbol(str: string | null, symbol: string): string {
	if (!str) return 'Not provided'
	return str.startsWith(symbol) ? str : `${symbol}${str}`
}
