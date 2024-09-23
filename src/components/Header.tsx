'use client'

import { usePathname } from 'next/navigation'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { generateUniqueId, isActive } from '@/utils'

interface NavbarProps {
  dict: Dictionary
}

function Header({ dict }: NavbarProps) {
  const pathname = usePathname()
  const links = [
    { name: dict.navbar.home, path: '/' },
    { name: dict.navbar.curriculum, path: '/curriculum' },
    { name: dict.navbar.skills, path: '/skills' },
    { name: dict.navbar.application, path: '/application' },
    { name: dict.navbar.blog, path: '/blog' },
    { name: dict.navbar.contacts, path: '/contacts' },
  ]

  return (
    <Navbar isBlurred className="!rounded-lg bg-slate-800" position="sticky">
      <NavbarBrand>
        <div className="flex items-center justify-center gap-2">
          <Image
            alt="avatar"
            height={30}
            radius="lg"
            shadow="lg"
            src="/avatar.webp"
            width={30}
          />
          <Link href="/">
            <span className="self-center whitespace-nowrap text-base font-semibold text-white md:text-xl">
              Maurizio Tolomeo
            </span>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {links.map(({ name, path }) => (
          <NavbarMenuItem
            key={generateUniqueId()}
            className="flex w-full items-center justify-center"
          >
            <Link href={path}>
              <span
                className={`${isActive(pathname, path) ? 'border-b text-gray-400' : 'text-white hover:border-b hover:text-gray-400'} transition-all duration-300 ease-in-out`}
              >
                {name}
              </span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {links.map(({ name, path }) => (
          <NavbarItem key={generateUniqueId()}>
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
