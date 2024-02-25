export function isActive(currentPath: string, path: string): boolean {
  if (currentPath === '/' && path === '/') return true
  else if (path === '/' && currentPath !== '/') return false
  else return currentPath.startsWith(path)
}

export function getLevel(level: number, type: 'soft' | 'hard'): string {
  if (type === 'soft') {
    switch (level) {
      case 6:
        return 'Adequate'
      case 7:
      case 8:
        return 'Good'
      case 9:
      case 10:
        return 'Optimal'
      default:
        return 'Bad'
    }
  }
  switch (level) {
    case 6:
      return 'Basic'
    case 7:
    case 8:
      return 'Intermediate'
    case 9:
    case 10:
      return 'Advanced'
    default:
      return 'Unknown'
  }
}
