'use client'

import React, { Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from '@nextui-org/react'
import { useAtom } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { isLoginAtom } from '@/atoms'
import { logout } from '@/lib'
import { generateUniqueId, isActive } from '@/utils'
import ToogleTheme from './ToogleTheme'

interface NavbarProps {
  dict: Dictionary
}

function Header({ dict }: NavbarProps) {
  const [isAuth, setIsAuth] = useAtom(isLoginAtom)
  const pathname = usePathname()
  const route = useRouter()
  const links = [
    { name: dict.navbar.home, path: '/' },
    { name: dict.navbar.curriculum, path: '/curriculum' },
    { name: dict.navbar.skills, path: '/skills' },
    { name: dict.navbar.application, path: '/application' },
    { name: dict.navbar.blog, path: '/blog' },
    { name: dict.navbar.todolist, path: '/todolist' },
    { name: dict.navbar.contacts, path: '/contacts' },
  ]

  React.useEffect(() => {
    const cookies = document.cookie
      .split(';')
      .find((row) => row.trim().startsWith(`auth_jwt=`))

    const cookie_value = cookies ? cookies.split('=')[1] : null
    cookie_value ? setIsAuth(true) : setIsAuth(false)
  }, [setIsAuth])

  const handleClickLogout = () => {
    logout()
    setTimeout(() => {
      setIsAuth(false)
    }, 500)
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
            <Image
              alt="avatar"
              height={30}
              radius="lg"
              shadow="lg"
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
        <NavbarMenuItem className="mt-8 flex w-full items-center justify-center">
          {isAuth ? (
            <Button color="primary" variant="ghost" onClick={handleClickLogout}>
              {dict.login.form.logout}
            </Button>
          ) : (
            <Link href="/login">
              <Button color="primary" variant="flat">
                {dict.login.form.login}
              </Button>
            </Link>
          )}
        </NavbarMenuItem>
        <div className="flex w-full justify-center">
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
        {isAuth ? (
          <Button color="primary" variant="ghost" onClick={handleClickLogout}>
            {dict.login.form.logout}
          </Button>
        ) : (
          <Link href="/login">
            <Button color="primary" variant="flat">
              {dict.login.form.login}
            </Button>
          </Link>
        )}
      </NavbarContent>
      <div className="hidden lg:flex">
        <ToogleTheme />
      </div>
    </Navbar>
  )
}

export default Header
