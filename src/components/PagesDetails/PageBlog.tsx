'use client'

import React from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import { Button, Link } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { Comments, SectionHero } from '@/components'
import { Article, Comment } from '@/types'
import { formatDate } from '@/utils'
import { useRouter } from 'next/navigation'

interface PageBlogProps {
  dict: Dictionary
  article: Article
  comments: Comment[]
}

function PageBlog({ dict, article, comments }: PageBlogProps) {
  const router = useRouter()
  return (
    <>
      {article && (
        <SectionHero
          image={article.image}
          subtitle={article.content}
          title={article.title}
        >
          <div className="flex flex-col gap-2 md:flex-row">
            <small>{`${dict.blog.article.postedAt} ${formatDate(article.created_at)}`}</small>
            <small>{`${dict.blog.article.editedAt} ${formatDate(article.updated_at)}`}</small>
          </div>
          {article.link && (
            <Link isExternal showAnchorIcon href={article.link}>
              {dict.blog.article.link}
            </Link>
          )}
          <div className="flex justify-end gap-2">
            <Button
              className="flex gap-2"
              color="primary"
              variant="ghost"
              onPress={() => router.back()}
            >
              <HiArrowLeft className="h-5 w-5" />
              {dict.blog.article.buttons.back}
            </Button>
          </div>
          <Comments comments={comments} dict={dict} idArticle={article.id} />
        </SectionHero>
      )}
    </>
  )
}

export default PageBlog
