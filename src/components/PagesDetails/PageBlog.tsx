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
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { SectionCard } from '@/components'
import { Article, Blog } from '@/types'
import { generateUniqueId } from '@/utils'

interface PageBlogProps {
  blog: Blog
  dict: Dictionary
}

function PageBlog({ blog, dict }: PageBlogProps) {
  const [article, setArticle] = React.useState<Article | null>(null)

  const handleClickClose = () => {
    setArticle(null)
  }
  return (
    <div className="container grid grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:p-14 xl:grid-cols-4">
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
        blog.articles
          .sort((a: Article, b: Article) => moment(b.date).diff(moment(a.date)))
          .map((article) => (
            <SectionCard.CardBlog
              key={generateUniqueId()}
              article={article}
              dict={dict}
              onClick={(a) => setArticle(a)}
            />
          ))}
    </div>
  )
}

export default PageBlog
