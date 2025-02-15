'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Avatar, Select, Textarea, SelectItem, SharedSelection } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { Article, LanguageSupabase } from '@/types'
import { useRouter } from 'next/navigation'
import { createArticle, updateArticle } from './article'

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
  const [fileInput, setFileInput] = React.useState<HTMLInputElement | null>(
    null
  )
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Article>({
    defaultValues: article ?? undefined,
  })

  const onSubmit: SubmitHandler<Article> = async (data) => {
    if (!data.languageID) {
      setError('Language is required')
      return
    }
    setLoading(true)
    if (article?.id) {
      const response = await updateArticle(data, fileInput)
      if (response?.error) {
        setError(response.error)
        setLoading(false)
        return
      }
      // window.location.href = '/edit_blog'
    } else {
      const response = await createArticle(data, fileInput)
      if (response?.error) {
        setError(response.error)
        setLoading(false)
        return
      }
      window.location.href = '/edit_blog'
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
      <div className="flex md:flex-row flex-col items-center justify-center gap-2">
        {(article?.image || fileInput) ?
          <img src={article?.image || (fileInput?.files?.[0] && URL.createObjectURL(fileInput.files[0]))} className="w-52 h-52 rounded-lg" />
          :
          <div className="w-full h-40 bg-gray-300 rounded-lg flex justify-center items-center">
            <p className="text-4xl text-gray-500">{'No-Image'}</p>
          </div>
        }
        <Input
          className="w-full"
          id="image"
          label="Image"
          placeholder={dict.edit_blog.form.image.placeholder}
          type="file"
          onChange={(e) => setFileInput(e.target)}
        />
      </div>
      <Input
        id="link"
        label="Link"
        placeholder={dict.edit_blog.form.link.placeholder}
        type="text"
        {...register('link', { required: false })}
      />
      {error && <p className="font-bold text-red-500">{error}</p>}
      <div className="flex justify-center gap-4">
        <Button type="button" onPress={() => router.push('/edit_blog')}>
          {dict.edit_blog.form.buttons.done}
        </Button>
        {loading ? (
          <Button isLoading color="primary">
            {dict.edit_blog.form.loading}
          </Button>
        ) : (
          <Button color="primary" type="submit" variant="flat">
            {dict.edit_blog.form.buttons.submit}
          </Button>
        )}
      </div>
    </form>
  )
}
