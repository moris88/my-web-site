'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react'

interface FormContactProps {
  onClose: () => void
  onSuccess: () => void
  onError: (message: string) => void
}

interface FormData {
  name: string
  email: string
  message: string
}

export default function FormContact({
  onSuccess,
  onError,
  onClose,
}: FormContactProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          onSuccess()
        } else {
          onError('Something went wrong')
        }
      })
      .catch((err) => {
        onError(JSON.stringify(err))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) return <Spinner aria-label="spinner" color="info" />

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label className="text-black" htmlFor="name">
        Name
      </Label>
      <TextInput
        id="name"
        placeholder="Enter your name"
        type="text"
        {...register('name', { required: 'Name is required' })}
      />
      <p className="font-bold text-red-500">{errors.name?.message}</p>
      <Label className="text-black" htmlFor="email">
        Email
      </Label>
      <TextInput
        id="email"
        placeholder="Enter your email"
        type="email"
        {...register('email', { required: 'Email is required' })}
      />
      <p className="font-bold text-red-500">{errors.email?.message}</p>
      <Label className="text-black" htmlFor="message">
        Your Message
      </Label>
      <Textarea
        id="message"
        placeholder="Enter your message..."
        rows={4}
        {...register('message', { required: 'Message is required' })}
      />
      <p className="font-bold text-red-500">{errors.message?.message}</p>
      <div className="flex justify-center gap-4">
        <Button color="gray" type="button" onClick={() => onClose()}>
          Done
        </Button>
        <Button color="blue" type="submit">
          Send
        </Button>
      </div>
    </form>
  )
}
