// Funzione per inviare il messaggio
export async function sendMessage({
  token,
  chatId,
  message,
}: {
  token: string
  chatId: string
  message: string
}) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    )

    const data = await response.json()

    if (data.ok) {
      return 'Messaggio inviato con successo'
    } else {
      return `Errore nell'invio del messaggio: ${data.description}`
    }
  } catch (error) {
    return `Errore nella richiesta: ${error}`
  }
}
