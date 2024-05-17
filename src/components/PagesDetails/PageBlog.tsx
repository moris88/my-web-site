'use client'

import React from 'react'
import { Button, Modal } from 'flowbite-react'
import { Article, Blog } from '@/types/global'
import SectionCard from '../SectionCard'

interface PageBlogProps {
  blog: Blog
  dict: any
}

function PageBlog({ blog, dict }: PageBlogProps) {
  const [article, setArticle] = React.useState<Article | null>(null)
  return (
    <section className="my-20 grid grid-cols-1 gap-4 px-14 md:grid-cols-2 xl:grid-cols-4">
      <Modal
        show={article !== null}
        onClose={() => {
          setArticle(null)
        }}
      >
        <Modal.Header>{article?.title}</Modal.Header>
        <Modal.Body>
          {article && (
            <SectionCard.CardBlogComplete article={article} dict={dict} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setArticle(null)}>
            {dict.blog.card.buttons.close}
          </Button>
        </Modal.Footer>
      </Modal>
      {blog &&
        blog[dict.language === 'Italiano' ? 'it' : 'en'].articles
          .sort((a: Article, b: Article) => a.id - b.id)
          .map((article) => (
            <SectionCard.CardBlog
              dict={dict}
              key={article.id}
              article={article}
              onClick={(a) => setArticle(a)}
            />
          ))}
    </section>
  )
}

export default PageBlog
