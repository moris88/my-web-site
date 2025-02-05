'use client'

import React from 'react'
import { Divider, Image } from '@heroui/react'
import { Tooltip } from '@heroui/react'
import { motion } from 'framer-motion'
import { Dictionary } from '@/app/dictionaries'
import { Info, Language } from '@/types'
import TypingEffect from '../UI/TypingEffect'
import parse from 'html-react-parser'
interface HomePageProps {
  dict: Dictionary
  info: Info
  language: Language
}

function HomePage({ dict, info, language }: HomePageProps) {
  const [startSubTitle, setStartSubtitle] = React.useState(true)
  return (
    <div className="container">
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center p-4 md:p-0">
          <Tooltip
            color="primary"
            content={dict.home.message}
            placement="bottom"
          >
            <motion.div
              animate={{ translateY: 0, scale: 1, rotate: 0 }}
              initial={{ translateY: -1000, scale: 0, rotate: 180 }}
              transition={{
                duration: 1,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Image
                alt="avatar"
                className="block rounded-full"
                height={150}
                src="/avatar.webp"
                width={150}
              />
            </motion.div>
          </Tooltip>
        </div>
        <TypingEffect
          className="select-none text-lg md:text-3xl"
          skip={!startSubTitle}
          speed={200}
          onEnd={() => setStartSubtitle(false)}
        >
          {info.name}
        </TypingEffect>
        <TypingEffect
          className="select-none text-base md:text-2xl"
          skip={startSubTitle}
          speed={200}
        >
          {info.job}
        </TypingEffect>
        <div className="flex w-full justify-center">
          <Divider className="my-5 max-w-10" />
        </div>
        <p className="italic">{dict.home.title}</p>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-full lg:max-w-[60%]"
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="flex w-full justify-center">
            <p className="col-span-3 select-none rounded-lg bg-gray-200 p-1 text-justify hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
              {parse(info?.description?.[language] ?? '')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage
