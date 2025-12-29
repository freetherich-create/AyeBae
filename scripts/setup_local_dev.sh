#!/usr/bin/env bash
set -euo pipefail

echo "Bootstrapping local development: installing per-service dependencies..."
for d in services/*; do
  if [ -d "$d" ] && [ -f "$d/package.json" ]; then
    echo "Installing in $d"
    pushd "$d" >/dev/null
    if [ -f package-lock.json ]; then npm ci; else npm install; fi
    popd >/dev/null
  fi
done

echo "To bring up integration (Postgres/Redis) run: docker compose -f docker-compose.integration.yml up -d"
echo "Bootstrap complete."