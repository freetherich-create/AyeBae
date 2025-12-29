param(
  [switch]$BringUpIntegration = $false
)

$fail = $false

if ($BringUpIntegration) {
  if (-not (Get-Command docker -ErrorAction SilentlyContinue)) { Write-Warning "Docker not found; skipping compose up." }
  else { docker compose -f "..\docker-compose.integration.yml" up -d }
}

Get-ChildItem -Path "services" -Directory | ForEach-Object {
  $d = $_.FullName
  if (Test-Path "$d/package.json") {
    Write-Host "Running tests in $d"
    Push-Location $d
    npm test || $fail = $true
    Pop-Location
  }
}

if ($fail) { Write-Error "Some service tests failed."; exit 1 } else { Write-Host "All service tests passed." }
