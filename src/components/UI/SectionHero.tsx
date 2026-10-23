import { cn } from '@/lib/utils'
import MarkdownRenderer from './MarkdownRender'

interface SectionHeroProps {
	title: string
	subtitle?: string
	markdown?: string
	image?: {
		src: string
		alt?: string
	}
	icon?: React.ReactNode
	content?: React.ReactNode
	children?: React.ReactNode
}

function SectionHero({
	title,
	subtitle,
	children,
	content,
	markdown,
	image,
	icon,
}: Readonly<SectionHeroProps>) {
	return (
		<section className="container flex flex-col gap-10 overflow-x-hidden">
			<div className="flex flex-col items-center gap-4 text-center">
				<h2 className="font-bold text-3xl text-black md:text-4xl dark:text-white">
					<span className="flex items-center justify-center gap-2">
						{icon}
						{title}
					</span>
				</h2>
				<div className="h-1 w-20 rounded-full bg-primary" />
				<p className={cn('text-gray-600 dark:text-gray-300')}>{subtitle}</p>
			</div>
			{image?.src && (
				<img
					alt={image?.alt ?? title}
					className="aspect-video h-96 w-full rounded-lg object-cover object-center"
					src={`/${image.src}`}
				/>
			)}
			{markdown && <MarkdownRenderer markdown={markdown} />}
			{content ?? children}
		</section>
	)
}

export default SectionHero
