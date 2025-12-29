#!/usr/bin/env bash
set -euo pipefail
VIS=${1:-public}
REPO=${2:-freetherich-create/AyeBae}

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI not found. Install from https://cli.github.com/ and run 'gh auth login' before proceeding." >&2
  exit 2
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Not authenticated. Run 'gh auth login' to authenticate." >&2
  exit 3
fi

echo "Creating $REPO (visibility=$VIS) and pushing current branch..."
gh repo create $REPO --$VIS --source=. --remote=origin --push

echo "Repository created. Opening in browser..."
gh repo view $REPO --web

echo "Done."