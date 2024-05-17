'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Spinner } from "@nextui-org/spinner"

interface FormContactProps {
  dict: any
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
  dict,
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

  if (loading) return <Spinner size="lg" />

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label={dict.contacts.form.name.label}
        id="name"
        placeholder={dict.contacts.form.name.placeholder}
        type="text"
        {...register('name', { required: true })}
      />
      {errors?.name && (
        <p className="font-bold text-red-500">
          {dict.contacts.form.name.required}
        </p>
      )}
      <Input 
        label={dict.contacts.form.email.label}
        id="email"
        placeholder={dict.contacts.form.email.placeholder}
        type="email"
        {...register('email', { required: true })}
      />
      {errors?.email && (
        <p className="font-bold text-red-500">
          {dict.contacts.form.email.required}
        </p>
      )}
      <Textarea
        label={dict.contacts.form.message.label}
        id="message"
        placeholder={dict.contacts.form.message.placeholder}
        rows={4}
        {...register('message', { required: true })}
      />
      {errors?.message && (
        <p className="font-bold text-red-500">
          {dict.contacts.form.message.required}
        </p>
      )}
      <div className="flex justify-center gap-4">
        <Button color="primary" variant="light" onClick={() => onClose()} type="button">
          {dict.contacts.form.buttons.done}
        </Button>
        <Button color="primary" variant="flat" type="submit">
          {dict.contacts.form.buttons.send}
        </Button>  
      </div>
    </form>
  )
}
