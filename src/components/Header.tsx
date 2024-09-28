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
import ToogleTheme from './ToogleTheme'

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
    { name: dict.navbar.todolist, path: '/todolist' },
    { name: dict.navbar.contacts, path: '/contacts' },
  ]

  return (
    <Navbar
      isBlurred
      className="!rounded-lg bg-gray-300 dark:bg-slate-800"
      position="sticky"
    >
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
            <span className="self-center whitespace-nowrap text-base font-semibold text-black dark:text-white md:text-xl">
              Maurizio Tolomeo
            </span>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="lg:hidden" justify="end">
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
                className={`${isActive(pathname, path) ? 'border-b text-blue-600 dark:text-gray-400' : 'text-black hover:border-b hover:text-blue-600 dark:text-white dark:hover:text-gray-400'} transition-all duration-300 ease-in-out`}
              >
                {name}
              </span>
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="mt-8 flex w-full justify-center">
          <ToogleTheme>{dict.navbar.theme}</ToogleTheme>
        </div>
      </NavbarMenu>
      <NavbarContent className="hidden gap-4 lg:flex" justify="end">
        {links.map(({ name, path }) => (
          <NavbarItem key={generateUniqueId()}>
            <Link href={path}>
              <span
                className={`${isActive(pathname, path) ? 'border-b border-b-blue-600 text-blue-600 dark:border-b-gray-400 dark:text-gray-400' : 'text-black hover:border-b hover:border-b-blue-600 hover:text-blue-600 dark:text-white dark:hover:border-b-gray-400 dark:hover:text-gray-400'} transition-all duration-300 ease-in-out`}
              >
                {name}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <div className="hidden lg:flex">
        <ToogleTheme />
      </div>
    </Navbar>
  )
}

export default Header
