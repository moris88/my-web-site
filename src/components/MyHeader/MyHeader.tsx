import React from 'react'
import style from './MyHeader.module.css'
import { Navbar, Tooltip } from 'flowbite-react'

const MyHeader = () => {
  return (
    <Navbar className={style.container} fluid={true} rounded={true}>
      <Navbar.Brand to="/navbars">
        <Tooltip content="Nice to meet you!" placement="right">
          <img
            src="./avatar.png"
            className="mr-3 h-6 sm:h-9 rounded-lg"
            alt="Moris Logo"
          />
        </Tooltip>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white italic hover:text-2xl transition-all cursor-pointer hover:text-[#081fb6]">
          <a href={'/'}>Maurizio Tolomeo</a>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          <span className={style.icon}>Home</span>
        </Navbar.Link>
        <Navbar.Link href="/skills">
          <span className={style.icon}>Skills</span>
        </Navbar.Link>
        <Navbar.Link href="/blog">
          <span className={style.icon}>Blog</span>
        </Navbar.Link>
        <Navbar.Link href="/contact">
          <span className={style.icon}>Contact</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyHeader
