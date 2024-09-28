'use client'

import React from 'react'
import { getLocalTimeZone, today } from '@internationalized/date'
import { Button, CalendarDate, DatePicker, Textarea } from '@nextui-org/react'
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
  const [text, setText] = React.useState<string>('')
  const [todos, setTodos] = useAtom(todoListAtom)
  const [dueDate, setDueDate] = React.useState<CalendarDate>()
  const [showAdd, setShowAdd] = React.useState(false)
  const [showError, setShowError] = React.useState(false)
  const [required, setRequired] = React.useState(false)

  const minValue = today(getLocalTimeZone()) as unknown as CalendarDate

  const addTodo = () => {
    const newTodo: Todo = {
      id: generateUniqueId(),
      text,
      completed: false,
      createdAt: new Date(),
      updatedAt: null,
      completedAt: null,
      dueDate: dueDate ? new Date(dueDate.toString()) : null,
    }
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setText('')
    setDueDate(undefined)
    setRequired(false)
    setShowAdd(false)
  }

  const confirmAddTodo = () => {
    if (!required && text.trim() === '') {
      setShowError(true)
      return
    }
    setShowAdd(true)
  }

  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      <Textarea
        isRequired
        className="w-full"
        label={dict.todolist.addTask.title}
        maxRows={3}
        minRows={1}
        placeholder={dict.todolist.addTask.placeholder}
        size="sm"
        value={text}
        onChange={(e) => {
          setRequired(true)
          setText(e.target.value)
        }}
      />
      <DatePicker
        showMonthAndYearPickers
        className="w-full"
        granularity="minute"
        label={dict.todolist.addTask.due_date}
        minValue={minValue}
        value={dueDate}
        onChange={setDueDate}
      />
      <Button color="success" size="lg" onClick={confirmAddTodo}>
        {dict.todolist.addTask.submit}
      </Button>
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
