import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'

const { log, error } = console

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = body.email || ''
    const message = body.message || ''
    const name = body.name || ''
    const blob = await put(
      `${email}.txt`,
      `Email: ${email}\nName: ${name}\nMessage: ${message}`,
      {
        access: 'public',
      }
    )
    log(blob)
    return NextResponse.json({ status: 200 })
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
