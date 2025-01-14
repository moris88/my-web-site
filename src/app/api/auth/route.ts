import { NextResponse } from 'next/server'
import { login } from '@/lib'

const { COOKIE_VALUE, ADMIN_USER, ADMIN_PSW } = process.env
const { error } = console

export async function POST(request: Request) {
  try {
    // check if COOKIE_VALUE is defined
    if (!COOKIE_VALUE) {
      throw new Error('COOKIE_VALUE is not defined')
    }
    const body = await request.json()
    const username = body.username || null
    const password = body.password || null
    // check username and password
    if (!username || !password) {
      return NextResponse.json(
        { error: 'username and password are required' },
        { status: 404 },
      )
    }
    // check username and password
    if (username !== ADMIN_USER || password !== ADMIN_PSW) {
      return NextResponse.json(
        { error: 'username or password is incorrect' },
        { status: 404 },
      )
    }
    // login
    login(COOKIE_VALUE)
    // return response
    return NextResponse.json({ status: 200 })
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
