import Image from 'next/image'

interface SectionHeroProps {
	title: string
	subtitle?: string
	image?: {
		src: string
		alt?: string
	}
	content?: React.ReactNode
	children?: React.ReactNode
}

function SectionHero({
	title,
	subtitle,
	children,
	content,
	image,
}: Readonly<SectionHeroProps>) {
	return (
		<section className="container flex flex-col gap-10 overflow-x-hidden">
			{image?.src && (
				<img
					alt={image?.alt ?? title}
					className="h-96 w-full rounded-lg object-cover object-center"
					src={image.src}
				/>
			)}
			<h2 className="text-center text-lg lg:text-3xl">{title}</h2>
			{subtitle && (
				<p>
					<i>{subtitle}</i>
				</p>
			)}
			{content ?? children}
		</section>
	)
}

export default SectionHero
