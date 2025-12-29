param(
  [ValidateSet('public','private')]
  [string]$Visibility = 'public',
  [string]$Repo = 'freetherich-create/AyeBae'
)

function Ensure-Gh {
  if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI 'gh' not found. Install from https://cli.github.com/ and run 'gh auth login' before proceeding."
    exit 2
  }
}

Ensure-Gh

# Check auth
$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "GitHub CLI not authenticated. Running 'gh auth login' now..."
  gh auth login
  if ($LASTEXITCODE -ne 0) { Write-Error "Authentication failed or aborted."; exit 3 }
}

# Create repo
Write-Host "Creating repository $Repo (visibility=$Visibility) and pushing current branch..."
$cmd = "gh repo create $Repo --$Visibility --source=. --remote=origin --push"
Invoke-Expression $cmd
if ($LASTEXITCODE -ne 0) {
  Write-Error "Failed to create or push repo. See above output for details."; exit 4
}

Write-Host "Repository created and pushed. Opening repo page..."
gh repo view $Repo --web

# Optionally set secrets from environment variables
$setSecrets = Read-Host "Would you like to add common secrets from env vars (JWT_SECRET, STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET)? (y/N)"
if ($setSecrets -match '^(y|Y)') {
  if ($env:JWT_SECRET) { gh secret set JWT_SECRET -b"$env:JWT_SECRET" }
  if ($env:STRIPE_API_KEY) { gh secret set STRIPE_API_KEY -b"$env:STRIPE_API_KEY" }
  if ($env:STRIPE_WEBHOOK_SECRET) { gh secret set STRIPE_WEBHOOK_SECRET -b"$env:STRIPE_WEBHOOK_SECRET" }
  Write-Host "Secrets set if corresponding env vars existed.";
}

Write-Host "Done."