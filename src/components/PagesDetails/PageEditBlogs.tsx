'use client'

import { Article, LanguageSupabase } from '@/types'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ButtonGroup, Button, Avatar, Link } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FaTrash } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { Dictionary } from '@/app/dictionaries'
import React from 'react'
import { LoadingScreen } from '../UI'

interface PageEditBlogsProps {
    dict: Dictionary
    articles: Article[]
    languages: LanguageSupabase[]
}
export default function PageEditBlogs({
  dict,
  articles,
  languages
}: PageEditBlogsProps) {
  const router = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const handleEdit = (id: string) => {
    router.push(`/edit_blog/${id}`)
  }
  const handleDelete = (id: string) => {
    setLoading(true)
    fetch('/api/articles', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then((response) => {
      if (response.status !== 200) {
        setError('Error delete article')
      } else {
        router.refresh()
      }
    }).finally(() => {
      setLoading(false)
    })
  }

  if (loading) {
    return <LoadingScreen />
  }
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button onPress={() => { router.push('/edit_blog/new') }}>
          <FaPlus className="w-4 h-4" />
          {dict.edit_blog.table.new}
        </Button>
      </div>
      {error && <p className="text-red-500 py-2">{error}</p>}
      <Table aria-label={dict.edit_blog.table.title}>
        <TableHeader>
          <TableColumn>{dict.edit_blog.table.header.id}</TableColumn>
          <TableColumn>{dict.edit_blog.table.header.title}</TableColumn>
          <TableColumn>{dict.edit_blog.table.header.language}</TableColumn>
          <TableColumn>{dict.edit_blog.table.header.actions}</TableColumn>
        </TableHeader>
        <TableBody>
          {articles.map((article) => {
            const language = languages.find(
              (lang) => lang.id === article.languageID
            )
            return (
              <TableRow key={article.id}>
                <TableCell>{article.id}</TableCell>
                <TableCell>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={`/blog/${article.id}?lang=false`}
                  >
                    {article.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Avatar alt={language?.lang} className="w-6 h-6 shadow-lg" src={`https://flagcdn.com/w160/${language?.lang}.webp`} />
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button onPress={() => { handleEdit(article.id) }}>
                      <MdEdit className="w-4 h-4" />
                    </Button>
                    <Button onPress={() => { handleDelete(article.id) }}>
                      <FaTrash className="w-4 h-4" />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ) })}
        </TableBody>
      </Table>
    </>
  )
}
