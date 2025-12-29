# Copilot instructions — AyeBae

Purpose: Give AI agents the concrete repo-specific context to be helpful.

Quick checklist:
- See `docs/architecture.md` and `docs/data-model.md` for the big picture.
- Check `services/*/README.md` for responsibilities and local commands.
- Copy `.env.example` to `.env` and add test credentials (never commit secrets).

Project specifics:
- Services: `auth`, `matching`, `room`, `payments`, `verification` (see `services/` folder).
- Matching: weights live in `services/matching/README.md`; write deterministic unit tests for scoring.
- Media sync: `services/room/README.md` explains the authoritative media-clock approach.

Common commands:
- Install deps: `npm ci` at repo root (or per-service where appropriate).
- Run tests: `npm run test` (add service-specific tests inside each service folder).
- Local webhook testing: use `stripe listen` and forward to `services/payments`.

Integration notes:
- OAuth flows: use `SPOTIFY_CLIENT_*` and `HULU_CLIENT_*` env vars. Respect provider rate limits.
- Subscriptions: implement 7-day trial using Stripe subscriptions + trial period; handle webhooks for state transitions.

Agent guidance:
- Add or modify code with unit tests and integration tests; if adding env vars, update `.env.example`.
- Focus PRs: update tests and README changes together; include reproducible steps to run newly added integration tests.

Merge guidance:
- Preserve local examples and expand the `services/*/README.md` with concrete file references if you add behavior.
