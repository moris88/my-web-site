'use client'

import { useRouter } from 'next/navigation'

import type { Dictionary } from '@/app/dictionaries'
import type { StoreLink } from '@/types'
import { Button } from './Button'
import { Dialog } from './Dialog'

interface ButtonsGroupSocialProps {
	storeLink: StoreLink | null
	setStoreLink: React.Dispatch<React.SetStateAction<StoreLink | null>>
	dict: Dictionary
}

function ButtonsGroupSocial({
	dict,
	storeLink,
	setStoreLink,
}: Readonly<ButtonsGroupSocialProps>) {
	const route = useRouter()
	return (
		<>
			{storeLink && (
				<Dialog
					isOpen={storeLink !== null}
					onClose={() => setStoreLink(null)}
					title={storeLink.label}
				>
					{
						dict.contacts.buttons.storeLink.content[
							storeLink.label.toLowerCase() as keyof typeof dict.contacts.buttons.storeLink.content
						]
					}
					<div className="mt-4 flex w-full justify-end">
						<Button
							className="flex gap-2"
							onClick={() => route.push(storeLink.url)}
						>
							{dict.contacts.buttons.storeLink.button}
						</Button>
					</div>
				</Dialog>
			)}
		</>
	)
}

export default ButtonsGroupSocial
