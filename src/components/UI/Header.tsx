'use client'

import React, { Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Link } from '@heroui/link'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
  Avatar,
} from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { logout } from '@/lib'
import { generateUniqueId, isActive } from '@/utils'
import ToogleTheme from './ToogleTheme'
import { User } from '@supabase/supabase-js'

interface NavbarProps {
  dict: Dictionary
  user: User | null
}

function Header({ dict, user }: NavbarProps) {
  const pathname = usePathname()
  const route = useRouter()
  const links = [
    { name: dict.navbar.curriculum, path: '/curriculum' },
    { name: dict.navbar.experience, path: '/experience' },
    { name: dict.navbar.skills, path: '/skills' },
    { name: dict.navbar.blog, path: '/blog' },
    { name: dict.navbar.todolist, path: '/todolist' },
    { name: dict.navbar.contacts, path: '/contacts' },
    { name: dict.navbar.profile, path: '/profile' },
    { name: dict.navbar.edit_blog, path: '/edit_blog' },
  ]

  const handleClickLogout = () => {
    logout()
    route.push('/')
  }

  return (
    <Navbar
      isBlurred
      className="!rounded-lg bg-gray-300 dark:bg-slate-800"
      position="sticky"
    >
      <NavbarBrand>
        <div className="flex items-center justify-center gap-2">
          <Suspense
            fallback={<Skeleton className="flex h-7 w-7 rounded-full" />}
          >
            <img
              className='rounded-lg'
              alt="avatar"
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
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {links
          .filter(({ path }) => {
            if (!user) {
              return path !== '/edit_blog' && path !== '/profile'
            }
            return true
          })
          .map(({ name, path }) => (
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
        <NavbarMenuItem className="mt-8 flex w-full items-center justify-center" >
          {user ? (
            <Button color="primary" variant="ghost" onPress={handleClickLogout}>
              {dict.login.form.logout}
            </Button>
          ) : (
            <Button color="primary" variant="flat" onPress={() => { route.push('/login') }}>
              {dict.login.form.login}
            </Button>
          )}
        </NavbarMenuItem>
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
        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" onPress={() => { route.push('/profile') }}>
                {dict.navbar.profile}
              </DropdownItem>
              <DropdownItem key="edit_blog" onPress={() => { route.push('/edit_blog') }}>
                {dict.navbar.edit_blog}
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onPress={handleClickLogout}>
                {dict.login.form.logout}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button color="primary" variant="flat" onPress={() => { route.push('/login') }}>
            {dict.login.form.login}
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  )
}

export default Header
