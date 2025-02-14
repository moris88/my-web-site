'use client'

import { useRouter } from 'next/navigation'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { CardBlog, SectionHero } from '@/components/UI'
import { Article } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageBlogsProps {
  dict: Dictionary
  articles: Article[]
}

function PageBlogs({ dict, articles }: PageBlogsProps) {
  const router = useRouter()

  const handleClickRow = (article: Article) => {
    router.push(`/blog/${article.id}`)
  }

  return (
    <SectionHero title={dict.blog.title}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 p-2">
        {articles
          .sort((a: Article, b: Article) =>
            moment(b.created_at).diff(moment(a.created_at))
          )
          .map((article) => (
            <CardBlog
              key={generateUniqueId()}
              article={article}
              dict={dict}
              onClick={() => handleClickRow(article)}
            />
          ))}
      </div>
    </SectionHero>
  )
}

export default PageBlogs
