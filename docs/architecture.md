# Architecture Overview — AyeBae

Short summary:
- Auth/Profile Service — user accounts, auth, profile attributes, verification status.
- Matching Service — computes similarity scores and candidate lists.
- Room Service — session/room management for watch/listen parties and WebRTC signaling.
- Payments & Gifting — Stripe integration, subscription state, gift transactions.
- Verification Service — web-crawler and third-party verification pipelines.
- Notifications & Messaging — push/email templates and delivery logic.

Data stores:
- Postgres for core relational data
- Redis for caches and job queues
- Message broker (Redis/Kafka) for events and background processing

Realtime:
- WebRTC for media/chat and socket layer for sync messages

Design notes:
- Keep OAuth tokens encrypted and short-lived
- Matching supports both on-demand and batch recomputation
