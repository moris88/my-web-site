'use client'

import { Article } from '@/types'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ButtonGroup, Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { FaTrash } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'

interface PageEditBlogsProps {
    articles: Article[]
}
export default function PageEditBlogs({
  articles
}: PageEditBlogsProps) {
  const router = useRouter()
  const handleEdit = (id: string) => {
    console.log('Edit', id)
    router.push(`/edit_blog/${id}`)
  }
  const handleDelete = (id: string) => {
    console.log('Delete', id)
  }
  return (
    <Table aria-label="Edit blogs">
      <TableHeader>
        <TableColumn>{'ID'}</TableColumn>
        <TableColumn>{'Title'}</TableColumn>
        <TableColumn>{'Actions'}</TableColumn>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{article.id}</TableCell>
            <TableCell>{article.title}</TableCell>
            <TableCell>
              <ButtonGroup>
                <Button onPress={() => handleEdit(article.id)}>
                  <MdEdit className="w-6 h-6" />
                </Button>
                <Button onPress={() => handleDelete(article.id)}>
                  <FaTrash className="w-6 h-6" />
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
