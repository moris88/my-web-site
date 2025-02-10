'use client'

import { HiArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { SectionHero } from '@/components/UI'
import { Article } from '@/types'
import { formatDate } from '@/utils'
import { useRouter } from 'next/navigation'

interface PageBlogProps {
  dict: Dictionary
  article: Article
}

function PageBlog({ dict, article }: PageBlogProps) {
  const router = useRouter()
  return (
    <>
      {article && (
        <SectionHero subtitle={article.content} title={article.title}>
          <small>{`${dict.blog.article.postedAt} ${formatDate(article.created_at)}`}</small>
          {article.link && (
            <Link
              className="italic decoration-black hover:underline dark:decoration-white"
              href={article.link}
            >
              {dict.blog.article.link}
            </Link>
          )}
          <div className="flex justify-end gap-2">
            <Button className="flex gap-2" color="primary" variant="flat" onPress={() => router.back()}>
              <HiArrowLeft className="h-5 w-5" />
              {dict.blog.article.buttons.back}
            </Button>
          </div>
        </SectionHero>
      )}
    </>
  )
}

export default PageBlog
