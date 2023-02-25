import React from 'react'
import cls from 'classnames'
import 'font-awesome/css/font-awesome.min.css'
import Button from './MiniComponents/Button'
import { saveAs } from 'file-saver'
import LogoBtn from './MiniComponents/LogoBtn'
import { linkGitHub, linkLinkedin, linkTwitter } from '../utils/metadata'
import { Tooltip } from 'flowbite-react'

type LangType = 'IT' | 'EN'

const MainIndex = () => {
  const onLangClickhandler = React.useCallback(async (lang: LangType) => {
    const host = process.env.NEXT_PUBLIC_HOST
      ? `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`
      : 'https://mauriziotolomeo.vercel.app'
    const request = await fetch(`${host}/api/v1/cv?lang=${lang}`)
    if (request.status === 200) {
      const fileBlob = await request.blob()
      saveAs(fileBlob, 'cv_maurizio.tolomeo.pdf')
    } else {
      alert(`Download Error! ${request.statusText}`)
    }
  }, [])
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
      <div className="glass">
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
            <Tooltip content="Hi, nice to meet you!" animation="duration-1000">
              <img
                className={cls(['w-32', 'rounded-lg', 'shadow-lg'])}
                src="/avatar.png"
                alt="image"
                srcSet="/avatar.png"
              />
            </Tooltip>
          </div>
          <div className={cls(['col', 'md:w-2/3', 'w-full'])}>
            <div className={cls(['row'])}>
              <p className={cls(['text-sm', 'w-full', 'p-5', 'md:text-xl'])}>
                {`I'am ♂️ Maurizio Tolomeo 😉, alias`}
                <Tooltip
                  animation="duration-1000"
                  content="For friends I am MORIS!"
                >
                  <span className={cls(['link'])}>{' MORIS. '}</span>
                </Tooltip>
                {`I am a Junior web Develeoper and i work as a Frontend Dev in `}
                <a
                  className="link"
                  href="https://www.crmpartners.it/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  CRMPartners
                </a>
                {`! 🖥️ I
                      love code, it's my passion! I feel like I am a reliable, sociable, very dynamic person who tries to reach out to them
                      goals set at any cost, last but not least, eager to learn things
                      new and stimulating, routine work genuinely bores me.
                      I have always had a passion and dedication to computer science since I was a child, writing code is not
                      only a job but a passion. My hobby is videogames, especially Survivor Horror ones
                      where there is tension and fear.`}
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
          <Button
            name="download IT cv"
            onClick={() => onLangClickhandler('IT')}
            icon={<LogoBtn />}
          />
          <Button
            className={cls(['mx-3'])}
            name="download EN cv"
            disabled
            icon={<LogoBtn />}
          />
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
