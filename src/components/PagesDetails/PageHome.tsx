'use client'

import React from 'react'
import { Info } from '@/types/global'
import { Image, Link } from "@nextui-org/react"
import { Tooltip } from "@nextui-org/tooltip"

interface PageHomeProps {
  info: Info
  dict: any
}

export default function PageHome({ info, dict }: PageHomeProps) {
  return (
    <section className="lg:p-5 p-0">
      <div className="flex flex-col gap-1 p-1">
        <div className="w-full flex justify-center items-center">
          <Image
            radius="lg"
            src="/cover.webp"
            alt="Cover"
            className="w-full"
          />
        </div>
        <div className="my-4 flex items-center justify-center gap-2 flex-col md:flex-row">
          <div className="item h-5 px-6 py-4 md:p-0 rounded-lg md:bg-transparent bg-slate-600">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/skills"
            >
              {dict.home.links.skills}
            </Link>
          </div>
          <span className="md:inline hidden">-</span>
          <div className="item h-5 px-6 py-4 md:p-0 rounded-lg md:bg-transparent bg-slate-600">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/blog"
            >
              {dict.home.links.blog}
            </Link>
          </div>
          <span className="md:inline hidden">-</span>
          <div className="item h-5 px-6 py-4 md:p-0 rounded-lg md:bg-transparent bg-slate-600">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/contacts"
            >
              {dict.home.links.contacts}
            </Link>
          </div>
        </div>
        <div className="my-4 grid md:grid-cols-4 grid-cols-1">
          <div className="flex justify-center items-center md:p-0 p-4">
            <Tooltip content={dict.home.message} color={'secondary'}>
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
