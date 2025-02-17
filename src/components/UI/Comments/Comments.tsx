'use client'

import { Comment } from '@/types'
import CommentComponent from './Comment'
import { Divider, Button } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import React from 'react'
import FormComment from './FormComment'

interface CommentsProps {
    dict: Dictionary
    comments: Comment[]
}
function Comments({ comments, dict }: CommentsProps) {
    const [showForm, setShowForm] = React.useState<boolean>(false)
    return (
        <div>
            <Divider />
            <h2 className="py-4">{dict.blog.article.comments.title}</h2>
            <Divider />
            {comments.length === 0 && <p className="mt-4 italic">{dict.blog.article.comments.no_comment}</p>}
            {showForm && (
                <FormComment
                    dict={dict}
                    articleId={comments[0].article_id}
                    onClose={() => setShowForm(false)}
                    onSend={() => window.location.href = `/blog/${comments[0].article_id}`}
                />
            )}
            {!showForm && (
                <div className="flex justify-center items-center w-full">
                    <Button className="mt-4" color="primary" variant="flat" onPress={() => setShowForm(true)}>
                        {dict.blog.article.comments.form.title}
                    </Button>
                </div>
            )}
            <ul className='flex flex-col gap-4 mt-4 max-h-[calc(100vh-50%)]'>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <CommentComponent comment={comment} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments
