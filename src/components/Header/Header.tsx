import React from 'react'
import cls from 'classnames'
import Link from 'next/link'
import style from './Header.module.css'

const Header = () => {
  return (
    <header
      className={cls([
        'glass',
        'flex',
        'justify-center',
        'items-center',
        'mb-5',
        'gap-4',
        'shadow-md shadow-black'
      ])}
    >
      <Link href={'/'} className={cls([style.link])}>home</Link>
      <Link href={'/skills'} className={cls([style.link])}>skills</Link>
      <Link href={'/contacts'} className={cls([style.link])}>contacts</Link>
    </header>
  )
}

export default Header
