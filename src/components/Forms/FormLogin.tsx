'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { Dictionary } from '@/app/dictionaries'

interface FormLoginProps {
  dict: Dictionary
}

interface FormData {
  username: string
  password: string
}

export default function FormLogin({ dict }: FormLoginProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/profile'
        } else {
          setError(res.error)
          setLoading(false)
        }
      })
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-base md:text-xl">{dict.login.form.title}</p>
      <Input
        isRequired
        id="username"
        label={dict.login.form.username.label}
        placeholder={dict.login.form.username.placeholder}
        type="text"
        {...register('username', { required: true })}
      />
      {errors?.username && (
        <p className="font-bold text-red-500">
          {dict.login.form.username.required}
        </p>
      )}
      <Input
        isRequired
        id="password"
        label={dict.login.form.password.label}
        placeholder={dict.login.form.password.placeholder}
        type="password"
        {...register('password', { required: false })}
      />
      {errors?.password && (
        <p className="font-bold text-red-500">
          {dict.login.form.password.required}
        </p>
      )}
      {error && <p className="font-bold text-red-500">{error}</p>}
      <div className="flex justify-center gap-4">
        <Button
          color="primary"
          isLoading={loading}
          type="submit"
          variant="flat"
        >
          {dict.login.form.buttons.submit}
        </Button>
      </div>
    </form>
  )
}
