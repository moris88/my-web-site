'use client'

import { Divider } from '@nextui-org/divider'
import { Dictionary } from '@/app/dictionaries'
import { Article } from '@/types'
import { formatDate } from '@/utils'

interface CardBlogProps {
  article: Article
  onClick?: (_article: Article) => void
  dict: Dictionary
}

function CardBlog({
  article: { id, title, date, content, link },
  onClick,
  dict,
}: CardBlogProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.({
      id,
      title,
      date,
      content,
      link,
    })
  }
  return (
    <article
      className="w-full cursor-pointer rounded-lg bg-gray-200 p-4 text-black transition-all duration-100 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-700"
      onClick={handleOnClick}
    >
      <div className="flex min-h-20 flex-col items-start gap-y-2">
        <h2 className="line-clamp-1 select-none text-xl font-bold text-black dark:text-gray-300">
          {title}
        </h2>
        <Divider className="my-4" />
        <small className="select-none text-gray-500">
          {`${dict.blog.card.postedAt} ${formatDate(date)}`}
        </small>
      </div>
    </article>
  )
}

export default CardBlog
