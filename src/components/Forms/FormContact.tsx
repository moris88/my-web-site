'use client'

import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import type { Dictionary } from '@/app/dictionaries'
import { Button, Input, Label } from '@/components'

interface FormContactProps {
	dict: Dictionary
	notDone?: boolean
	disabled?: boolean
	onClose?: () => void
	onSuccess: () => void
	onError: (_message: string) => void
}

interface FormData {
	name: string
	email: string
	message: string
}

export default function FormContact({
	dict,
	notDone = false,
	onSuccess,
	onError,
	onClose,
	disabled = false,
}: Readonly<FormContactProps>) {
	const [loading, setLoading] = React.useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (!data.message || !data.name) onError('Name and message are required')
		setLoading(true)
		fetch('/api/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': process.env.NEXT_PUBLIC_SERVER_API_KEY ?? '',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log('Response:', res)
				if (res.status === 200) {
					reset()
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

	return (
		<form
			className="flex w-full flex-col gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Label label={dict.contacts.form.name.label} required>
				<Input
					id="name"
					disabled={loading || disabled}
					placeholder={dict.contacts.form.name.placeholder}
					type="text"
					{...register('name', { required: true })}
				/>
				{errors?.name && (
					<p className="font-bold text-red-500">
						{dict.contacts.form.name.required}
					</p>
				)}
			</Label>
			<Label label={dict.contacts.form.email.label} required>
				<Input
					id="email"
					disabled={loading || disabled}
					placeholder={dict.contacts.form.email.placeholder}
					type="email"
					{...register('email', { required: true })}
				/>
				{errors?.email && (
					<p className="font-bold text-red-500">
						{dict.contacts.form.email.required}
					</p>
				)}
			</Label>
			<Label label={dict.contacts.form.message.label} required>
				<Input
					id="message"
					disabled={loading || disabled}
					as="textarea"
					rows={4}
					placeholder={dict.contacts.form.message.placeholder}
					{...register('message', { required: true })}
				/>
				{errors?.message && (
					<p className="font-bold text-red-500">
						{dict.contacts.form.message.required}
					</p>
				)}
			</Label>
			<div className="flex justify-center gap-4">
				{!notDone && (
					<Button
						disabled={loading}
						type="button"
						variant="outline"
						onClick={() => onClose?.()}
					>
						{dict.contacts.form.buttons.done}
					</Button>
				)}
				{!loading ? (
					<Button type="submit" disabled={disabled}>
						{dict.contacts.form.buttons.send}
					</Button>
				) : (
					<Button disabled={loading || disabled} type="button">
						{dict.contacts.form.loading}
					</Button>
				)}
			</div>
		</form>
	)
}
