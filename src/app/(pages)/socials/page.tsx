import { buttonVariants } from '@/components/UI/Button'
import links from '@/data/links.json'
import { cn } from '@/lib/utils'
import { Facebook, Github, Gitlab, Linkedin, Home } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
	linkedin: <Linkedin className="h-5 w-5" />,
	github: <Github className="h-5 w-5" />,
	gitlab: <Gitlab className="h-5 w-5" />,
	facebook: <Facebook className="h-5 w-5" />,
}

export default function SocialsPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-6">
			<h1 className="mb-8 font-bold text-3xl text-slate-900 dark:text-white">
				Connettiti con me
			</h1>
			<div className="flex w-full max-w-sm flex-col gap-4">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'w-full gap-3')}
					>
						{iconMap[link.name]}
						{link.label}
					</a>
				))}
				<a
					href="/"
					className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-full gap-3')}
				>
					<Home className="h-5 w-5" />
					My Web Site
				</a>
			</div>
		</div>
	)
}

