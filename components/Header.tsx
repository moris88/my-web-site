import React from 'react'
import cls from 'classnames'
import Link from 'next/link'
import style from './Header.module.css'

const glass = [
  'bg-white',
  'bg-opacity-20',
  'backdrop-blur-lg',
  'rounded',
  'drop-shadow-lg',
]

const Header = () => {
  return (
    <header
      className={cls([
        ...glass,
        'flex',
        'justify-center',
        'items-center',
        'mb-5',
      ])}
    >
      <Link href={'/'}>
        <a className={cls([style.link])}>home</a>
      </Link>
    </header>
  )
}

export default Header
