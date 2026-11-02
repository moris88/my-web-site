import type { ProjectBadge } from '@/types'

interface ProjectBadgesProps {
	badges?: ProjectBadge[]
	className?: string
}

// Badge che lampeggiano per attirare l'attenzione
const NEW_LABELS = new Set(['Nuovo', 'New'])
// Badge con l'icona che oscilla come un attrezzo da cantiere
const WIP_LABELS = new Set(['Work in Progress'])

// Badge "di stato" del progetto (es. Nuovo, In sviluppo): distinti dai tag tecnologici
function ProjectBadges({ badges, className = '' }: ProjectBadgesProps) {
	if (!badges?.length) return null

	return (
		<ul className={`flex flex-wrap gap-2 ${className}`}>
			{badges.map(({ icon, label }) => (
				<li
					key={`badge-${label}`}
					className={`${NEW_LABELS.has(label) ? 'animate-pulse motion-reduce:animate-none ' : ''}inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-100/90 px-2.5 py-0.5 font-semibold text-amber-900 text-xs shadow-sm backdrop-blur-sm dark:border-amber-500/40 dark:bg-amber-950/80 dark:text-amber-200`}
				>
					<span
						aria-hidden="true"
						className={
							WIP_LABELS.has(label)
								? 'inline-block origin-bottom animate-wip motion-reduce:animate-none'
								: undefined
						}
					>
						{icon}
					</span>
					{label}
				</li>
			))}
		</ul>
	)
}

export default ProjectBadges
