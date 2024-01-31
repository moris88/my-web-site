import { NextResponse } from 'next/server'
import { MessageClient } from 'cloudmailin'

const USERNAME = '6e7dea731b2f948c'
const API_KEY = 'kZVr5GQLk7US2Z3MMojCdNzF'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = body.email || ''
    const message = body.message || ''
    const name = body.name || ''
    const client = new MessageClient({ username: USERNAME, apiKey: API_KEY })
    const response = await client
      .sendMessage({
        to: 'morist88@outlook.it',
        from: email,
        plain: `Message from ${name} - ${email}: ${message}`,
        html: `<p>Message from ${name} - ${email}: ${message}</p>`,
        subject: 'MESSAGE FROM WEB SITE',
      })
      .then((res) => {
        console.log('RESPONSE ====>', res)
        return true
      })
      .catch((err) => {
        console.error(err)
        return false
      })
    if (!response) {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }
    return NextResponse.json({ status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
