'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isActive } from '@/utils/utils'

function Navbar() {
  const pathname = usePathname()
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="sticky top-0 z-50 m-1 flex select-none flex-col items-center justify-center rounded-lg bg-slate-800 py-5 md:flex-row md:justify-evenly">
      <div className="flex items-center justify-center gap-2">
        <Image
          alt="avatar"
          className="rounded-full"
          height={30}
          src="/avatar.webp"
          width={30}
        />
        <Link href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Maurizio Tolomeo
          </span>
        </Link>
      </div>
      <div className="flex gap-2">
        {links.map(({ name, path }) => (
          <Link key={name} href={path}>
            <span
              className={`${isActive(pathname, path) ? 'border-b text-gray-400' : 'text-white hover:border-b hover:text-gray-400'} transition-all duration-300 ease-in-out`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
