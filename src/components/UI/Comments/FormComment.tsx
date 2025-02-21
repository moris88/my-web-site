'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Textarea } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { Comment } from '@/types'
import { createComment } from '@/lib'

interface FormCommentProps {
  dict: Dictionary
  articleId: string
  onClose: () => void
  onSend: () => void
}

export default function FormComment({
  dict,
  articleId,
  onClose,
  onSend,
}: FormCommentProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Comment>({
    defaultValues: {
      username: localStorage.getItem('username') || '',
      article_id: articleId,
      content: '',
    },
  })

  const onSubmit: SubmitHandler<Comment> = async (data) => {
    setLoading(true)
    const response = await createComment(data)
    if (response.error) {
      setError(response.error.message)
      setLoading(false)
      return
    }
    if (data.username) {
      localStorage.setItem('username', data.username)
    }
    onSend()
  }

  return (
    <form
      className="mt-4 flex w-full flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-xl">{dict.blog.article.comments.form.title}</h3>
      <Input
        isRequired
        isDisabled={!!localStorage.getItem('username')}
        label={dict.blog.article.comments.form.username.label}
        placeholder={dict.blog.article.comments.form.username.placeholder}
        type="text"
        {...register('username', { required: true })}
      />
      {errors?.username && (
        <p className="font-bold text-red-500">
          {dict.blog.article.comments.form.username.error}
        </p>
      )}
      <Textarea
        isRequired
        label={dict.blog.article.comments.form.content.label}
        placeholder={dict.blog.article.comments.form.content.placeholder}
        {...register('content', { required: true })}
      />
      {errors?.content && (
        <p className="font-bold text-red-500">
          {dict.blog.article.comments.form.content.error}
        </p>
      )}
      {error && <p className="font-bold text-red-500">{error}</p>}
      <div className="flex justify-center gap-4">
        <Button type="button" onPress={() => onClose()}>
          {dict.blog.article.comments.form.buttons.done}
        </Button>
        {loading ? (
          <Button isLoading color="primary">
            {dict.blog.article.comments.form.buttons.loading}
          </Button>
        ) : (
          <Button color="primary" type="submit" variant="flat">
            {dict.blog.article.comments.form.buttons.submit}
          </Button>
        )}
      </div>
    </form>
  )
}
