'use client'

import React from 'react'
import {
  getLocalTimeZone,
  parseAbsoluteToLocal,
  today,
} from '@internationalized/date'
import {
  Button,
  ButtonGroup,
  Checkbox,
  DatePicker,
  Input,
  Textarea,
} from '@nextui-org/react'
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
  const [editTitle, setEditTitle] = React.useState(todo.title)
  const [editDescription, setEditDescription] = React.useState(todo.description)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)
  const [showEditModal, setShowEditModal] = React.useState(false)

  const minValue = today(getLocalTimeZone()) as any
  const [editDueDate, setEditDueDate] = React.useState<string | null>(
    todo.dueDate ?? null,
  )

  const valueDueDate = React.useMemo(() => {
    if (editDueDate) {
      const parseDate = parseAbsoluteToLocal(editDueDate)
      return parseDate
    }
    return undefined
  }, [editDueDate])

  const toggleTodo = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            completed: !t.completed,
            completedAt: !t.completed ? new Date().toISOString() : null,
            updatedAt: new Date().toISOString(),
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
      t.id === todo.id
        ? {
            ...t,
            dueDate: editDueDate ? editDueDate.toString() : null,
            title: editTitle,
            description: editDescription,
            updatedAt: new Date().toISOString(),
          }
        : t,
    )
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setIsEditing(false)
    setShowEditModal(false)
  }

  const handleSetDueDate = (value: any) => {
    setEditDueDate(value.toDate().toISOString())
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-2 py-2 md:flex-row md:items-center md:justify-between">
      {isEditing ? (
        <div className="flex w-full flex-col gap-y-4">
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <Input
              className="w-full"
              label={dict.todolist.editTask.title}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <DatePicker
              showMonthAndYearPickers
              className="w-full"
              granularity="minute"
              label={dict.todolist.addTask.due_date}
              minValue={minValue}
              value={valueDueDate as any}
              onChange={handleSetDueDate}
            />
            <ButtonGroup>
              <Button size="lg" onClick={() => setIsEditing(false)}>
                {dict.todolist.editTask.cancel}
              </Button>
              <Button color="warning" size="lg" onClick={updateTodo}>
                {dict.todolist.editTask.submit}
              </Button>
            </ButtonGroup>
          </div>
          <Textarea
            className="w-full"
            label={dict.todolist.addTask.label}
            maxRows={10}
            minRows={5}
            size="lg"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </div>
      ) : (
        <>
          <Checkbox isSelected={todo.completed} onChange={toggleTodo}>
            <span
              className={`font-bold ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.title}
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
