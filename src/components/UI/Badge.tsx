import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  color: 'green' | 'red' | 'orange' | 'yellow'
}

function Badge({ children, color, className }: BadgeProps) {
  const mapColor = {
    green: 'bg-green-100 text-green-800 border border-green-800 dark:bg-green-600',
    red: 'bg-red-100 text-red-800 border border-red-800 dark:bg-red-600',
    orange: 'bg-orange-100 text-orange-800 border border-orange-800 dark:bg-orange-600',
    yellow: 'bg-yellow-100 text-yellow-800 border border-yellow-800 dark:bg-yellow-600'
  }
  const safeClassName = typeof className === 'string' ? className : ''
  const colorClass = mapColor[color] || 'bg-white text-gray-600 border border-gray-600 dark:bg-gray-200'
  return <span className={twMerge(colorClass, 'px-2 py-1 rounded-full inline', safeClassName)}>{children}</span>
}

export default Badge
