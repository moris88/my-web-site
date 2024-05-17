'use client'

import { Image, Link } from '@nextui-org/react'
import { Tooltip } from '@nextui-org/tooltip'
import { Info } from '@/types/global'

interface PageHomeProps {
  info: Info
  dict: any
}

export default function PageHome({ info, dict }: PageHomeProps) {
  return (
    <section className="p-0 lg:p-5">
      <div className="flex flex-col gap-1 p-1">
        <div className="flex w-full items-center justify-center">
          <Image alt="Cover" className="w-full" radius="lg" src="/cover.webp" />
        </div>
        <div className="my-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="item h-5 rounded-lg bg-slate-600 px-6 py-4 md:bg-transparent md:p-0">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/skills"
            >
              {dict.home.links.skills}
            </Link>
          </div>
          <span className="hidden md:inline">-</span>
          <div className="item h-5 rounded-lg bg-slate-600 px-6 py-4 md:bg-transparent md:p-0">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/blog"
            >
              {dict.home.links.blog}
            </Link>
          </div>
          <span className="hidden md:inline">-</span>
          <div className="item h-5 rounded-lg bg-slate-600 px-6 py-4 md:bg-transparent md:p-0">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/contacts"
            >
              {dict.home.links.contacts}
            </Link>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 md:grid-cols-4">
          <div className="flex items-center justify-center p-4 md:p-0">
            <Tooltip color={'secondary'} content={dict.home.message}>
              <Image
                alt="avatar"
                className="rounded-full"
                height={150}
                src="/avatar.webp"
                width={150}
              />
            </Tooltip>
          </div>
          <p className="col-span-3 select-none rounded-lg bg-slate-600 p-1 md:p-5">
            {info?.description?.[dict.language === 'Italiano' ? 'it' : 'en'] ??
              ''}
          </p>
        </div>
      </div>
    </section>
  )
}
