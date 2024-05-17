import moment from 'moment'

export function isActive(currentPath: string, path: string): boolean {
  if (currentPath === '/' && path === '/') return true
  else if (path === '/' && currentPath !== '/') return false
  else return currentPath.startsWith(path)
}

export function getLevel(
  level: number,
  type: 'soft' | 'hard',
  dict: any
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

export function truncateString(string: string, length: number): string {
  if (string.length > length) return `${string.substring(0, length)}...`
  return string
}

export function formatDate(dict: any, date?: string): string {
  if (!date) return ''
  return `${dict.blog.card.posted} ${moment(date).format('DD/MM/YYYY')} at ${moment(date).format('HH:mm')}`
}
