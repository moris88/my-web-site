/* eslint-disable @next/next/no-img-element */
import React from 'react'
import cls from 'classnames'
import 'font-awesome/css/font-awesome.min.css'
import Button from './MiniComponents/Button'
import LogoBtn from './MiniComponents/LogoBtn'
import { Tooltip } from 'flowbite-react'
import Link from 'next/link'
import Links from './Links/Links'

const MainIndex = () => {
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
            <p
              className={cls([
                'text-4xl',
                'hover:text-6xl',
                'font-extrabold',
                'transition-all',
                'ease-in-out',
                'text-[#4a00e0]',
                'cursor-pointer',
                'duration-1000',
                'p-5',
              ])}
            >
              <Tooltip
                animation="duration-1000"
                content="For friends I am MORIS!"
              >
                {'WEB DEVELOPER MAURIZIO TOLOMEO'}
              </Tooltip>
            </p>
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
                <span className="link">{' MORIS. '}</span>
                {`I am a Junior web Develeoper and i work as a Frontend Dev in `}
                <Link
                  className="link"
                  href="https://www.crmpartners.it/"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  CRMPartners
                </Link>
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
            className={cls(['mx-3'])}
            name="my contacts"
            onClick={() => window.location.href = `/contacts`}
            icon={<LogoBtn />}
          />
        </div>
        <Links />
      </div>
    </div>
  )
}

export default MainIndex
