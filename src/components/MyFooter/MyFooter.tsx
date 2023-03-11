import React from 'react'
import style from './MyFooter.module.css'
import cls from 'classnames'
import { Footer } from 'flowbite-react'
import {
  linkGitHub,
  linkLinkedin,
  linkTelegram,
  linkTwitter,
} from '../../utils/metadata'

const MyFooter = () => {
  const getYear = () => {
    const today = new Date()
    return today.getFullYear()
  }
  return (
    <Footer className={style.container}>
      <Footer.Copyright href="/" by="Moris™" year={getYear()} />
      <Footer.LinkGroup>
        <Footer.Link className="mr-2" href={linkGitHub}>
          <i className={cls(['fa fa-github fa-2x', style.icon])}></i>
        </Footer.Link>
        <Footer.Link className="mr-2" href={linkLinkedin}>
          <i className={cls(['fa fa-linkedin fa-2x', style.icon])}></i>
        </Footer.Link>
        <Footer.Link className="mr-2" href={linkTwitter}>
          <i className={cls(['fa fa-twitter fa-2x', style.icon])}></i>
        </Footer.Link>
        <Footer.Link className="mr-2" href={linkTelegram}>
          <i className={cls(['fa fa-telegram fa-2x', style.icon])}></i>
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default MyFooter
