import { Comment as CommentType } from '@/types'
import { Avatar } from '@heroui/react'

interface CommentProps {
  comment: CommentType
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="flex w-full items-center justify-start gap-2">
      <Avatar />
      <div className="flex flex-col gap-1 rounded-lg bg-gray-200 p-2 dark:bg-slate-600">
        <small>{comment.username}</small>
        <p>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment
