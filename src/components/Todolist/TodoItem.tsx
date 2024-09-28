'use client'

import React from 'react'
import { Button, ButtonGroup, Checkbox, Input } from '@nextui-org/react'
import { useAtom } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { todoListAtom } from '@/atoms'
import { Todo } from '@/types'
import ConfirmModal from './ConfirmModal'

interface TodoItemProps {
  dict: Dictionary
  todo: Todo
}

function TodoItem({ todo, dict }: TodoItemProps) {
  const [todos, setTodos] = useAtom(todoListAtom)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editText, setEditText] = React.useState(todo.text)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)
  const [showEditModal, setShowEditModal] = React.useState(false)

  const toggleTodo = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            completed: !t.completed,
            completedAt: !t.completed ? new Date() : null,
            updatedAt: new Date(),
          }
        : t,
    )
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  const removeTodo = () => {
    setShowDeleteModal(true)
  }

  const confirmRemoveTodo = () => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
    setShowDeleteModal(false)
  }

  const updateTodo = () => {
    setShowEditModal(true)
  }

  const confirmUpdateTodo = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, text: editText, updatedAt: new Date() } : t,
    )
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setIsEditing(false)
    setShowEditModal(false)
  }

  return (
    <div className="flex items-center justify-between py-2">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <Input
            className="w-full"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button onClick={updateTodo}>{dict.todolist.editTask.submit}</Button>
        </div>
      ) : (
        <>
          <Checkbox isSelected={todo.completed} onChange={toggleTodo}>
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
          </Checkbox>
          <ButtonGroup>
            <Button
              color="primary"
              isDisabled={todo.completed}
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              {dict.todolist.listitem.edit}
            </Button>
            <Button color="danger" size="sm" onClick={removeTodo}>
              {dict.todolist.listitem.delete}
            </Button>
          </ButtonGroup>
        </>
      )}

      {/* Modale per confermare l'eliminazione */}
      <ConfirmModal
        buttonCancel={dict.todolist.deleteTask.cancel}
        buttonConfirm={dict.todolist.deleteTask.delete}
        colorConfirm="danger"
        description={dict.todolist.deleteTask.description}
        isOpen={showDeleteModal}
        title={dict.todolist.deleteTask.title}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={confirmRemoveTodo}
      />

      {/* Modale per confermare la modifica */}
      <ConfirmModal
        buttonCancel={dict.todolist.editTask.cancel}
        buttonConfirm={dict.todolist.editTask.submit}
        colorConfirm="primary"
        description={dict.todolist.editTask.description}
        isOpen={showEditModal}
        title={dict.todolist.editTask.title}
        onCancel={() => setShowEditModal(false)}
        onConfirm={confirmUpdateTodo}
      />
    </div>
  )
}

export default TodoItem
