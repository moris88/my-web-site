'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { useAtomValue } from 'jotai'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { isLoginAtom } from '@/atoms'
import { CardBlog, SectionHero } from '@/components/UI'
import { Article } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageBlogsProps {
  dict: Dictionary
  articles: Article[]
}

function PageBlogs({ dict, articles }: PageBlogsProps) {
  const router = useRouter()
  const isAuth = useAtomValue(isLoginAtom)

  const handleClickRow = (article: Article) => {
    router.push(`/blog/${article.id}`)
  }

  return (
    <SectionHero title={dict.blog.title}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {articles
          .sort((a: Article, b: Article) => moment(b.date).diff(moment(a.date)))
          .map((article) => (
            <CardBlog
              key={generateUniqueId()}
              article={article}
              dict={dict}
              onClick={() => handleClickRow(article)}
            />
          ))}
      </div>
      {isAuth && (
        <div className="mt-8 flex justify-center">
          <Link href="/dashboard">
            <Button>{dict.blog.buttons.create}</Button>
          </Link>
        </div>
      )}
    </SectionHero>
  )
}

export default PageBlogs
