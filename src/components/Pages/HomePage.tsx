'use client'

import React from 'react'
import { Divider, Link, Tooltip } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { Info, Language } from '@/types'
import parse from 'html-react-parser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/navigation'
import { UniqueButton, TypingEffect } from '@/components'
import { generateUniqueId } from '@/utils'
import { twMerge } from 'tailwind-merge'

interface HomePageProps {
  dict: Dictionary
  info: Info
  language: Language
}

function HomePage({ dict, info, language }: HomePageProps) {
  const [startSubTitle, setStartSubtitle] = React.useState(true)
  const router = useRouter()

  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="hero">
        <img alt="cover" className="hero-image" src="cover.webp" />
        <div
          className={twMerge(
            'hero-content flex w-full flex-col items-center justify-center gap-4',
            '!pr-0'
          )}
        >
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
            className="select-none text-2xl text-white md:text-5xl"
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
          <UniqueButton onClick={() => router.push('/contacts')}>
            {'Contattami'}
          </UniqueButton>
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
          {info.primary_skills.map(({ link, img }) => (
            <Link key={generateUniqueId()} isExternal href={link.url}>
              <img
                alt={img.alt}
                className="h-auto w-8 rounded-xl drop-shadow-lg lg:w-32"
                src={img.src}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
