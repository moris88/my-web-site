import { NextRequest, NextResponse } from 'next/server'
import { createArticle, deleteArticle, updateArticle } from '@/lib'

const { error , log} = console

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const response = await createArticle(body)
    log('POST ARTICLE', response)
    if (response?.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: response.status }
      )
    }
    // return response
    return NextResponse.json(response)
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body
    if (!id) {
      return NextResponse.json(
        { error: 'article id is required' },
        { status: 400 }
      )
    }
    const response = await updateArticle(body)
    log('PUT ARTICLE', response)
    if (response?.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: response.status }
      )
    }
    // return response
    return NextResponse.json(response)
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    if (!body?.id) {
      return NextResponse.json(
        { error: 'article id is required' },
        { status: 400 }
      )
    }
    const response = await deleteArticle(body.id)
    log('DELETE ARTICLE', response)
    if (response?.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: response.status }
      )
    }
    // return response
    return NextResponse.json({ status: response.status })
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
