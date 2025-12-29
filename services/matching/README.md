# Matching Service

Responsibilities:
- Compute similarity scores and return ranked candidate lists
- Support re-scoring jobs and incremental updates

Scoring (example):
- Shared interests: weight 0.5
- Same school: weight 0.2
- Recent activity: weight 0.2
- Positive interactions: weight 0.1

Testing tips:
- Add deterministic unit tests for score computation
- Add integration tests that simulate profile updates and cache refresh
