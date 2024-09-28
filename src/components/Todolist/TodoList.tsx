'use client'

import React from 'react'
import { Chip } from '@nextui-org/react'
import { useAtom } from 'jotai'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { todoListAtom } from '@/atoms'
import TodoItem from './TodoItem'

interface TodoListProps {
  dict: Dictionary
}

function TodoList({ dict }: TodoListProps) {
  const [todos, setTodos] = useAtom(todoListAtom)

  // Recupero dei task da localStorage quando la pagina si carica
  React.useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [setTodos])

  const isTaskOverdue = (dueDate: Date | null) => {
    if (!dueDate) return false
    return moment().isAfter(dueDate)
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold">
          {dict.todolist.listitem.title}
        </h2>
      </div>

      {todos.length === 0 ? (
        <p>{dict.todolist.listitem.no_task}</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem dict={dict} todo={todo} />
            <div>
              {todo.dueDate && (
                <Chip
                  className="ml-4"
                  color={isTaskOverdue(todo.dueDate) ? 'danger' : 'success'}
                  size="sm"
                >
                  {dict.todolist.listitem.dueDateAt}:{' '}
                  {moment(todo.dueDate).format('DD/MM/YYYY HH:mm')}
                </Chip>
              )}
            </div>
            <small>
              {dict.todolist.listitem.createdAt}:{' '}
              {moment(todo.createdAt).format('DD/MM/YYYY HH:mm')} |
              {todo.updatedAt && (
                <>
                  {' '}
                  {dict.todolist.listitem.updatedAt}:{' '}
                  {moment(todo.updatedAt).format('DD/MM/YYYY HH:mm')} |
                </>
              )}
              {todo.completed && (
                <>
                  {' '}
                  {dict.todolist.listitem.completedAt}:{' '}
                  {moment(todo.completedAt).format('DD/MM/YYYY HH:mm')}
                </>
              )}
            </small>
          </div>
        ))
      )}
    </div>
  )
}

export default TodoList
