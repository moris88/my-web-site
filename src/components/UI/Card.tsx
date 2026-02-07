import { twMerge } from 'tailwind-merge'

const Card = ({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) => (
	<div
		className={twMerge(
			`flex flex-col overflow-hidden rounded-xl border border-slate-200 transition-all hover:border-primary hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary`,
			className,
		)}
	>
		{children}
	</div>
)

const CardImage = ({ src, alt }: { src: string; alt?: string }) => (
	<div className="aspect-video w-full flex-1 overflow-hidden">
		<img
			src={src}
			alt={alt || 'Card image'}
			className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
		/>
	</div>
)

const CardContent = ({
	icon,
	title,
	subtitle,
	children,
}: {
	icon?: React.ReactNode
	title?: string
	subtitle?: string
	children?: React.ReactNode
}) => (
	<div className="flex-1 p-6">
		<div className="flex items-center gap-4">
			{icon && (
				<div className="flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
					{icon}
				</div>
			)}
			{title && (
				<h3 className="line-clamp-1 font-bold text-slate-900 text-xl tracking-tight dark:text-white">
					{title}
				</h3>
			)}
		</div>
		{subtitle && (
			<p className="mt-1 font-medium text-slate-500 text-sm dark:text-slate-400">
				{subtitle}
			</p>
		)}
		<div className="mt-4 text-slate-600 dark:text-slate-300">{children}</div>
	</div>
)

const CardFooter = ({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) => (
	<div
		className={twMerge(
			`flex-1 border-slate-100 border-t bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/50`,
			className,
		)}
	>
		{children}
	</div>
)

export { Card, CardContent, CardImage, CardFooter }
