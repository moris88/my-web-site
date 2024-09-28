export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
  updatedAt: Date | null
  completedAt: Date | null
  dueDate: Date | null
}
