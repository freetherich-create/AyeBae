# Room Service

Responsibilities:
- Create and manage watch/listen sessions
- WebRTC signaling and media-sync clock
- Participant join/leave and event logging

Sync protocol:
- Use a single authoritative media-clock from the host
- Emit `sync` messages over socket with timestamp and playback position
- Account for clock drift by periodically re-syncing

Testing tips:
- Simulate network jitter and verify playback stays within allowed drift (e.g., 200ms)
