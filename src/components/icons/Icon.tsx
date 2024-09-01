'use client'

import { twMerge } from 'tailwind-merge'

interface IconProps {
  className?: string
  pathD: string
  labelIcon: string
}

function Icon({ className, labelIcon, pathD }: IconProps) {
  return (
    <svg
      className={twMerge(`bi bi-${labelIcon}`, className)}
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} />
    </svg>
  )
}

export default Icon
