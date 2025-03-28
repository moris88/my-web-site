import moment from 'moment'
import { Theme } from '@/types'

export const priorityItems = ['urgent', 'high', 'medium', 'low']

export function isActive(currentPath: string, path: string): boolean {
  if (currentPath === '/' && path === '/') return true
  else if (path === '/' && currentPath !== '/') return false
  else return currentPath.startsWith(path)
}

export function formatDate(date?: string): string {
  if (!date) return ''
  return `${moment(date).format('DD/MM/YYYY')} ${moment(date).format('HH:mm')}`
}

export function generateUniqueId() {
  // Ottieni il timestamp corrente
  const timestamp = Date.now().toString(36) // Base 36 per ridurre la lunghezza

  // Genera una stringa casuale
  const randomString = Math.random().toString(36).substring(2, 10) // Random a base 36

  // Combina il timestamp e la stringa casuale per creare un ID unico
  return `${timestamp}-${randomString}`
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
