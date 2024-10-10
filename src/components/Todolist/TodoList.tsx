'use client'

import React from 'react'
import { HiArrowsPointingIn } from 'react-icons/hi2'
import {
  Button,
  ButtonGroup,
  Chip,
  Select,
  SelectItem,
  Switch,
} from '@nextui-org/react'
import { useAtom } from 'jotai'
import moment from 'moment'
import { Dictionary } from '@/app/dictionaries'
import { todoListAtom } from '@/atoms'
import { useNotificationRequest } from '@/hooks'
import TodoItem from './TodoItem'

function Separated() {
  return (
    <span className="hidden md:inline">
      &nbsp;
      {'-'}
      &nbsp;
    </span>
  )
}

interface TodoListProps {
  dict: Dictionary
}

function TodoList({ dict }: TodoListProps) {
  const [todos, setTodos] = useAtom(todoListAtom)
  const [filter, setFilter] = React.useState('1')
  const [showDangerZone, setShowDangerZone] = React.useState(false)
  const { notifyUser } = useNotificationRequest()

  // Notifica all'utente quando un task è scaduto
  React.useEffect(() => {
    const newTodos = todos.map((todo) => {
      if (!todo.dueDate) {
        return todo // Se non c'è una data di scadenza, non modificare l'oggetto
      }

      const dueDate = new Date(todo.dueDate)

      if (!todo.completed && dueDate < new Date() && !todo.notify) {
        notifyUser(`Task Scaduto`, `Il task "${todo.title}" è scaduto.`)
        return { ...todo, notify: true } // Solo in questo caso modifichiamo il todo
      }

      return todo // Se non è necessario modificare, restituiamo il todo così com'è
    })
    const isDifferent = JSON.stringify(newTodos) !== JSON.stringify(todos)

    if (isDifferent) {
      setTodos(newTodos)
      localStorage.setItem('todos', JSON.stringify(newTodos))
    }
  }, [notifyUser, setTodos, todos])

  // Recupero dei task da localStorage quando la pagina si carica
  React.useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [setTodos])

  const isTaskOverdue = (dueDate: string | null) => {
    if (!dueDate) return false
    return moment().isAfter(dueDate)
  }

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const clearExpired = () => {
    const newTodos = todos.filter((todo) => !isTaskOverdue(todo.dueDate))
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const clearAll = () => {
    setTodos([])
    localStorage.removeItem('todos')
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold">
          {dict.todolist.listitem.title}
        </h2>
      </div>

      {todos.length > 0 && (
        <div className="flex w-full flex-col items-center justify-center gap-4 gap-y-2 lg:flex-row">
          <Select
            defaultSelectedKeys={filter}
            items={[
              { label: dict.todolist.listitem.filter.all, key: '1' },
              { label: dict.todolist.listitem.filter.completed, key: '2' },
              { label: dict.todolist.listitem.filter.uncompleted, key: '3' },
              { label: dict.todolist.listitem.filter.overdue, key: '4' },
              { label: dict.todolist.listitem.filter.not_overdue, key: '5' },
            ]}
            label={dict.todolist.listitem.filter.label}
            onChange={(value) => setFilter(value.target.value)}
          >
            {(filter) => (
              <SelectItem key={filter.key}>{filter.label}</SelectItem>
            )}
          </Select>
        </div>
      )}
      {todos.length === 0 ? (
        <p>{dict.todolist.listitem.no_task}</p>
      ) : (
        todos
          .filter((todo) => {
            // Filtro per task completati
            if (filter === '2') {
              return todo.completed
            }
            // Filtro per task da completare
            if (filter === '3') {
              return !todo.completed
            }
            // Filtro per task scaduti
            if (filter === '4') {
              return isTaskOverdue(todo.dueDate)
            }
            // Filtro per task non scaduti
            if (filter === '5') {
              return !isTaskOverdue(todo.dueDate)
            }
            return true
          })
          .sort((a, b) => {
            if (a.completed && !b.completed) return 1
            if (!a.completed && b.completed) return -1
            if (isTaskOverdue(a.dueDate) && !isTaskOverdue(b.dueDate)) return -1
            if (!isTaskOverdue(a.dueDate) && isTaskOverdue(b.dueDate)) return 1
            return 0
          })
          .map((todo) => (
            <div
              key={todo.id}
              className={`rounded-lg bg-gray-200 p-2 hover:shadow-lg hover:shadow-slate-500 dark:bg-slate-600 md:p-5`}
            >
              <TodoItem dict={dict} todo={todo} />
              {todo.description !== '' && (
                <p className="py-2 italic">
                  {dict.todolist.addTask.label}: {todo.description}
                </p>
              )}
              <small className="flex flex-col items-start md:flex-row md:items-center">
                {todo.createdAt && (
                  <span>
                    {dict.todolist.listitem.createdAt}:{' '}
                    {moment(todo.createdAt).format('DD/MM/YYYY HH:mm')}
                  </span>
                )}
                {todo.updatedAt && (
                  <span>
                    <Separated />
                    {dict.todolist.listitem.updatedAt}:{' '}
                    {moment(todo.updatedAt).format('DD/MM/YYYY HH:mm')}
                  </span>
                )}
                {todo.completed && (
                  <span>
                    <Separated />
                    <Chip color="success" size="sm">
                      {dict.todolist.listitem.completedAt}:{' '}
                      {moment(todo.completedAt).format('DD/MM/YYYY HH:mm')}
                    </Chip>
                  </span>
                )}
                {todo.dueDate && !todo.completed && (
                  <span>
                    <Separated />
                    <Chip
                      color={isTaskOverdue(todo.dueDate) ? 'danger' : 'warning'}
                      size="sm"
                    >
                      {isTaskOverdue(todo.dueDate)
                        ? dict.todolist.listitem.expired
                        : dict.todolist.listitem.dueDateAt}
                      : {moment(todo.dueDate).format('DD/MM/YYYY HH:mm')}
                    </Chip>
                  </span>
                )}
              </small>
            </div>
          ))
      )}
      {todos.length > 0 && (
        <>
          {!showDangerZone && (
            <Switch
              size="sm"
              onChange={(e) => setShowDangerZone(e.target.checked)}
            >
              Danger Zone
            </Switch>
          )}
          {showDangerZone && (
            <div className="relative rounded-lg bg-red-200 p-1 hover:shadow-lg hover:shadow-red-500 md:p-5">
              <HiArrowsPointingIn
                className="absolute right-1 top-1 h-5 w-5 cursor-pointer dark:text-black"
                onClick={() => setShowDangerZone(false)}
              />
              <p className="absolute left-1 top-1 hidden dark:text-black lg:inline">
                Danger Zone
              </p>
              <div className="hidden w-full items-center justify-center md:flex">
                <ButtonGroup>
                  <Button color="danger" size="lg" onClick={clearCompleted}>
                    {dict.todolist.listitem.filter.buttons.clear_completed}
                  </Button>
                  <Button color="danger" size="lg" onClick={clearExpired}>
                    {dict.todolist.listitem.filter.buttons.clear_expired}
                  </Button>
                  <Button color="danger" size="lg" onClick={clearAll}>
                    {dict.todolist.listitem.filter.buttons.clear_all}
                  </Button>
                </ButtonGroup>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-y-2 md:hidden">
                <Button color="danger" size="sm" onClick={clearCompleted}>
                  {dict.todolist.listitem.filter.buttons.clear_completed}
                </Button>
                <Button color="danger" size="sm" onClick={clearExpired}>
                  {dict.todolist.listitem.filter.buttons.clear_expired}
                </Button>
                <Button color="danger" size="sm" onClick={clearAll}>
                  {dict.todolist.listitem.filter.buttons.clear_all}
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default TodoList
