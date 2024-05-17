'use client'

import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Article, Blog } from '@/types/global'
import SectionCard from '../SectionCard'

interface PageBlogProps {
  blog: Blog
  dict: any
}

function PageBlog({ blog, dict }: PageBlogProps) {
  const [article, setArticle] = React.useState<Article | null>(null)

  const handleClickClose = () => {
    setArticle(null)
  }
  return (
    <section className="my-20 grid grid-cols-1 gap-4 lg:p-14 p-0 md:grid-cols-2 xl:grid-cols-4">
      <Modal size="3xl" isOpen={article !== null} onOpenChange={handleClickClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{article?.title}</ModalHeader>
              <ModalBody>
                {article && (
                  <SectionCard.CardBlogComplete article={article} dict={dict} />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="flat" onPress={onClose}>
                  {dict.blog.card.buttons.close}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
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
