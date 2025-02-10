'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Avatar, Select, Textarea, SelectItem, SharedSelection } from '@heroui/react'
// import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { Article, LanguageSupabase } from '@/types'
import { useRouter } from 'next/navigation'
import { createArticle, updateArticle } from '@/lib'

interface FormArticlesProps {
  dict: Dictionary
  languages: LanguageSupabase[]
  article?: Article
}

export default function FormArticles({
  dict,
  languages,
  article,
}: FormArticlesProps) {
  const router = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Article>({
    defaultValues: article ?? undefined,
  })

  const onSubmit: SubmitHandler<Article> = (data) => {
    if (!data.languageID) {
      setError('Language is required')
      return
    }
    setLoading(true)
    console.log('DATA SUBMIT', data)
    if (article) {
      fetch('/api/articles', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status !== 200) {
          setError('Error update article')
        } else {
          router.push('/edit_blog')
        }
      }).finally(() => {
        setLoading(false)
      })
    } else {
      fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status !== 200) {
          setError('Error creating article')
        } else {
          router.push('/edit_blog')
        }
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  const selectedLanguage = languages.find(
    (language) => language.id === article?.languageID
  )

  const handleSelectedLanguage = (value: SharedSelection) => {
    const selectedLanguage = languages.find(
      (language) => {

        return language.id === +(value?.currentKey ?? 0)
      }
    )
    if (selectedLanguage) {
      setValue('languageID', +selectedLanguage.id)
    }
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Select
        isRequired
        label={dict.edit_blog.form.language.label}
        placeholder={dict.edit_blog.form.language.placeholder}
        items={languages}
        defaultSelectedKeys={[selectedLanguage?.id ?? 0]}
        onSelectionChange={handleSelectedLanguage}
      >
        {(language) => (
          <SelectItem startContent={
            <Avatar alt={language?.lang} className="w-6 h-6 shadow-lg" src={`https://flagcdn.com/w160/${language?.lang}.webp`} />
          }>{language.label}</SelectItem>
        )}
      </Select>
      <Input
        isRequired
        id="title"
        label={dict.edit_blog.form.title.label}
        placeholder={dict.edit_blog.form.title.placeholder}
        type="text"
        {...register('title', { required: true })}
      />
      {errors?.title && (
        <p className="font-bold text-red-500">
          {dict.edit_blog.form.title.required}
        </p>
      )}
      <Textarea
        isRequired
        id="content"
        label={dict.edit_blog.form.content.label}
        maxRows={10}
        minRows={10}
        placeholder={dict.edit_blog.form.content.placeholder}
        type="text"
        {...register('content', { required: false })}
      />
      {errors?.content && (
        <p className="font-bold text-red-500">
          {dict.edit_blog.form.content.required}
        </p>
      )}
      <Input
        id="image"
        label="Image"
        placeholder={dict.edit_blog.form.image.placeholder}
        type="text"
        {...register('image', { required: false })}
      />
      <Input
        id="link"
        label="Link"
        placeholder={dict.edit_blog.form.link.placeholder}
        type="text"
        {...register('link', { required: false })}
      />
      {error && <p className="font-bold text-red-500">{error}</p>}
      <div className="flex justify-center gap-4">
        {loading ? (
          <Button isLoading color="primary">
            {dict.edit_blog.form.loading}
          </Button>
        ) : (
          <Button color="primary" type="submit" variant="flat">
            {dict.edit_blog.form.buttons.submit}
          </Button>
        )}
        <Button color="danger" type="button" variant="flat" onPress={() => router.push('/edit_blog')}>
          {dict.edit_blog.form.buttons.done}
        </Button>
      </div>
    </form>
  )
}
