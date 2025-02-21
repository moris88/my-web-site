'use client'

import { Comment } from '@/types'
import CommentComponent from './Comment'
import { Divider, Button } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import React from 'react'
import FormComment from './FormComment'

interface CommentsProps {
  dict: Dictionary
  comments: Comment[]
  idArticle: string
}
function Comments({ comments, dict, idArticle }: CommentsProps) {
  const [showForm, setShowForm] = React.useState<boolean>(false)
  return (
    <div>
      <Divider />
      <h2 className="py-4">{dict.blog.article.comments.title}</h2>
      <Divider />
      {comments.length === 0 && (
        <p className="mt-4 italic">{dict.blog.article.comments.no_comment}</p>
      )}
      {showForm && (
        <FormComment
          articleId={idArticle}
          dict={dict}
          onClose={() => setShowForm(false)}
          onSend={() => (window.location.href = `/blog/${idArticle}`)}
        />
      )}
      {!showForm && (
        <div className="flex w-full items-center justify-center">
          <Button
            className="mt-4"
            color="primary"
            variant="flat"
            onPress={() => setShowForm(true)}
          >
            {dict.blog.article.comments.form.title}
          </Button>
        </div>
      )}
      <ul className="mt-4 flex max-h-[calc(100vh-50%)] flex-col gap-4">
        {comments.map((comment) => (
          <li key={comment.id}>
            <CommentComponent comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
