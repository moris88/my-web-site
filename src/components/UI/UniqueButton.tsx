interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
}

function UniqueButton({ children, onClick }: ButtonProps) {
	return (
		<button type="button" className="unique-button" onClick={onClick}>
			{children}
		</button>
	)
}

export default UniqueButton
