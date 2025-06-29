#!/bin/bash
set -euo pipefail

GEMINI_API_KEY=$1

BASE_BRANCH=$(jq -r '.pull_request.base.ref' "$GITHUB_EVENT_PATH")
HEAD_BRANCH=$(jq -r '.pull_request.head.ref' "$GITHUB_EVENT_PATH")

git fetch origin "$BASE_BRANCH"
git fetch origin "$HEAD_BRANCH"
git checkout "$HEAD_BRANCH"

DIFF=$(git diff origin/"$BASE_BRANCH"...origin/"$HEAD_BRANCH")

if [ -z "$DIFF" ]; then
  echo "No differences found between $BASE_BRANCH and $HEAD_BRANCH."
  echo "## Code Review Report\nNo changes detected." > review.txt
  exit 0
fi

MAX_LENGTH=10000
if [ ${#DIFF} -gt $MAX_LENGTH ]; then
  echo "Diff too large (${#DIFF} chars), skipping automated review."
  echo "Diff too large (${#DIFF} chars), skipping automated review." > review.txt
  echo "{}" > full_response.json
  exit 0
fi

PROMPT_FILE="scripts/gemini_instructions.md"
if [ ! -f "$PROMPT_FILE" ]; then
  echo "::warning file=$PROMPT_FILE::Prompt file not found, using default prompt."
  PROMPT="You are an expert developer performing a code review of the following diff:\n$DIFF"
else
  export DIFF  # rende la variabile disponibile a `envsubst`
  PROMPT=$(envsubst '$DIFF' < "$PROMPT_FILE")
fi

ESCAPED_PROMPT=$(printf '%s' "$PROMPT" | jq -Rs .)
# Prepare JSON payload for Gemini API (esempio generico, adattare secondo doc Gemini)
PAYLOAD=$(jq -nc --arg prompt "$ESCAPED_PROMPT" '
{
  "contents": [
    {
      "parts": [
        {
          "text": $prompt
        }
      ]
    }
  ],
}')

FULL_RESPONSE=$(curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

echo "$FULL_RESPONSE" > full_response.json

# Estrai il testo generato (adatta il path JSON secondo Gemini)
REVIEW=$(echo "$FULL_RESPONSE" | jq -r '.candidates[0].content.parts[0].text // empty')

if [ -z "$REVIEW" ]; then
  ERROR_MSG=$(echo "$FULL_RESPONSE" | jq -r '.error.message // "Unknown error"')
  echo "Gemini API error: $ERROR_MSG"
  exit 1
fi

cat <<EOF > review.txt
## Code Review Report

$REVIEW
EOF
