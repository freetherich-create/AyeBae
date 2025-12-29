# Data Model — AyeBae (high level)

Entities:
- User: id, email, display_name, purpose (movies|music|dating), interests (array of tags), school, hobbies, verification_status, subscription_status
- Profile: user_id, photos, bio, preferences
- Match: user_a, user_b, score, last_scored_at
- Room: id, host_id, type (watch|listen), participants[], media_id, media_provider, started_at
- Gift: id, sender_id, receiver_id, item_type, metadata, created_at
- Payment: id, stripe_payment_id, user_id, amount, status, created_at

Indexes & caching:
- Index interests and purpose for fast discovery
- Cache per-user candidate lists in Redis with TTL
