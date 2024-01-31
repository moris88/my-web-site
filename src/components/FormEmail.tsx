'use client'

import { on } from 'events'
import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'

interface FormEmailProps {
  onSuccess: () => void
  onError: (message: string) => void
}

interface FormData {
  name: string
  email: string
  message: string
}

const FormEmail = ({ onSuccess, onError }: FormEmailProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        onSuccess()
      } else {
        onError('Something went wrong')
      }
    })
  })

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">Contact Me</h3>
      <Label className="text-white" htmlFor="name">
        Name
      </Label>
      <TextInput
        type="text"
        id="name"
        placeholder="Enter your name"
        {...register('name', { required: 'Name is required' })}
      />
      <p className="text-red-500 font-bold">{errors.name?.message}</p>
      <Label className="text-white" htmlFor="email">
        Email
      </Label>
      <TextInput
        type="email"
        id="email"
        placeholder="Enter your email"
        {...register('email', { required: 'Email is required' })}
      />
      <p className="text-red-500 font-bold">{errors.email?.message}</p>
      <Label className="text-white" htmlFor="message">
        Your Message
      </Label>
      <Textarea
        id="message"
        placeholder="Enter your message..."
        rows={4}
        {...register('message', { required: 'Message is required' })}
      />
      <p className="text-red-500 font-bold">{errors.message?.message}</p>
      <div className="flex justify-center">
        <Button color="blue" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default FormEmail
