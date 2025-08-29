'use client'

import 'aos/dist/aos.css'

import { Divider, Tooltip } from '@heroui/react'
import AOS from 'aos'
import parse from 'html-react-parser'
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Dictionary } from '@/app/dictionaries'
import { SkillItem, TypingEffect, UniqueButton } from '@/components'
import { Info, Language } from '@/types'

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
                className="block h-60 w-60 rounded-full drop-shadow-xl md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
                src="/avatar.webp"
              />
            </Tooltip>
          </div>
          <TypingEffect
            className="text-2xl text-white select-none md:text-5xl"
            skip={!startSubTitle}
            speed={200}
            type="h1"
            onEnd={() => setStartSubtitle(false)}
          >
            {info.name}
          </TypingEffect>
          <TypingEffect
            className="text-base text-white select-none md:text-3xl"
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
          <p className="italic">{dict.home.whoAmITitle}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div className="flex w-full justify-center" data-aos="fade-up">
          <div className="col-span-3 rounded-lg bg-gray-200 p-2 text-justify select-none hover:shadow-lg hover:shadow-slate-500 md:p-5 dark:bg-slate-600">
            {parse(info?.whoAmIDescription?.[language] ?? '')}
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-2">
          <Divider className="my-5 max-w-10" />
          <p className="italic">{dict.home.whatIDoTitle}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div className="flex w-full justify-center" data-aos="fade-up">
          <div className="col-span-3 rounded-lg bg-gray-200 p-2 text-justify select-none hover:shadow-lg hover:shadow-slate-500 md:p-5 dark:bg-slate-600">
            {parse(info?.whatIDoDescription?.[language] ?? '')}
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-2">
          <Divider className="my-5 max-w-10" />
          <p className="italic">{dict.home.whatISpecializeInTitle}</p>
          <Divider className="my-5 max-w-10" />
        </div>
        <div
          className="mb-10 flex flex-col items-center justify-center gap-2 lg:flex-row"
          data-aos="fade-up"
        >
          {info.primary_skills.map(({ link, img }, index) => (
            <SkillItem key={`skill-${index}`} img={img} link={link} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
