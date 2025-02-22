import React from 'react'
import { TodoInput, TodoList } from '@/components'
import { getDictionary } from '@/app/dictionaries'

export default async function TodoListPage() {
  const dict = await getDictionary()
  return (
    <div className="container">
      <TodoInput dict={dict} />
      <TodoList dict={dict} />
    </div>
  )
}
