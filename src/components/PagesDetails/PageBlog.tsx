'use client'

import React from 'react'
import { Button, Modal } from 'flowbite-react'
import { Article, Blog } from '@/types/global'
import SectionCard from '../SectionCard'

interface PageBlogProps {
  blog: Blog
}

function PageBlog({ blog }: PageBlogProps) {
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
          {article && <SectionCard.CardBlogComplete article={article} />}
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setArticle(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {blog &&
        blog.articles
          .sort((a: Article, b: Article) => a.id - b.id)
          .map((article) => (
            <SectionCard.CardBlog
              key={article.id}
              article={article}
              onClick={(a) => setArticle(a)}
            />
          ))}
    </section>
  )
}

export default PageBlog
