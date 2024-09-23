import { NextResponse } from 'next/server'
import { sendMessage } from '@/utils'

const { log, error } = console

// recupera env TOKEN_TELEGRAM di next
const { TOKEN_TELEGRAM, CHAT_ID_TELEGRAM } = process.env

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = body.email || null
    const message = body.message || null
    const username = body.username || null
    const name = body.name || null
    if (!message || !name) {
      return NextResponse.json(
        { error: 'Email, message and name are required' },
        { status: 404 },
      )
    }
    if (TOKEN_TELEGRAM && CHAT_ID_TELEGRAM) {
      const response = await sendMessage({
        token: TOKEN_TELEGRAM,
        chatId: CHAT_ID_TELEGRAM,
        message: `Messaggio da ${name}:\n\n${message}\n\nEmail: ${email ?? 'Not provided'}\nUsername: ${username ?? 'Not provided'}`,
      })
      log(response)
    } else {
      throw new Error('Telegram token and chat id are required')
    }
    return NextResponse.json({ status: 200 })
  } catch (err) {
    error(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
