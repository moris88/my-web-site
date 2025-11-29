interface SectionHeroProps {
	title: string
	subtitle?: string
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
	image,
	icon,
}: Readonly<SectionHeroProps>) {
	return (
		<section className="container flex flex-col gap-10 overflow-x-hidden">
			<div className="flex flex-col items-center gap-4 text-center">
				<h2 className="font-bold text-3xl md:text-4xl">
					<span className="flex items-center justify-center gap-2">
						{icon}
						{title}
					</span>
				</h2>
				<div className="h-1 w-20 rounded-full bg-primary" />
				<p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
			</div>
			{image?.src && (
				<img
					alt={image?.alt ?? title}
					className="h-96 w-full rounded-lg object-cover object-center"
					src={image.src}
				/>
			)}
			{/* 			<h2 className="text-center text-lg lg:text-3xl">{title}</h2>
			{subtitle && (
				<p>
					<i>{subtitle}</i>
				</p>
			)} */}
			{content ?? children}
		</section>
	)
}

export default SectionHero
