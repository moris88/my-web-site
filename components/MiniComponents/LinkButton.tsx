import React from 'react'
import cls from 'classnames'
import style from './LinkButton.module.css'
import Link from 'next/link'
import LogoBtn from './LogoBtn'

interface LinkButtonProps {
  className?: string
  name: string
  disabled?: boolean
  link: string
}

const LinkButton = (props: LinkButtonProps) => {
  const { className, name, disabled, link } = props
  return (
    <Link href={link}>
      <a
        className={
          className
            ? cls([
                className,
                disabled ? style.cssbuttonsdisabled : style.cssbuttons,
              ])
            : cls([disabled ? style.cssbuttonsdisabled : style.cssbuttons])
        }
      >
        <span>
          <LogoBtn />
          {name}
        </span>
      </a>
    </Link>
  )
}

export default LinkButton
