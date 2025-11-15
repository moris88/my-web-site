'use client'

// import { useRouter } from 'next/navigation'
// import moment from 'moment'
import type { Dictionary } from '@/app/dictionaries'
// import { CardBlog, SectionHero } from '@/components'
// import { generateUniqueId } from '@/utils'
import type { Article } from '@/types'

interface PageBlogProps {
	dict: Dictionary
	articles: Article[]
}

function PageBlog({ dict, articles }: Readonly<PageBlogProps>) {
	console.log('PageBlog', dict, articles)
	// const router = useRouter()

	// const handleClickRow = (article: Article) => {
	//   router.push(`/blog/${article.id}`)
	// }

	return <p className="text-center">Work in progress...</p>

	// return (
	//   <SectionHero title={dict.blog.title}>
	//     <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
	//       {articles
	//         .toSorted((a: Article, b: Article) =>
	//           moment(b.created_at).diff(moment(a.created_at))
	//         )
	//         .map((article) => (
	//           <CardBlog
	//             key={generateUniqueId()}
	//             article={article}
	//             dict={dict}
	//             onClick={() => handleClickRow(article)}
	//           />
	//         ))}
	//     </div>
	//   </SectionHero>
	// )
}

export default PageBlog
