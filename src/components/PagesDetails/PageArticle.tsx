'use client'

import React from 'react'
// import { HiArrowLeft } from 'react-icons/hi2'
// import { Button, Link } from '@heroui/react'
import { Dictionary } from '@/app/dictionaries'
// import { SectionHero } from '@/components'
import { Article } from '@/types'
// import { formatDate } from '@/utils'
// import { useRouter } from 'next/navigation'

interface PageArticleProps {
  dict: Dictionary
  article: Article
}

function PageArticle({ dict, article }: Readonly<PageArticleProps>) {
  console.log('PageArticle', dict, article)
  // const router = useRouter()
  return <p className="text-center">Work in progress...</p>
  // return (
  //   <>
  //     {article && (
  //       <SectionHero
  //         image={{ src: article.image ?? '' }}
  //         subtitle={article.content}
  //         title={article.title}
  //       >
  //         <div className="flex flex-col gap-2 md:flex-row">
  //           <small>{`${dict.blog.article.postedAt} ${formatDate(article.created_at)}`}</small>
  //           <small>{`${dict.blog.article.editedAt} ${formatDate(article.updated_at)}`}</small>
  //         </div>
  //         {article.link && (
  //           <Link isExternal showAnchorIcon href={article.link}>
  //             {dict.blog.article.link}
  //           </Link>
  //         )}
  //         <div className="flex justify-end gap-2">
  //           <Button
  //             className="flex gap-2"
  //             color="primary"
  //             variant="ghost"
  //             onPress={() => router.back()}
  //           >
  //             <HiArrowLeft className="h-5 w-5" />
  //             {dict.blog.article.buttons.back}
  //           </Button>
  //         </div>
  //       </SectionHero>
  //     )}
  //   </>
  // )
}

export default PageArticle
