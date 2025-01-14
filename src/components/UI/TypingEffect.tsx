import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TypingEffectProps {
  children: React.ReactNode
  className?: string
  speed?: number
  onEnd?: () => void
  skip?: boolean
}

function TypingEffect({
  children,
  className,
  speed = 500,
  onEnd,
  skip,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = React.useState(``)

  React.useEffect(() => {
    if (typeof children !== `string`) return
    if (skip) return
    let index = 0
    const interval = setInterval(() => {
      if (index < children.length) {
        const char = children[index]
        index++
        setDisplayedText((prev) => prev + char)
      } else {
        onEnd?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [children, onEnd, skip, speed])

  return (
    <p className={twMerge(`font-mono text-xl`, className)}>
      {typeof children === `string` ? displayedText.toUpperCase() : children}
      {!skip && <span className="animate-blink">|</span>}
    </p>
  )
}

export default TypingEffect
