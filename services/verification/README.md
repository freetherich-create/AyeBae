# Verification Service

Responsibilities:
- Orchestrate web-crawler checks and third-party verification (Onfido/etc.)
- Queue manual review tasks when heuristics flag anomalies
- Provide verification metadata to Profile Service

Design notes:
- Keep scraped data transient (avoid storing PII unless necessary)
- Rate limit crawlers and use separate credentials for scraping
