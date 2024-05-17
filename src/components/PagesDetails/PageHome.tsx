'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Spinner } from 'flowbite-react'
import { Info } from '@/types/global'

interface PageHomeProps {
  info: Info
  dict: any
}

export default function PageHome({ info, dict }: PageHomeProps) {
  console.log(dict)
  return (
    <section className="p-5">
      <div className="flex flex-col gap-1 p-1">
        <div className="h-96 rounded-lg" id="div-screen"></div>
        <div className="flex items-center justify-center gap-2 p-5">
          <div className="item h-5">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/skills"
            >
              {dict.home.links.skills}
            </Link>
          </div>
          -
          <div className="item h-5">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/blog"
            >
              {dict.home.links.blog}
            </Link>
          </div>
          -
          <div className="item h-5">
            <Link
              className="text-white transition-all duration-300 ease-in-out hover:text-xl"
              href="/contact"
            >
              {dict.home.links.contacts}
            </Link>
          </div>
        </div>
        <div className="mb-12 flex flex-col items-center justify-center gap-1 p-1 md:flex-row md:justify-between md:py-12">
          <div className="flex w-1/3 items-center justify-center">
            <React.Suspense
              fallback={<Spinner aria-label="spinner" color="info" />}
            >
              <Image
                alt="avatar"
                className="rounded-full"
                height={150}
                src="/avatar.webp"
                width={150}
              />
            </React.Suspense>
          </div>
          <p className="w-2/3 select-none rounded-lg bg-slate-600 p-1 md:p-5">
            {info?.description?.[dict.language === 'Italiano' ? 'it' : 'en'] ?? ''}
          </p>
        </div>
      </div>
    </section>
  )
}
