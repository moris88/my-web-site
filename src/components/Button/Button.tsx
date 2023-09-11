import React from 'react'
import style from './Button.module.css'

interface ButtonProps {
  onClick: () => void
  title: string
}

const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button id={style.button} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
