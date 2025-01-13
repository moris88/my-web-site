import moment from 'moment'
import { Theme } from '@/types'

export function isActive(currentPath: string, path: string): boolean {
  if (currentPath === '/' && path === '/') return true
  else if (path === '/' && currentPath !== '/') return false
  else return currentPath.startsWith(path)
}

export function getLevel(
  level: number,
  type: 'soft' | 'hard',
  dict: any,
): string {
  if (type === 'soft') {
    switch (level) {
      case 6:
        return dict.skills.card.adequate
      case 7:
      case 8:
        return dict.skills.card.good
      case 9:
      case 10:
        return dict.skills.card.optimal
      default:
        return dict.skills.card.bad
    }
  }
  switch (level) {
    case 6:
      return dict.skills.card.basic
    case 7:
    case 8:
      return dict.skills.card.intermediate
    case 9:
    case 10:
      return dict.skills.card.advanced
    default:
      return dict.skills.card.unknown
  }
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

export function isTaskOverdue(dueDate: string | null) {
  if (!dueDate) return false
  return moment().isAfter(dueDate)
}

export function addAtSymbol(str: string | null, symbol: string): string {
  if (!str) return 'Not provided'
  return str.startsWith(symbol) ? str : `${symbol}${str}`
}
