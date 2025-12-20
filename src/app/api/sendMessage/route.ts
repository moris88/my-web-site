// app/api/sendMessage/route.ts
import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const { error, log } = console

export async function POST(req: NextRequest) {
	const apiKey = req.headers.get('api-key')
	const body = await req.json()
	const { name, email, message } = body

	const ip = req.headers.get('x-forwarded-for') ?? 'IP non disponibile'
	const userAgent = req.headers.get('user-agent')

	if (apiKey !== process.env.NEXT_PUBLIC_SERVER_API_KEY) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
	}

	if (!name || !email || !message) {
		return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
	}

	try {
		if (process.env.DEVELOPMENT) {
			log('Simulazione invio email:')
			log(`Da: ${name} <${email}>`)
			log(`A: ${process.env.EMAIL_TO}`)
			log(`Oggetto: Warning!!! Nuovo messaggio dal sito web da ${name}`)
			log(
				`Ciao sono ${name} (email: ${email}), questo e' il mio messaggio:\n\n${message}\n\nIP: ${ip}\nUser-Agent: ${userAgent}`,
			)
			return NextResponse.json(
				{ message: 'Email inviata con successo' },
				{ status: 200 },
			)
		}
		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})

		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_TO,
			subject: `Warning!!! Nuovo messaggio dal sito web da ${name}`,
			text: `Ciao sono ${name} (email: ${email}), questo e' il mio messaggio:\n\n${message}\n\nIP: ${ip}\nUser-Agent: ${userAgent}`,
		}).then(() => {
			log(`Email inviata con successo a ${process.env.EMAIL_TO}`)
		}).catch((err) => {
			throw err
		})

		return NextResponse.json(
			{ message: 'Email inviata con successo' },
			{ status: 200 },
		)
	} catch (err: unknown) {
		error('Errore invio email:', err)
		if (err instanceof Error) {
			return NextResponse.json(
				{
					message: "Errore durante l'invio dell'email",
					error: err?.message ?? 'Unknown error',
				},
				{ status: 500 },
			)
		} else {
			return NextResponse.json(
				{
					message: "Errore durante l'invio dell'email",
					error: 'Unknown error',
				},
				{ status: 500 },
			)
		}
	}
}
