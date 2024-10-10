'use client'

import { HiArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { Dictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components'
import { Article } from '@/types'
import { formatDate } from '@/utils'

interface PageBlogProps {
  dict: Dictionary
  article: Article
}

function PageBlog({ dict, article }: PageBlogProps) {
  return (
    <>
      {article && (
        <SectionHero subtitle={article.content} title={article.title}>
          <small>{`${dict.blog.article.postedAt} ${formatDate(article.date)}`}</small>
          {article.link && (
            <Link
              className="italic decoration-black hover:underline dark:decoration-white"
              href={article.link}
            >
              {dict.blog.article.link}
            </Link>
          )}
          <Link href={'/blog'}>
            <Button className="flex gap-2" color="primary" variant="flat">
              <HiArrowLeft className="h-5 w-5" />
              {dict.blog.article.buttons.back}
            </Button>
          </Link>
        </SectionHero>
      )}
    </>
  )
}

export default PageBlog
