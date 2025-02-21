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
        <img alt="cover" className="hero-image" src="cover.webp" />
        <div className="hero-content flex flex-col items-center justify-center gap-4 p-0 md:p-32">
          <div
            className="flex items-center justify-center p-4 md:p-0"
            data-aos="fade-up"
          >
            <Tooltip
              color="default"
              content={dict.home.message}
              placement="top"
            >
              <img
                alt="avatar"
                className="block h-60 w-60 rounded-full drop-shadow-xl md:h-[500px] md:w-[500px]"
                src="/avatar.webp"
              />
            </Tooltip>
          </div>
          <TypingEffect
            className="select-none text-lg text-white md:text-5xl"
            skip={!startSubTitle}
            speed={200}
            type="h1"
            onEnd={() => setStartSubtitle(false)}
          >
            {info.name}
          </TypingEffect>
          <TypingEffect
            className="select-none text-base text-white md:text-3xl"
            skip={startSubTitle}
            speed={200}
            type="h2"
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
        <div className="flex w-full justify-center" data-aos="fade-up">
          <div className="col-span-3 select-none rounded-lg bg-gray-200 p-2 text-justify hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
            {parse(info?.description?.[language] ?? '')}
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-2">
          <Divider className="my-5 max-w-10" />
          <p className="italic">{dict.home.subtitle}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div
          className="mb-10 flex flex-row items-center justify-center gap-2"
          data-aos="fade-up"
        >
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
              className="h-8 w-12 rounded-lg drop-shadow-lg lg:h-32 lg:w-40"
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
