type HtmlRendererProps = {
	html: string
}

function HtmlRenderer({ html }: Readonly<HtmlRendererProps>) {
	return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
}

export default HtmlRenderer
