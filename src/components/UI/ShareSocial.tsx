'use client'

import Link from 'next/link'
import {
	FaFacebook,
	FaLinkedin,
	FaReddit,
	FaTelegram,
	FaTwitter,
} from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import type { Article } from '@/types'
import { generateUniqueId } from '@/utils'
import Tooltip from './Tooltip'

interface MyFooterProps {
	title: string
	article: Article
}

function ShareSocial({ article, title }: Readonly<MyFooterProps>) {
	const links = [
		{
			name: 'facebook',
			icon: (
				<FaFacebook className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				window.location.href,
			)}`,
		},
		{
			name: 'linkedin',
			icon: (
				<FaLinkedin className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
				window.location.href,
			)}&title=${encodeURIComponent(article.title)}`,
		},
		{
			name: 'twitter',
			icon: (
				<FaTwitter className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
				window.location.href,
			)}&text=${encodeURIComponent(article.title)}`,
		},
		{
			name: 'reddit',
			icon: (
				<FaReddit className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://www.reddit.com/submit?url=${encodeURIComponent(
				window.location.href,
			)}&title=${encodeURIComponent(article.title)}`,
		},
		{
			name: 'telegram',
			icon: (
				<FaTelegram className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://t.me/share/url?url=${encodeURIComponent(
				window.location.href,
			)}&text=${encodeURIComponent(article.title)}`,
		},
		{
			name: 'whatsapp',
			icon: (
				<IoLogoWhatsapp className="h-6 w-6 text-primary hover:text-primary/50 dark:text-white dark:hover:text-gray-200" />
			),
			url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
				`${article.title} ${window.location.href}`,
			)}`,
		},
	]
	return (
		<section className="flex select-none flex-col items-center justify-start gap-4 md:flex-row md:justify-end">
			<div className="flex flex-wrap gap-4 gap-y-1 text-sm lg:text-base">
				<span className="dark:text-gray-400">{title}</span>
			</div>
			<div className="flex items-center gap-4">
				{links.map((link) => (
					<Link key={generateUniqueId()} href={link.url}>
						<Tooltip text={`Share on ${link.name}`} position="left">
							{link.icon}
						</Tooltip>
					</Link>
				))}
			</div>
		</section>
	)
}

export default ShareSocial
