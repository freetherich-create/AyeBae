param(
  [switch]$BringUpIntegration = $false
)

Write-Host "Bootstrapping local development: installing per-service dependencies..."
Get-ChildItem -Path "services" -Directory | ForEach-Object {
  $d = $_.FullName
  Write-Host "Installing in $d"
  Push-Location $d
  # Prefer npm ci if package-lock exists, otherwise npm install
  if (Test-Path package-lock.json) { npm ci } else { npm install }
  Pop-Location
}

if ($BringUpIntegration) {
  if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Warning "Docker not found; skipping integration services bring-up."
  } else {
    docker compose -f "..\docker-compose.integration.yml" up -d
  }
}

Write-Host "Bootstrap complete."