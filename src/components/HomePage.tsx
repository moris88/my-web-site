'use client'

import { Suspense } from 'react'
import React from 'react'
import { Divider, Image } from '@nextui-org/react'
import { Skeleton, Tooltip } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { Info, Language } from '@/types'
import TypingEffect from './TypingEffect'

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
            <Suspense
              fallback={<Skeleton className="flex h-36 w-36 rounded-full" />}
            >
              <Image
                alt="avatar"
                className="rounded-full"
                height={150}
                src="/avatar.webp"
                width={150}
              />
            </Suspense>
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
        <p>{dict.home.title}</p>
        <div className="max-w-full lg:max-w-[60%]">
          <p className="col-span-3 select-none rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
            {info?.description?.[language] ?? ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
