# Payments & Gifting Service

Responsibilities:
- Stripe subscription management (7-day trial, $9.99/month)
- Gift issuance & ledger
- Webhook handling and reconciliation

Local testing:
- Use `stripe listen` to forward webhooks to local dev environment
- Keep idempotency keys for safe retries

Notes:
- Never store raw card data; rely on Stripe tokens
- Persist transactions in Postgres and surface to admin UI for disputes
