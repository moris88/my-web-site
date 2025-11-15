'use client'

import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'
import { Divider } from '@heroui/react'
import React from 'react'
import { HiEnvelope } from 'react-icons/hi2'
import { RiMailSendFill } from 'react-icons/ri'

import type { Dictionary } from '@/app/dictionaries'
import { FormContact } from '@/components'

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
					<span className="flex items-center justify-center gap-1">
						<RiMailSendFill className="h-5 w-5" />
						<b>{dict.contacts.modal.title}</b>
					</span>
				</h3>
				<Divider className="my-2" />
				<div className="flex flex-col items-center justify-center gap-2">
					<p>
						{dict.contacts.modal.content1}&nbsp;
						<Link href="/privacy">
							<i className="whitespace-nowrap font-semibold dark:text-white">
								{'Privacy Policy'}
							</i>
						</Link>
						&nbsp;{dict.contacts.modal.content2}
					</p>
					<Divider className="my-2" />
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
					color="default"
					variant="flat"
					onPress={() => {
						setShow({
							form: true,
							button: false,
							success: false,
							error: false,
						})
					}}
				>
					{dict.contacts.buttons.sendEmail}
					<HiEnvelope className="h-5 w-5" />
				</Button>
			)}
			{show.form && (
				<Modal
					isDismissable={false}
					isOpen={show.form}
					size="md"
					onClose={handleClickClose}
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader>{dict.contacts.modal.title}</ModalHeader>
								<Divider className="mb-3" />
								<ModalBody>
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
										onClose={onClose}
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
								</ModalBody>
							</>
						)}
					</ModalContent>
				</Modal>
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
