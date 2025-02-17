import { Comment as CommentType } from "@/types"
import { Avatar } from "@heroui/react"

interface CommentProps {
    comment: CommentType
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="flex items-center justify-start w-full gap-2">
            <Avatar />
            <div className="flex flex-col gap-1 bg-gray-200 dark:bg-slate-600 p-2 rounded-lg">
                <small>{comment.username}</small>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment
