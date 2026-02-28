'use client'

import { Mail, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import type { Dictionary } from '@/app/dictionaries'
import { Button, Dialog, FormContact } from '@/components'

interface ModalMessageProps {
	dict: Dictionary
	modal?: boolean
	className?: string
}
function ModalMessage({
	dict,
	modal = true,
	className,
}: Readonly<ModalMessageProps>) {
	const [show, setShow] = React.useState<{
		form: boolean
		button: boolean
		success: boolean
		error: boolean
	}>({
		form: false,
		button: true,
		success: false,
		error: false,
	})
	const [error, setError] = React.useState<string | null>(null)
	React.useEffect(() => {
		if (show.success) {
			setTimeout(() => {
				setShow({
					form: false,
					button: true,
					success: false,
					error: false,
				})
			}, 5000)
		}
	}, [show.success])
	const handleClickClose = () => {
		setShow({
			form: false,
			button: true,
			success: false,
			error: false,
		})
	}
	if (!modal) {
		return (
			<div className={className ?? ''}>
				<h3 className="mt-5 w-full select-none text-center">
					<span className="flex items-center justify-center gap-1 text-black dark:text-white">
						<Send className="h-5 w-5" />
						<b>{dict.contacts.modal.title}</b>
					</span>
				</h3>
				{/* <Separator className="my-2" /> */}
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-black dark:text-white">
						{dict.contacts.modal.content1}&nbsp;
						<Link href="/privacy">
							<i className="whitespace-nowrap font-semibold dark:text-white">
								{'Privacy Policy'}
							</i>
						</Link>
						&nbsp;{dict.contacts.modal.content2}
					</p>
					{/* <Separator className="my-2" /> */}
					{show.success && (
						<p className="select-none text-center text-3xl text-green-600">
							{dict.contacts.modal.message}
						</p>
					)}
					{show.error && error && (
						<p className="select-none text-center text-3xl text-red-500">
							Error: {error}
						</p>
					)}
					<FormContact
						dict={dict}
						notDone={!modal}
						disabled={show.success}
						onError={(m) => {
							setError(m)
							setShow({
								form: false,
								button: false,
								success: false,
								error: true,
							})
						}}
						onSuccess={() => {
							setShow({
								form: false,
								button: false,
								success: true,
								error: false,
							})
						}}
					/>
				</div>
			</div>
		)
	}
	return (
		<>
			{show.button && (
				<Button
					className="flex gap-2"
					variant="default"
					onClick={() => {
						setShow({
							form: true,
							button: false,
							success: false,
							error: false,
						})
					}}
				>
					{dict.contacts.buttons.sendEmail}
					<Mail className="h-5 w-5" />
				</Button>
			)}
			{show.form && (
				<Dialog
					isOpen={show.form}
					isDismissible={false}
					onClose={handleClickClose}
					title={dict.contacts.modal.title}
				>
					<p>
						{dict.contacts.modal.content1}&nbsp;
						<Link href="/privacy">
							<i className="whitespace-nowrap font-semibold dark:text-white">
								{'Privacy Policy'}
							</i>
						</Link>
						&nbsp;{dict.contacts.modal.content2}
					</p>
					<FormContact
						dict={dict}
						onClose={handleClickClose}
						onError={(m) => {
							setError(m)
							setShow({
								form: false,
								button: false,
								success: false,
								error: true,
							})
						}}
						onSuccess={() => {
							setShow({
								form: false,
								button: false,
								success: true,
								error: false,
							})
						}}
					/>
				</Dialog>
			)}
			{show.success && (
				<p className="select-none text-center text-3xl text-green-600">
					{dict.contacts.modal.message}
				</p>
			)}
			{show.error && error && (
				<p className="select-none text-center text-3xl text-red-500">
					Error: {error}
				</p>
			)}
		</>
	)
}

export default ModalMessage
