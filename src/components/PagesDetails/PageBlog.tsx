'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Modal } from 'flowbite-react'
import { Article, Blog } from '@/types/global'
import { formatDate } from '@/utils/utils'
import CardBlog from '../CardBlog'

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
                <h4 className="select-none text-lg font-bold">
                  {article?.subtitle}
                </h4>
              )}
              <p className="select-none italic text-black">
                {article?.content}
              </p>
              {article?.link && <Link href={article?.link}>Link</Link>}
              <small className="select-none text-black">
                {formatDate(article?.date)}
              </small>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setArticle(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {blog &&
        blog.articles.map((article) => (
          <CardBlog
            key={article.id}
            content={article.content}
            date={article.date}
            id={article.id}
            image={article.image}
            link={article.link}
            subtitle={article.subtitle}
            title={article.title}
            onClick={(a) => setArticle(a)}
          />
        ))}
    </section>
  )
}

export default PageBlog
