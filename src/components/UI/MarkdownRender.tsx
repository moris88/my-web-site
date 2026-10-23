import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownRendererProps = {
	markdown: string
}

function MarkdownRenderer({ markdown }: Readonly<MarkdownRendererProps>) {
	return (
		<div className="prose markdown">
			<Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
		</div>
	)
}

export default MarkdownRenderer
