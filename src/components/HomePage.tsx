'use client'

import { Image } from '@nextui-org/react'
import { Tooltip } from '@nextui-org/tooltip'
import { Dictionary } from '@/app/dictionaries'
import { Info } from '@/types'

interface HomePageProps {
  dict: Dictionary
  info: Info
}

function HomePage({ dict, info }: HomePageProps) {
  return (
    <div className="container">
      <div className="my-10 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center p-4 md:p-0">
          <Tooltip
            color="primary"
            content={dict.home.message}
            placement="bottom"
          >
            <Image
              alt="avatar"
              className="rounded-full"
              height={150}
              src="/avatar.webp"
              width={150}
            />
          </Tooltip>
        </div>
        <h1 className="select-none text-lg md:text-3xl">{info.name}</h1>
        <h2 className="select-none text-base md:text-2xl">{info.job}</h2>
        <p>---</p>
        <p>{dict.home.title}</p>
        <div className="max-w-full cursor-pointer lg:max-w-[60%]">
          <p className="col-span-3 select-none rounded-lg bg-gray-200 p-1 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5">
            {info?.description?.[dict.language === 'Italiano' ? 'it' : 'en'] ??
              ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
