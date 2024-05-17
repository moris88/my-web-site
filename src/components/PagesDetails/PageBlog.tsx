'use client'

import React from 'react'
import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/modal'
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
    <section className="my-20 grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:p-14 xl:grid-cols-4">
      <Modal
        isDismissable={false}
        isOpen={article !== null}
        size="3xl"
        onOpenChange={handleClickClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {article?.title}
              </ModalHeader>
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
              key={article.id}
              article={article}
              dict={dict}
              onClick={(a) => setArticle(a)}
            />
          ))}
    </section>
  )
}

export default PageBlog
