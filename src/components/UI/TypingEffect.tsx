import React from 'react'
import { twMerge } from 'tailwind-merge'

type TypeTypography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface TypographyProps {
  type?: TypeTypography
  children: React.ReactNode
  className?: string
}

function GetTypography({ type = 'h1', className = '', children }: TypographyProps) {
  return React.createElement(type, { className }, children)
}

interface TypingEffectProps {
  children: React.ReactNode
  className?: string
  speed?: number
  onEnd?: () => void
  skip?: boolean
  type?: TypeTypography
}

function TypingEffect({
  children,
  className,
  speed = 500,
  onEnd,
  skip,
  type = 'h1'
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = React.useState('')

  React.useEffect(() => {
    if (typeof children !== 'string') return
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
    <GetTypography
      type={type}
      className={twMerge('font-mono', className)}
    >
      <>
        {typeof children === 'string' ? displayedText.toUpperCase() : children}
        {!skip && <span className="animate-blink">|</span>}
      </>
    </GetTypography>
  )
}

export default TypingEffect
