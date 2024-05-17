'use client'


import { usePathname } from 'next/navigation'
import { isActive } from '@/utils/utils'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import { Image } from "@nextui-org/image"
import { Link } from "@nextui-org/link"

interface NavbarProps {
  dict: any
}

function Header({ dict }: NavbarProps) {
  const pathname = usePathname()
  const links = [
    { name: dict.navbar.home, path: '/' },
    { name: dict.navbar.skills, path: '/skills' },
    { name: dict.navbar.portfolio, path: '/portfolio' },
    { name: dict.navbar.blog, path: '/blog' },
    { name: dict.navbar.contacts, path: '/contacts' },
  ]

  return (
    <Navbar position='sticky' isBlurred className="bg-slate-800 !rounded-lg">
      <NavbarBrand>
        <div className="flex items-center justify-center gap-2">
          <Image
            alt="avatar"
            shadow='lg'
            radius='lg'
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
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {links.map(({ name, path }, index) => (
          <NavbarItem key={`link-${name}-${index}`}>
            <Link href={path}>
              <span
                className={`${isActive(pathname, path) ? 'border-b text-gray-400' : 'text-white hover:border-b hover:text-gray-400'} transition-all duration-300 ease-in-out`}
              >
                {name}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export default Header
