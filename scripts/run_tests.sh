#!/usr/bin/env bash
set -euo pipefail
FAILED=0
for d in services/*; do
  if [ -f "$d/package.json" ]; then
    echo "Running tests in $d"
    pushd "$d" >/dev/null
    if ! npm test; then FAILED=1; fi
    popd >/dev/null
  fi
done
if [ "$FAILED" -ne 0 ]; then
  echo "Some service tests failed." >&2
  exit 1
else
  echo "All service tests passed."
fi