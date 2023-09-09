'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="sticky top-0 m-1 z-50 select-none flex flex-col md:flex-row md:justify-evenly justify-center items-center rounded-lg py-5 bg-slate-800">
      <div className="flex justify-center items-center gap-2">
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="avatar"
          width={30}
          height={30}
        />
        <Link href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Maurizio Tolomeo
          </span>
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/">
          <span className="hover:text-gray-400 text-white transition-all ease-in-out duration-300">
            Home
          </span>
        </Link>
        <Link href="/skills">
          <span className="hover:text-gray-400 text-white transition-all ease-in-out duration-300">
            Skills
          </span>
        </Link>
        <Link href="/blog">
          <span className="hover:text-gray-400 text-white transition-all ease-in-out duration-300">
            Blog
          </span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-gray-400 text-white transition-all ease-in-out duration-300">
            Contact
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
