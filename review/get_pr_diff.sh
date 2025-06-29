#!/bin/bash
set -euo pipefail

# Recupera i riferimenti dal contesto GitHub Actions passati come parametri o env
BASE_REF="$1"
HEAD_REF="$2"

# Fai il diff fra base e head
DIFF=$(git diff "$BASE_REF" "$HEAD_REF" || true)

if [ -z "$DIFF" ]; then
  echo "::warning::No diff found for this PR. Gemini review will be skipped."
  echo "diff_output="
else
  # Output multi-linea in modo sicuro per GitHub Actions
  {
    echo "diff_output<<EOF"
    echo "$DIFF"
    echo "EOF"
  }
fi
