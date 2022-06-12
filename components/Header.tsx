import React from 'react'
import cls from 'classnames'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={cls(['flex', 'justify-center', 'items-center'])}>
      <h1 className={cls(['text-center', style.title, style.textGradient])}>
        Jr. Web Developer MAURIZIO TOLOMEO
      </h1>
    </header>
  )
}

export default Header
