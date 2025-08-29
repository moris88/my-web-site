'use client'

import { Divider } from '@heroui/divider'
import React from 'react'

import { Dictionary } from '@/app/dictionaries'
import { Article } from '@/types'
import { formatDate } from '@/utils'

interface CardBlogProps {
  article: Article
  onClick?: (_article: Article) => void
  dict: Dictionary
}

function CardBlog({
  article: { id, title, created_at, updated_at, content, link, image },
  onClick,
  dict,
}: CardBlogProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.({
      id,
      title,
      created_at,
      content,
      link,
      updated_at,
      image,
    })
  }
  return (
    <article
      className="w-full cursor-pointer rounded-lg bg-gray-200 p-4 text-black transition-all duration-100 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700"
      onClick={handleOnClick}
    >
      <div className="flex min-h-20 flex-col items-start gap-y-2">
        {image ? (
          <img
            alt={title}
            className="h-40 w-full rounded-lg object-cover"
            src={image}
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gray-300">
            <p className="text-4xl text-gray-500">{'No-Image'}</p>
          </div>
        )}
        <h2 className="line-clamp-1 text-xl font-bold text-black select-none dark:text-gray-300">
          {title}
        </h2>
        <p className="text-md line-clamp-2 font-medium text-black select-none dark:text-gray-300">
          {content}
        </p>
        <Divider className="my-2" />
        <small className="text-gray-500 select-none">
          {`${dict.blog.card.postedAt} ${formatDate(created_at)}`}
        </small>
      </div>
    </article>
  )
}

export default CardBlog
