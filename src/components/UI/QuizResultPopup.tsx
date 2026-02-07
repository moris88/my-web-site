import type { Dictionary } from '@/app/dictionaries'
import type { DeveloperCategory } from '@/types'

interface QuizResultPopupProps {
	dict: Dictionary
	category: DeveloperCategory
	onClose: () => void
}

function QuizResultPopup({
	dict,
	category,
	onClose,
}: Readonly<QuizResultPopupProps>) {
	const profile = dict.quiz.results[category]
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
				<button
					type="button"
					aria-label="Close"
					className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800 dark:text-white"
					onClick={onClose}
				>
					✕
				</button>
				<h2 className="mb-2 font-bold text-2xl text-primary">
					{profile.title}
				</h2>
				<p className="mb-4 text-gray-500 text-sm italic dark:text-white">
					{profile.shortLabel}
				</p>
				<p className="mb-4 text-gray-700 dark:text-white">
					{profile.description}
				</p>
				<div>
					<h3 className="mb-1 font-semibold text-gray-800 dark:text-white">
						{dict.quiz.label}
					</h3>
					<ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-white">
						{profile.reasons.map((reason) => (
							<li key={reason}>{reason}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default QuizResultPopup
