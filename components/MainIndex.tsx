import React from 'react'
import cls from 'classnames'
import Button from '../components/MiniComponents/Button'
import 'font-awesome/css/font-awesome.min.css'
import saveAs from 'file-saver'
// import style from './MainIndex.module.css'

const glass = [
  'bg-white',
  'bg-opacity-20',
  'backdrop-blur-lg',
  'rounded',
  'drop-shadow-lg',
]

const linkTwitter = 'https://twitter.com/moris_tolomeo'
const linkLinkedin = 'https://www.linkedin.com/in/maurizio-tolomeo/'
const linkGitHub = 'https://github.com/moris88'

type LANG = 'it' | 'en'

const MainIndex = () => {
  const onCVHandler = (lang: LANG) => {
    const host = process.env.NEXT_PUBLIC_HOST
      ? `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`
      : 'https://mauriziotolomeo.vercel.app'
    saveAs(`${host}/`, `cv_${lang}.pdf`)
  }
  return (
    <div
      className={cls([
        'component',
        'flex',
        'flex-col',
        'jusify-center',
        'pt-5',
      ])}
    >
      <div className={cls([...glass])}>
        <div
          className={cls([
            'row',
            'justify-center',
            'items-center',
            'pt-5',
            'pb-5',
            'lineaBottom',
          ])}
        >
          <div className={cls(['row'])}>
            <h2
              className={cls([
                'text-xl',
                'text-black',
                'font-extrabold',
                'p-5',
              ])}
            >
              My Description
            </h2>
          </div>
        </div>
        <div
          className={cls([
            'row',
            'md:justify-evenly',
            'justify-center',
            'items-center',
          ])}
        >
          <div className={cls(['col'])}>
            <img
              className={cls(['w-32', 'rounded-lg', 'shadow-lg'])}
              src="/avatar.png"
              alt="image"
              srcSet="/avatar.png"
            />
          </div>
          <div className={cls(['col', 'md:w-2/3', 'w-full'])}>
            <div className={cls(['row'])}>
              <p className={cls(['text-sm', 'w-full', 'p-5', 'md:text-xl'])}>
                {`I'am ♂️ Maurizio Tolomeo 😉, alias MORIS. I am a Junior web
                      Develeoper and i work as a Frontend Dev in `}
                <a
                  className="link"
                  href="https://www.crmpartners.it/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  CRMPartners
                </a>
                {`! 🖥️ I
                      love code, it's my passion!`}
              </p>
            </div>
          </div>
        </div>
        <div
          className={cls([
            'flex',
            'justify-center',
            'items-center',
            'pt-5',
            'pb-5',
            'lineaTop',
          ])}
        >
          <Button name="download IT cv" onClick={() => onCVHandler('it')} />
          <Button className={cls(['mx-3'])} name="download EN cv" disabled />
        </div>
        <div className={cls(['flex', 'justify-center', 'items-center'])}>
          <a href={linkGitHub} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-github fa-2x', 'icona'])}></i>
          </a>
          <a href={linkTwitter} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-twitter fa-2x', 'icona'])}></i>
          </a>
          <a href={linkLinkedin} target={'_blank'} rel="noreferrer">
            <i className={cls(['fa fa-linkedin fa-2x', 'icona'])}></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainIndex
