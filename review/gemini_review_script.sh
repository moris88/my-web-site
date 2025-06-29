#!/bin/bash

# Abilita il tracciamento degli errori
set -e

# Recupera il diff e il prompt dagli argomenti passati allo script
# $1 sarà il diff, $2 sarà il prompt
PR_DIFF="$1"
GEMINI_PROMPT="$2"

# URL del tuo servizio intermedio Gemini (presa dalle variabili d'ambiente)
GEMINI_SERVICE_URL="$GEMINI_REVIEW_SERVICE_URL"

if [ -z "$GEMINI_SERVICE_URL" ]; then
    echo "Errore: GEMINI_REVIEW_SERVICE_URL non configurato." >&2 # Stampa su stderr
    exit 1
fi

if [ -z "$PR_DIFF" ]; then
    echo "Nessun diff fornito, saltando la review di Gemini." >&2
    # Stampa un output vuoto per review_comment per non creare il commento
    echo "review_comment="
    exit 0
fi

# Prepara il payload JSON da inviare al tuo servizio intermedio
# Usiamo `jq` per creare il JSON in modo sicuro e gestire l'escape dei caratteri
# Nota: `jq` deve essere disponibile sul runner, ma è preinstallato su Ubuntu runners.
PAYLOAD=$(jq -n \
            --arg diff "$PR_DIFF" \
            --arg prompt "$GEMINI_PROMPT" \
            '{diff: $diff, prompt: $prompt}')

if [ $? -ne 0 ]; then
    echo "Errore nella creazione del payload JSON con jq." >&2
    echo "review_comment=\n**Errore:** Impossibile preparare i dati per il servizio Gemini."
    exit 1
fi

# Effettua la chiamata POST al tuo servizio intermedio usando `curl`
# `-s` per la modalità silenziosa, `-f` per fallire in caso di errore HTTP
RESPONSE=$(curl -s -f -X POST -H "Content-Type: application/json" \
                -d "$PAYLOAD" \
                "$GEMINI_SERVICE_URL")

CURL_EXIT_CODE=$?

if [ $CURL_EXIT_CODE -ne 0 ]; then
    echo "Errore durante la chiamata al servizio Gemini (codice curl: $CURL_EXIT_CODE)." >&2
    # In caso di errore HTTP o di rete, stampa un commento di errore
    ERROR_COMMENT="**Errore durante la review di Gemini:**
Non è stato possibile ottenere una review a causa di un problema di comunicazione con il servizio Gemini.
Codice di errore CURL: \`$CURL_EXIT_CODE\`
"
    echo "review_comment<<EOF"
    echo "$ERROR_COMMENT"
    echo "EOF"
    exit 1
fi

# Estrai il commento di review dalla risposta JSON usando `jq`
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

# Aggiungiamo il marcatore HTML all'inizio del commento
FINAL_REVIEW_COMMENT="$REVIEW_COMMENT"

# Stampa il risultato su stdout. GitHub Actions catturerà questo output.
# L'output verrà poi accessibile tramite steps.gemini_review.outputs.review_comment
echo "review_comment<<EOF"
echo "$FINAL_REVIEW_COMMENT"
echo "EOF"