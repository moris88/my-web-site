'use client'

import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi2'
import { Button, ButtonGroup } from '@heroui/react'
import { motion } from 'framer-motion'
import { Dictionary } from '@/app/dictionaries'
import { ButtonsGroupSocial, ModalMessage } from '@/components/UI'
import { Contact, StoreLink } from '@/types'
import Link from 'next/link'

interface PageInfoProps {
  contacts: Contact
  links: StoreLink[]
  dict: Dictionary
}

export default function PageInfo({ contacts, links, dict }: PageInfoProps) {
  const [storeLink, setStoreLink] = React.useState<StoreLink | null>(null)
  const iconMap: Record<string, JSX.Element> = {
    facebook: <FaFacebook className="h-6 w-6" />,
    github: <FaGithub className="h-6 w-6" />,
    linkedin: <FaLinkedin className="h-6 w-6" />,
  }

  const linkMap = links.reduce(
    (acc, link) => {
      acc[link.name.toLowerCase()] = link
      return acc
    },
    {} as Record<string, (typeof links)[0]>,
  )

  return (
    <div className='min-h-[calc(100vh-128px)] flex flex-col items-center justify-center'>
      <h3 className="w-full select-none text-center py-4 text-xl">
        <span className="flex items-center justify-center gap-1">
          <HiIdentification className="h-5 w-5" />
          <b>{dict.contacts.social}</b>
        </span>
      </h3>
      {contacts && (
        <div className="w-full flex flex-col items-center justify-around gap-4 md:flex-row md:my-4 my-4  bg-gray-200 dark:bg-slate-700">
          <motion.div
            className='flex w-full md:w-1/2 flex-col gap-4 items-center justify-center p-14'
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: -50 }}
            transition={{
              duration: 2,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                alt="avatar"
                className="block rounded-full drop-shadow-xl w-24 h-24 md:w-[200px] md:h-[200px]"
                src="/avatar.webp"
              />
              <div>
                <p className="font-bold text-xl">{contacts?.firstName + ' ' + contacts?.lastName}</p>
                <p className="font-semibold text-lg text-gray-400 italic">{contacts?.job ?? ''}</p>
              </div>
              <Link
                className="hover:text-primary italic"
                href={`mailto:${contacts?.email ?? ''}`}
              >
                {contacts?.email ?? ''}
              </Link>
            </div>
            <div className="flex w-full justify-center">
              <ButtonGroup className="sm:flex flex-row justify-center w-full hidden">
                {contacts.links.map((button) => {
                  const buttonLower = button.toLowerCase()
                  const storeLink = linkMap[buttonLower]
                  return (
                    <Button
                      key={buttonLower}
                      color="primary"
                      variant="flat"
                      onPress={() => (
                        storeLink && setStoreLink(storeLink)
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {iconMap[buttonLower]}
                        {
                          dict.contacts.buttons[
                          button as keyof typeof dict.contacts.buttons
                          ] as string
                        }
                      </span>
                    </Button>
                  )
                })}
              </ButtonGroup>
              <div className="sm:hidden w-full flex flex-col gap-2 justify-start">
                {contacts.links.map((button) => {
                  const buttonLower = button.toLowerCase()
                  const storeLink = linkMap[buttonLower]
                  return (
                    <Button
                      key={buttonLower}
                      color="primary"
                      variant="flat"
                      onPress={() => (
                        storeLink && setStoreLink(storeLink)
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {iconMap[buttonLower]}
                        {
                          dict.contacts.buttons[
                          button as keyof typeof dict.contacts.buttons
                          ] as string
                        }
                      </span>
                    </Button>
                  )
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-14"
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 50 }}
            transition={{
              duration: 2,
            }}
          >
            <ModalMessage className="flex flex-col items-center justify-center gap-2" dict={dict} modal={false} />
          </motion.div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <ButtonsGroupSocial
          dict={dict}
          setStoreLink={setStoreLink}
          storeLink={storeLink}
        />
      </div>
    </div>
  )
}
