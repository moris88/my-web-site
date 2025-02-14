'use client'

import React from 'react'
import { Divider } from '@heroui/react'
import { Tooltip } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { Info, Language } from '@/types'
import TypingEffect from '../UI/TypingEffect'
import parse from 'html-react-parser'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface HomePageProps {
  dict: Dictionary
  info: Info
  language: Language
}

function HomePage({ dict, info, language }: HomePageProps) {
  const [startSubTitle, setStartSubtitle] = React.useState(true)

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="hero">
        <img className="hero-image" src="cover.webp" alt="cover" />
        <div className="hero-content md:p-32 p-0 flex flex-col items-center justify-center gap-4">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center p-4 md:p-0"
          >
            <Tooltip
              color="primary"
              content={dict.home.message}
              placement="bottom"
            >
              <img
                alt="avatar"
                className="block rounded-full drop-shadow-xl"
                height={150}
                src="/avatar.webp"
                width={150}
              />
            </Tooltip>
          </div>
          <TypingEffect
            type='h1'
            className="select-none text-lg md:text-5xl text-white"
            skip={!startSubTitle}
            speed={200}
            onEnd={() => setStartSubtitle(false)}
          >
            {info.name}
          </TypingEffect>
          <TypingEffect
            type='h2'
            className="select-none text-base md:text-3xl text-white"
            skip={startSubTitle}
            speed={200}
          >
            {info.job}
          </TypingEffect>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="my-10 flex flex-col items-center justify-center gap-2">
          <Divider className="my-5 max-w-10" />
          <p className="italic">{dict.home.title}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div data-aos="fade-up"
          className="flex w-full justify-center">
          <div className="col-span-3 select-none rounded-lg bg-gray-200 p-2 text-justify hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
            {parse(info?.description?.[language] ?? '')}
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-2">
          <Divider className="my-5 max-w-10" />
          <p className="italic">{dict.home.subtitle}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div data-aos="fade-up" className='flex flex-row items-center justify-center gap-2 mb-10'>
          {[
            '/react-logo.webp',
            '/next-js-logo.webp',
            '/tailwindcss-logo.webp',
            '/javascript-logo.webp',
            '/typescript-logo.webp',
            '/node-js-logo.webp',
          ].map((item) => (
            <img
              key={item}
              alt={item}
              className="rounded-lg drop-shadow-lg lg:w-40 lg:h-32 w-12 h-8"
              height={100}
              src={item}
              width={100}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
