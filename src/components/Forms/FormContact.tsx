'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { Input, Textarea } from '@heroui/input'
import { Spinner } from '@heroui/spinner'
import { Dictionary } from '@/app/dictionaries'

interface FormContactProps {
  dict: Dictionary
  notDone?: boolean
  onClose?: () => void
  onSuccess: () => void
  onError: (_message: string) => void
}

interface FormData {
  name: string
  email: string
  username: string
  message: string
}

export default function FormContact({
  dict,
  notDone = false,
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
    if (!data.message || !data.name) onError('Name and message are required')
    setLoading(true)
    fetch('/api/sendMessage', {
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

  if (loading)
    return (
      <Button isLoading color="primary" variant="flat" type="button" isDisabled>
        {dict.contacts.form.loading}
      </Button>
    )

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        isRequired
        id="name"
        label={dict.contacts.form.name.label}
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
        id="username"
        label={dict.contacts.form.username.label}
        placeholder={dict.contacts.form.username.placeholder}
        type="text"
        {...register('username', { required: false })}
      />
      <Input
        id="email"
        label={dict.contacts.form.email.label}
        placeholder={dict.contacts.form.email.placeholder}
        type="email"
        {...register('email', { required: false })}
      />
      <Textarea
        isRequired
        id="message"
        label={dict.contacts.form.message.label}
        minRows={4}
        placeholder={dict.contacts.form.message.placeholder}
        {...register('message', { required: true })}
      />
      {errors?.message && (
        <p className="font-bold text-red-500">
          {dict.contacts.form.message.required}
        </p>
      )}
      <div className="flex justify-center gap-4">
        {!notDone && (<Button
          color="default"
          type="button"
          variant="flat"
          onPress={() => onClose?.()}
        >
          {dict.contacts.form.buttons.done}
        </Button>)}
        <Button color="primary" type="submit" variant="flat">
          {dict.contacts.form.buttons.send}
        </Button>
      </div>
    </form>
  )
}
