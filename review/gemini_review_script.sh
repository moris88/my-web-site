#!/bin/bash

# Abilita il tracciamento degli errori e l'uscita in caso di errore
set -e

# Recupera i PERCORSI dei file temporanei dagli argomenti
# $1 sarà il percorso al file del diff, $2 sarà il percorso al file del prompt
DIFF_FILE_PATH="$1"
PROMPT_FILE_PATH="$2"

# Leggi il contenuto dei file
PR_DIFF=$(cat "$DIFF_FILE_PATH")
GEMINI_PROMPT=$(cat "$PROMPT_FILE_PATH")

# Recupera l'URL del servizio Gemini e la SERVICE_API_KEY dalle variabili d'ambiente
GEMINI_SERVICE_URL="$GEMINI_REVIEW_SERVICE_URL"
SERVICE_API_KEY="$SERVICE_API_KEY"

if [ -z "$GEMINI_SERVICE_URL" ]; then
    echo "Errore: GEMINI_REVIEW_SERVICE_URL non configurato." >&2
    exit 1
fi

if [ -z "$PR_DIFF" ]; then
    echo "Nessun diff fornito, saltando la review di Gemini." >&2
    echo "review_comment="
    exit 0
fi

# Prepara il payload JSON da inviare al tuo servizio intermedio
# jq gestisce automaticamente l'escape dei contenuti di $PR_DIFF e $GEMINI_PROMPT
PAYLOAD=$(jq -n \
            --arg diff "$PR_DIFF" \
            --arg prompt "$GEMINI_PROMPT" \
            '{diff: $diff, prompt: $prompt}')

if [ $? -ne 0 ]; then
    echo "Errore nella creazione del payload JSON con jq." >&2
    echo "review_comment=\n**Errore:** Impossibile preparare i dati per il servizio Gemini."
    exit 1
fi

# Effettua la chiamata POST con l'header X-API-Key
RESPONSE=$(curl -s -f -X POST \
                -H "Content-Type: application/json" \
                -d "$PAYLOAD" \
                "$GEMINI_SERVICE_URL")

CURL_EXIT_CODE=$?

if [ $CURL_EXIT_CODE -ne 0 ]; then
    echo "Errore durante la chiamata al servizio Gemini (codice curl: $CURL_EXIT_CODE)." >&2
    ERROR_COMMENT="**Errore durante la review di Gemini:**
Non è stato possibile ottenere una review a causa di un problema di comunicazione con il servizio Gemini.
Codice di errore CURL: \`$CURL_EXIT_CODE\`
"
    if [ $CURL_EXIT_CODE -eq 22 ] && echo "$RESPONSE" | jq -e '.error' > /dev/null; then
        API_ERROR_MESSAGE=$(echo "$RESPONSE" | jq -r '.error')
        ERROR_COMMENT+="Dettagli: \`$API_ERROR_MESSAGE\`"
    fi
    echo "review_comment<<EOF"
    echo "$ERROR_COMMENT"
    echo "EOF"
    exit 1
fi

REVIEW_COMMENT=$(echo "$RESPONSE" | jq -r '.review_comment // "Nessun commento di review ricevuto dal servizio Gemini."')

if [ $? -ne 0 ]; then
    echo "Errore di decodifica JSON o campo 'review_comment' mancante nella risposta del servizio Gemini." >&2
    ERROR_COMMENT="**Errore durante la review di Gemini:**
Il servizio Gemini ha restituito una risposta non valida o incompleta.
"
    echo "review_comment<<EOF"
    echo "$ERROR_COMMENT"
    echo "EOF"
    exit 1
fi

FINAL_REVIEW_COMMENT="$REVIEW_COMMENT"

echo "review_comment<<EOF"
echo "$FINAL_REVIEW_COMMENT"
echo "EOF"