'use client'

import React from 'react'
import { getLocalTimeZone, today, ZonedDateTime } from '@internationalized/date'
import { Button, DatePicker, Input, Switch, Textarea } from '@nextui-org/react'
import { useAtom } from 'jotai'
import { Dictionary } from '@/app/dictionaries'
import { todoListAtom } from '@/atoms'
import { Todo } from '@/types'
import { generateUniqueId } from '@/utils'
import ConfirmModal from './ConfirmModal'

interface TodoInputProps {
  dict: Dictionary
}

function TodoInput({ dict }: TodoInputProps) {
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [todos, setTodos] = useAtom(todoListAtom)
  const [dueDate, setDueDate] = React.useState<ZonedDateTime | null>(null)
  const [showAdd, setShowAdd] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const [required, setRequired] = React.useState(false)
  const [showDescription, setShowDescription] = React.useState(false)

  const minValue = today(getLocalTimeZone()) as any

  const addTodo = () => {
    const newTodo: Todo = {
      id: generateUniqueId(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      completedAt: null,
      dueDate: dueDate ? dueDate.toDate().toISOString() : null,
      notify: false,
    }
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setTitle('')
    setDueDate(null)
    setRequired(false)
    setShowAdd(false)
  }

  const confirmAddTodo = () => {
    if (!required && title.trim() === '') {
      setShowError(true)
      return
    }
    setShowAdd(true)
  }

  const handleSetDueDate = (date: any) => {
    setDueDate(date)
  }

  return (
    <div className="flex w-full flex-col items-center gap-y-4">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <Input
          isRequired
          className="w-full"
          label={dict.todolist.addTask.name}
          placeholder={dict.todolist.addTask.placeholder}
          value={title}
          onChange={(e) => {
            setRequired(true)
            setTitle(e.target.value)
          }}
        />
        <DatePicker
          showMonthAndYearPickers
          className="w-full"
          granularity="minute"
          label={dict.todolist.addTask.due_date}
          minValue={minValue}
          value={dueDate as any}
          onChange={handleSetDueDate}
        />
        <Switch
          size="sm"
          onChange={(e) => setShowDescription(e.target.checked)}
        >
          {dict.todolist.addTask.label}
        </Switch>
        <Button color="success" size="lg" onClick={confirmAddTodo}>
          {dict.todolist.addTask.submit}
        </Button>
      </div>
      {showDescription && (
        <Textarea
          className="w-full"
          label={dict.todolist.addTask.description}
          maxRows={10}
          minRows={5}
          size="sm"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
      )}
      {showAdd && (
        <ConfirmModal
          buttonCancel={dict.todolist.addTask.cancel}
          buttonConfirm={dict.todolist.addTask.submit}
          colorConfirm="primary"
          description={dict.todolist.addTask.confirm}
          isOpen={showAdd}
          title={dict.todolist.addTask.title}
          onCancel={() => setShowAdd(false)}
          onConfirm={addTodo}
        />
      )}
      {showError && (
        <ConfirmModal
          buttonConfirm={dict.todolist.addTask.submit}
          description={dict.todolist.addTask.error}
          isOpen={showError}
          title={dict.todolist.addTask.title}
          onCancel={() => setShowError(false)}
        />
      )}
    </div>
  )
}

export default TodoInput
