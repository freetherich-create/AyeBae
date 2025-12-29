# Auth Service

Responsibilities:
- Signup / Login (email, OAuth providers)
- Profile management
- JWT issuance and refresh
- Verification status integration (read-only view)

Key files:
- `src/routes/auth.js` — auth endpoints
- `src/models/user.js` — user schema

Local commands:
- `npm run start` — start service
- `npm run test` — run service tests

Notes:
- Use `JWT_SECRET` in `.env`
- Persist sessions in Postgres and cache session state in Redis if needed
