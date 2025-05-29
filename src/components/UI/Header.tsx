'use client'

import React, { Suspense } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from '@heroui/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { generateUniqueId, isActive } from '@/utils'
import ToogleTheme from './ToogleTheme'

interface NavbarProps {
  dict: Dictionary
}

function Header({ dict }: Readonly<NavbarProps>) {
  const pathname = usePathname()
  const links = [
    { name: dict.navbar.curriculum, path: '/curriculum' },
    { name: dict.navbar.experience, path: '/experience' },
    { name: dict.navbar.skills, path: '/skills' },
    { name: dict.navbar.projects, path: '/projects' },
    { name: dict.navbar.blog, path: '/blog' },
    { name: dict.navbar.contacts, path: '/contacts' },
  ]

  return (
    <Navbar
      isBlurred
      className="max-h-[60px] !rounded-lg bg-gray-300 dark:bg-slate-800"
      position="sticky"
    >
      <NavbarBrand>
        <div className="flex items-center justify-center gap-2">
          <Suspense
            fallback={<Skeleton className="flex h-7 w-7 rounded-full" />}
          >
            <img
              alt="avatar"
              className="rounded-lg"
              height={30}
              src="/avatar.webp"
              width={30}
            />
          </Suspense>
          <Link href="/">
            <span className="self-center whitespace-nowrap text-base font-semibold text-black dark:text-white md:text-xl">
              Maurizio Tolomeo
            </span>
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle id="button-mobile-navbar" />
      </NavbarContent>
      <NavbarMenu className="overflow-hidden">
        {links.map(({ name, path }) => (
          <NavbarMenuItem
            key={generateUniqueId()}
            className="flex w-full items-center justify-center"
          >
            <Link href={path}>
              <div
                className={`${isActive(pathname, path) ? 'border-b text-blue-600 dark:text-gray-400' : 'text-black hover:border-b hover:text-blue-600 dark:text-white dark:hover:text-gray-400'} transition-all duration-300 ease-in-out`}
              >
                {name}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex w-full justify-center">
          <ToogleTheme>{dict.navbar.theme}</ToogleTheme>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarContent className="hidden gap-4 lg:flex" justify="end">
        {links
          .filter(({ path }) => path !== '/edit_blog' && path !== '/profile')
          .map(({ name, path }) => (
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
        <div className="hidden lg:flex">
          <ToogleTheme />
        </div>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
