'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { Divider } from '@nextui-org/divider'
import { Dictionary } from '@/app/dictionaries'
import { Article } from '@/types/global'
import { formatDate } from '@/utils/utils'

interface CardBlogProps {
  article: Article
  onClick?: (_article: Article) => void
  dict: Dictionary
}

function CardBlog({
  article: { id, image, title, date, content, subtitle, link },
  onClick,
  dict,
}: CardBlogProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    onClick?.({
      id,
      image,
      title,
      date,
      content,
      subtitle,
      link,
    })
  }
  return (
    <article
      className="w-full cursor-pointer rounded-lg bg-slate-700 p-4 text-black transition-all duration-100 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-500"
      onClick={handleOnClick}
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="w-3/12">
          {image ? (
            <Image alt={title} height={150} src={image} width={150} />
          ) : (
            <div className="flex w-12 items-center justify-center rounded-lg border-2 border-white bg-slate-400 py-3 shadow-lg">
              <PhotoIcon className="h-6 w-6" />
            </div>
          )}
        </div>
        <div className="w-9/12">
          <h2 className="select-none text-xl font-bold text-gray-300">
            {title}
          </h2>
          <p className="line-clamp-2 select-none text-lg italic text-gray-400">
            {content}
          </p>
          <Divider className="my-4" />
          <small className="select-none text-gray-500">
            {formatDate(dict, date)}
          </small>
        </div>
      </div>
    </article>
  )
}

function CardBlogComplete({ article, dict }: { article: Article; dict: any }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className={article?.image ? 'w-3/12' : 'w-0'}>
        {article?.image ? (
          <Image
            alt={article.title}
            height={250}
            src={article.image}
            width={250}
          />
        ) : (
          <div className="bg-slate-400"></div>
        )}
      </div>
      <div className={article?.image ? 'w-9/12' : 'w-full'}>
        {article?.subtitle && (
          <h4 className="select-none text-lg font-bold text-gray-400">
            {article?.subtitle}
          </h4>
        )}
        <p className="select-none italic text-gray-400">{article?.content}</p>
        <Divider className="my-4" />
        {article?.link && (
          <Link
            className="my-4 flex items-center gap-2 text-gray-400 hover:text-blue-800"
            href={article?.link}
          >
            <LinkIcon className="h-5 w-5" /> {dict.blog.card.readMore}...
          </Link>
        )}
        <small className="select-none text-gray-400">
          {formatDate(dict, article?.date)}
        </small>
      </div>
    </div>
  )
}

const SectionCard = {
  CardBlog,
  CardBlogComplete,
}

export default SectionCard
