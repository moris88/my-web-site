'use client'

import moment from 'moment'
import { Blog } from '@/types/global'

interface PageBlogProps {
  blog: Blog
}

function PageBlog({ blog }: PageBlogProps) {
  return (
    <section>
      {blog &&
        blog.articles.map((article) => (
          <article key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <small>
              {`inserito il ${moment(article.date).format(
                'DD/MM/YYYY'
              )} alle ${moment(article.date).format('HH:mm')}`}
            </small>
          </article>
        ))}
    </section>
  )
}

export default PageBlog
