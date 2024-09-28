import { TodoInput, TodoList } from '@/components'
import { getDictionary } from '../../dictionaries'

export default async function TodoListPage() {
  const dict = await getDictionary()
  return (
    <div className="container">
      <TodoInput dict={dict} />
      <TodoList dict={dict} />
    </div>
  )
}
