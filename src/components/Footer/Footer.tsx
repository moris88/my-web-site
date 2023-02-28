import React from 'react'
import style from './Footer.module.css'
import cls from 'classnames'

const Footer = () => {
  return (
    <footer className={style.myfooter}>
      <div className={cls([style.textGradient, style.copyright])}>
        Copyright© 2023
      </div>
    </footer>
  )
}

export default Footer
