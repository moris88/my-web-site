'use client'

import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
// import { motion } from "framer-motion"
import { useFetch } from 'usehooks-ts'
import Link from 'next/link'

export default function Home() {
  const { data, error } = useFetch<{ info: string }>('./api/info')
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <section className="">
      <div className="flex flex-col gap-1 p-1">
        <div className="rounded-lg h-96" id="title"></div>
        <div className="flex gap-2 p-5 justify-center items-center">
          <div className="item">
            <Link
              href="/skills"
              className="hover:text-gray-400 text-white transition-all ease-in-out duration-300"
            >
              <TypeAnimation
                sequence={['my Skills', 1000]}
                wrapper="p"
                speed={99}
                style={{ fontSize: '3em' }}
              />
            </Link>
          </div>
          <div className="item">
            <Link
              href="/blog"
              className="hover:text-gray-400 text-white transition-all ease-in-out duration-300"
            >
              <TypeAnimation
                sequence={['my Blog', 1000]}
                wrapper="p"
                speed={1}
                style={{ fontSize: '3em' }}
              />
            </Link>
          </div>
          <div className="item">
            <Link
              href="/contact"
              className="hover:text-gray-400 text-white transition-all ease-in-out duration-300"
            >
              <TypeAnimation
                sequence={['my Contacts', 1000]}
                wrapper="p"
                speed={99}
                style={{ fontSize: '3em' }}
              />
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
            <TypeAnimation
              sequence={['loading...', data?.info ?? '', 1000]}
              wrapper="p"
              repeat={1}
              cursor
              speed={99}
              style={{ fontSize: '1em' }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
