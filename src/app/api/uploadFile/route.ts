import { uploadFile } from '@/lib'
import { NextResponse } from 'next/server'

const { error, log } = console

export async function POST(request: Request) {
  try {
    // recuper il file dalla request
    const body = await request.formData()
    const articleId = body.get('article_id') as string
    const file = body.get('file') as File
    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 404 })
    }
    if (!articleId && typeof articleId !== 'string') {
      return NextResponse.json(
        { error: 'Article id is required' },
        { status: 404 }
      )
    }
    if (file.type !== 'image/webp') {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      )
    }
    if (file.size >= 1024 * 1024 * 1) {
      return NextResponse.json(
        { error: 'File size must be less than 1MB' },
        { status: 400 }
      )
    }

    // Upload file using signed URL
    const response: any = await uploadFile(file, articleId)
    log(response)

    if (response?.error) {
      return NextResponse.json(response, { status: 500 })
    }

    return NextResponse.json(response, { status: 200 })
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
