import React from 'react'
import cls from 'classnames'
import style from './Button.module.css'

interface ButtonProps {
  className?: string
  name: string
  disabled?: boolean
  icon?: React.ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = (props: ButtonProps) => {
  const { className, name, disabled, onClick, icon } = props
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick && !disabled) {
      onClick(event)
    }
  }

  return (
    <button
      className={
        className
          ? cls([
              className,
              disabled ? style.cssbuttonsdisabled : style.cssbuttons,
            ])
          : cls([disabled ? style.cssbuttonsdisabled : style.cssbuttons])
      }
      onClick={onClickHandler}
    >
      <span>
        {icon ? <>{icon}</> : <></>}
        {name}
      </span>
    </button>
  )
}

export default Button
