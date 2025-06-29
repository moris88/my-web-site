#!/bin/bash
set -euo pipefail

PROMPT_FILE="review/gemini_instructions.md"

if [ -f "$PROMPT_FILE" ]; then
  {
    echo "prompt_content<<EOF"
    cat "$PROMPT_FILE"
    echo "EOF"
  }
else
  echo "::warning file=$PROMPT_FILE::Prompt file not found. Using default prompt."
  {
    echo "prompt_content<<EOF"
    echo "Perform a code review of the following diff. Identify potential bugs, performance improvements, code clarity, adherence to best practices, and suggest missing tests. Provide your suggestions in a concise and readable format."
    echo "EOF"
  }
fi
