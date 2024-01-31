'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HomePageProps {
  data?: {
    info: string
  }
}

const HomePage = ({ data }: HomePageProps) => {
  return (
    <section className="p-5 min-h-screen">
      <div className="flex flex-col gap-1 p-1">
        <div className="rounded-lg h-96" id="title"></div>
        <div className="flex gap-2 p-5 justify-center items-center">
          <div className="item h-5">
            <Link
              href="/skills"
              className="hover:text-xl text-white transition-all ease-in-out duration-300"
            >
              my Skills
            </Link>
          </div>
          -
          <div className="item h-5">
            <Link
              href="/blog"
              className="hover:text-xl text-white transition-all ease-in-out duration-300"
            >
              my Blog
            </Link>
          </div>
          -
          <div className="item h-5">
            <Link
              href="/contact"
              className="hover:text-xl text-white transition-all ease-in-out duration-300"
            >
              my Contacts
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-1 md:py-12 p-1">
          <div className="w-1/3 flex justify-center items-center">
            <Image
              className="rounded-full"
              src="/avatar.png"
              alt="avatar"
              width={150}
              height={150}
            />
          </div>
          <p className="md:p-5 p-1 w-2/3 select-none rounded-lg bg-slate-600">
            {data?.info ?? ''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
