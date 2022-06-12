import React from 'react'
import style from './Footer.module.css'
import cls from 'classnames'

const Footer = () => {
  return (
    <footer>
      <small className={cls([style.textGradient, style.copyright])}>
        Copyright© 2022
      </small>
    </footer>
  )
}

export default Footer
