'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Textarea } from '@nextui-org/react'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { createArticle } from '@/lib'

interface FormArticlesProps {
  dict: Dictionary
}

interface FormData {
  title_it: string
  content_it: string
  title_en: string
  content_en: string
  link: string
}

export default function FormArticles({ dict }: FormArticlesProps) {
  const route = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
    createArticle(
      { title: data.title_it, content: data.content_it, link: data.link },
      { title: data.title_en, content: data.content_en, link: data.link },
      moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'),
    )
      .then((res) => {
        if (res.error !== 'Article created successfully') {
          setError(res.message ?? 'Internal Server Error')
        } else {
          route.push('/blog')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4">
          <Input
            isRequired
            id="title"
            label={dict.dashboard.form.it.title.label}
            placeholder={dict.dashboard.form.it.title.placeholder}
            type="text"
            {...register('title_it', { required: true })}
          />
          {errors?.title_it && (
            <p className="font-bold text-red-500">
              {dict.dashboard.form.it.title.required}
            </p>
          )}
          <Textarea
            isRequired
            id="content"
            label={dict.dashboard.form.it.content.label}
            maxRows={10}
            minRows={10}
            placeholder={dict.dashboard.form.it.content.placeholder}
            type="text"
            {...register('content_it', { required: false })}
          />
          {errors?.content_it && (
            <p className="font-bold text-red-500">
              {dict.dashboard.form.it.content.required}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-4">
          <Input
            isRequired
            id="title"
            label={dict.dashboard.form.en.title.label}
            placeholder={dict.dashboard.form.en.title.placeholder}
            type="text"
            {...register('title_en', { required: true })}
          />
          {errors?.title_en && (
            <p className="font-bold text-red-500">
              {dict.dashboard.form.en.title.required}
            </p>
          )}
          <Textarea
            isRequired
            id="content"
            label={dict.dashboard.form.en.content.label}
            maxRows={10}
            minRows={10}
            placeholder={dict.dashboard.form.en.content.placeholder}
            type="text"
            {...register('content_en', { required: false })}
          />
          {errors?.content_en && (
            <p className="font-bold text-red-500">
              {dict.dashboard.form.en.content.required}
            </p>
          )}
        </div>
      </div>
      <Input
        id="link"
        label="Link"
        placeholder="Enter article link"
        type="text"
        {...register('link', { required: false })}
      />
      {error && <p className="font-bold text-red-500">{error}</p>}
      <div className="flex justify-center gap-4">
        {loading ? (
          <Button isLoading color="primary">
            {dict.dashboard.form.loading}
          </Button>
        ) : (
          <Button color="primary" type="submit" variant="flat">
            {dict.dashboard.form.buttons.submit}
          </Button>
        )}
      </div>
    </form>
  )
}
