import React from 'react'
import { MyFooter } from '../MyFooter'
import { MyHeader } from '../MyHeader'
import style from './MyMain.module.css'

interface MyMainProps {
  className?: string
  children?: React.ReactNode
}

const MyMain = ({ children, className }: MyMainProps) => {
  return (
    <div className={className ?? style.container}>
      <MyHeader />
      {children}
      <MyFooter />
    </div>
  )
}

export default MyMain
