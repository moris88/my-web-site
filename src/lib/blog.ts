'use server'

import { put } from '@vercel/blob'
import { Article, Blog, Err, Language } from '@/types'
import { generateUniqueId } from '@/utils'

const { FILE_PATH, DEVELOPMENT, STORE_FILE_NAME, STORE_FILE_NAME_TEST } =
  process.env

export async function getArticles(language: Language): Promise<Blog> {
  try {
    if (!language) {
      throw new Error('Language not found')
    }
    if (!FILE_PATH || !STORE_FILE_NAME) {
      throw new Error('Env File not found')
    }

    const pathfile = DEVELOPMENT
      ? `${FILE_PATH}${STORE_FILE_NAME_TEST}`
      : `${FILE_PATH}${STORE_FILE_NAME}`
    const response = await fetch(pathfile, {
      method: 'GET',
      cache: 'no-cache',
    })

    // Verifica se la risposta è OK
    if (!response.ok) {
      throw new Error(`Error fetching file: ${response.statusText}`)
    }

    // Recupera il contenuto del file come JSON
    const fileContent: { it: Blog; en: Blog } = await response.json()

    // Restituisci il contenuto del file nella risposta
    return fileContent[language]
  } catch (err) {
    console.error(err)
    return {
      articles: [],
      error: 'Internal Server Error',
      message: err as string,
    }
  }
}

export async function getArticle(
  id: string,
  language: Language,
): Promise<Blog> {
  try {
    if (!id) {
      throw new Error('Article id not found')
    }
    if (!language) {
      throw new Error('Language not found')
    }
    if (!FILE_PATH || !STORE_FILE_NAME) {
      throw new Error('Env File not found')
    }

    const pathfile = DEVELOPMENT
      ? `${FILE_PATH}${STORE_FILE_NAME_TEST}`
      : `${FILE_PATH}${STORE_FILE_NAME}`
    const response = await fetch(pathfile, {
      method: 'GET',
      cache: 'no-cache',
    })

    // Verifica se la risposta è OK
    if (!response.ok) {
      throw new Error(`Error fetching file: ${response.statusText}`)
    }

    // Recupera il contenuto del file come JSON
    const fileContent = await response.json()

    // Recupera l'articolo con l'id specificato
    const articleIT: Article = fileContent['it'].articles.find(
      (article: Article) => article.id === id,
    )
    const articleEN: Article = fileContent['en'].articles.find(
      (article: Article) => article.id === id,
    )

    // Se l'articolo non esiste, restituisci un errore
    if (!articleIT || !articleEN) {
      throw new Error(`Article with id ${id} not found`)
    }

    // Restituisci il contenuto del file nella risposta
    return language === 'it'
      ? { articles: [articleIT] }
      : { articles: [articleEN] }
  } catch (err) {
    console.error(err)
    return {
      articles: [],
      error: 'Internal Server Error',
      message: err as string,
    }
  }
}

export async function createArticle(
  it: Partial<Article>,
  en: Partial<Article>,
  date: string,
): Promise<Partial<Err>> {
  try {
    if (!FILE_PATH || !STORE_FILE_NAME) {
      throw new Error('Env File not found')
    }
    if (!it || !en) {
      throw new Error('Italian and English content are required')
    }
    const { title: titleIT, content: contentIT, link: linkIT } = it
    if (
      (!titleIT || !contentIT) &&
      (typeof titleIT !== 'string' || typeof contentIT !== 'string')
    ) {
      throw new Error('Title and content are required')
    }
    const { title: titleEN, content: contentEN, link: linkEN } = it
    if (
      (!titleEN || !contentEN) &&
      (typeof titleEN !== 'string' || typeof contentEN !== 'string')
    ) {
      throw new Error('Title and content are required')
    }
    const id = generateUniqueId()
    const newArticleIT = {
      id,
      title: titleIT,
      content: contentIT,
      link: linkIT,
      date,
    }
    const newArticleEN = {
      id,
      title: titleEN,
      content: contentEN,
      link: linkEN,
      date,
    }
    const pathfile = DEVELOPMENT
      ? `${FILE_PATH}${STORE_FILE_NAME_TEST}`
      : `${FILE_PATH}${STORE_FILE_NAME}`
    const response = await fetch(pathfile, {
      method: 'GET',
      cache: 'no-cache',
    })

    // Verifica se la risposta è OK
    let fileContent: { it: Blog; en: Blog } = {
      it: {
        articles: [],
      },
      en: {
        articles: [],
      },
    }
    if (response.ok) {
      fileContent = await response.json()
    }
    fileContent.it.articles.push(newArticleIT)
    fileContent.en.articles.push(newArticleEN)
    /**
     * @site https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
     */
    const pathFileBlob = DEVELOPMENT ? STORE_FILE_NAME_TEST : STORE_FILE_NAME
    const blob = await put(pathFileBlob ?? '', JSON.stringify(fileContent), {
      access: 'public',
      addRandomSuffix: false,
    })
    if (!blob) {
      throw new Error('Error saving file')
    }
    console.log(blob)
    return { error: 'Article created successfully' }
  } catch (err) {
    console.error(err)
    return { error: 'Internal Server Error', message: err as string }
  }
}
