import React from 'react'
import style from './Footer.module.css'
import cls from 'classnames'

const Footer = () => {
  return (
    <footer>
      <small
        className={cls([
          'bg-clip-text',
          'inline-block',
          'align-middle',
          'text-transparent',
          style.textGradient,
        ])}
      >
        Copyright© 2022
      </small>
    </footer>
  )
}

// #8e2de2, #4a00e0
export default Footer
