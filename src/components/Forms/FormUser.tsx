'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Avatar, Link } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
import { User } from '@supabase/supabase-js'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { ConfirmModal } from '@/components'

interface FormArticlesProps {
  dict: Dictionary
  user: User
}

export default function FormArticles({
  dict,
  user,
}: FormArticlesProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
  } = useForm<{
    psw1: string
    psw2: string
  }>()

  const [isVisible1, setIsVisible1] = React.useState(false)
  const [isVisible2, setIsVisible2] = React.useState(false)

  const toggleVisibility1 = () => setIsVisible1(!isVisible1)
  const toggleVisibility2 = () => setIsVisible2(!isVisible2)

  const [showConfirm, setShowConfirm] = React.useState(false)

  const onSubmit: SubmitHandler<{
    psw1: string
    psw2: string
  }> = async (data) => {
    setLoading(true)
    setError(null)
    if (data.psw1 !== data.psw2) {
      setError('Le password non corrispondono')
      setLoading(false)
      return
    }
    setShowConfirm(true)
    setLoading(false)
  }

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
      <Avatar
        className="w-24 h-24"
      />
      <Link
        isExternal showAnchorIcon
        className="hover:text-primary"
        href="https://supabase.com/dashboard/project/psgaxddqtxofwhtzfxiw"
      >
        Supabase Dashboard
      </Link>
      <Input
        isReadOnly
        label={dict.profile.form.id}
        type="text"
        value={user.id}
      />
      <Input
        isReadOnly
        label={dict.profile.form.email}
        type="text"
        value={user.email}
      />
      <div className="flex w-full flex-col items-center gap-4 rounded-lg p-4 border border-gray-200">
        <p className="text-start">{dict.profile.form.password}</p>
        <Input
          isRequired
          endContent={
            <button
              aria-label="toggle password visibility 1"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility1}
            >
              {isVisible1 ? (
                <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible1 ? 'text' : 'password'}
          variant="bordered"
          {...register('psw1', { required: true })}
        />
        <Input
          isRequired
          endContent={
            <button
              aria-label="toggle password visibility 2"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility2}
            >
              {isVisible2 ? (
                <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible2 ? 'text' : 'password'}
          variant="bordered"
          {...register('psw2', { required: true })}
        />
        {error && <p className="font-bold text-red-500">{error}</p>}
        <div className="flex justify-center gap-4">
          {loading ? (
            <Button isLoading color="primary">
              {dict.profile.form.buttons.loading}
            </Button>
          ) : (
            <Button color="primary" type="submit" variant="flat">
              {dict.profile.form.buttons.submit}
            </Button>
          )}
        </div>
      </div>

      <ConfirmModal
        description={dict.profile.confirmModal.description}
        isOpen={showConfirm}
        title={dict.profile.confirmModal.title}
        onCancel={() => setShowConfirm(false)}
      />
    </form>
  )
}
