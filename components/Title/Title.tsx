import React from 'react'
import cls from 'classnames'
import style from './Title.module.css'

const darkGlass = [
  'p-5',
  'bg-black',
  'bg-opacity-30',
  'backdrop-blur-lg',
  'rounded',
  'drop-shadow-lg',
]

interface TitleProps {
  text: string
}

const Title = (props: TitleProps) => {
  return (
    <div
      className={cls(['row', 'justify-center', 'items-center', 'pt-5', 'pb-5'])}
    >
      <div className={cls([...darkGlass, style.containerTitle])}>
        <h1 className={cls(['text-center', style.title, style.textGradient])}>
          {props.text}
        </h1>
      </div>
    </div>
  )
}

export default Title
