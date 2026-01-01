# AyeBae — Social & Shared Experience App

> A microservices-based matching app for shared experiences: watch parties, music listening, dating, gifting, and subscriptions.

## 🎯 Overview

AyeBae connects people through shared interests and real-time experiences. Whether you want to watch a movie together, listen to music simultaneously, go on a date, exchange gifts, or manage subscription-based interactions — AyeBae makes it seamless.

### Key Features

- **🎬 Watch Parties**: Sync video streaming across users for shared viewing experiences
- **🎵 Music Listen Parties**: Real-time synchronized audio playback for groups
- **💑 Matching & Dating**: Smart algorithm-based user matching for romantic connections
- **🎁 Gifting System**: Send and receive gifts within the platform
- **💳 Subscription Management**: Flexible payment tiers and recurring billing
- **🔐 Secure Authentication**: OAuth providers + email/password with JWT tokens
- **✅ Verification System**: User identity verification and trust scores

## 🏗️ Architecture

AyeBae is built as a microservices architecture with the following services:

- **Auth Service**: User authentication, signup/login, JWT management, profile handling
- **Matching Service**: Algorithm-based matching, preferences, compatibility scoring
- **Room Service**: Real-time watch/listen party management, WebSocket coordination
- **Payments Service**: Stripe integration, subscriptions, gift transactions
- **Verification Service**: ID verification, trust scores, moderation

See [`docs/architecture.md`](./docs/architecture.md) for the complete system design and [`docs/data-model.md`](./docs/data-model.md) for database schemas.

## 🚀 Tech Stack

- **Backend**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL with migrations
- **Real-time**: Socket.IO for watch/listen parties
- **Testing**: Mocha + Chai
- **CI/CD**: GitHub Actions
- **Containerization**: Docker + Docker Compose
- **Payments**: Stripe API

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- Docker & Docker Compose (optional but recommended)
- PostgreSQL (if running locally without Docker)
- Stripe account (for payment features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/freetherich-create/AyeBae.git
   cd AyeBae
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Bootstrap the project** (runs setup scripts)
   ```bash
   npm run bootstrap
   ```

5. **Start with Docker Compose** (recommended)
   ```bash
   docker-compose -f docker-compose.integration.yml up
   ```

   **OR run services individually:**
   ```bash
   npm run dev:auth      # Auth service on port 3001
   npm run dev:matching  # Matching service on port 3002
   npm run dev:room      # Room service on port 3003
   npm run dev:payments  # Payments service on port 3004
   npm run dev:verification  # Verification service on port 3005
   ```

## 🧪 Testing

Run all tests across services:
```bash
npm test
```

Run tests for a specific service:
```bash
cd services/auth
npm test
```

Run integration tests:
```bash
npm run test:integration
```

## 📝 Development Scripts

The project uses automation scripts located in `scripts/`:

- **`scripts/setup_local_dev.ps1`** (Windows) / **`scripts/setup_local_dev.sh`** (Mac/Linux): Initialize local dev environment
- **`scripts/run_tests.ps1`** (Windows) / **`scripts/run_tests.sh`** (Mac/Linux): Run tests for all services
- **`scripts/create_repo.ps1`** (Windows) / **`scripts/create_repo.sh`** (Mac/Linux): Create GitHub repo and push

### Available NPM Scripts

#### Bootstrap & Setup
- `npm run bootstrap` - Full setup: install deps, build, and initialize

#### Development
- `npm run dev` - Start all services in development mode
- `npm run dev:auth` - Start auth service only
- `npm run dev:matching` - Start matching service only
- `npm run dev:room` - Start room service only
- `npm run dev:payments` - Start payments service only
- `npm run dev:verification` - Start verification service only

#### Testing
- `npm test` - Run all service tests
- `npm run test:unit` - Run unit tests only
- `npm run test:integration` - Run integration tests
- `npm run test:watch` - Run tests in watch mode

#### Linting & Formatting
- `npm run lint` - Check code style with ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier

## 📂 Project Structure

```
AyeBae/
├── .github/
│   └── workflows/
│       └── nodejs-ci.yml      # CI/CD pipeline
├── docs/
│   ├── architecture.md         # System architecture overview
│   └── data-model.md           # Database schemas and relationships
├── scripts/
│   ├── setup_local_dev.ps1/.sh # Local dev setup automation
│   ├── run_tests.ps1/.sh       # Test runner script
│   └── create_repo.ps1/.sh     # GitHub repo creation script
├── services/
│   ├── auth/                   # Authentication & user management
│   ├── matching/               # User matching algorithm
│   ├── payments/               # Stripe payments & subscriptions
│   ├── room/                   # Watch/listen party management
│   └── verification/           # User verification & trust scores
├── .env.example                # Environment variable template
├── .gitignore
├── docker-compose.integration.yml
├── package.json
└── README.md
```

Each service follows this structure:
```
services/<service-name>/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
├── test/
├── README.md                   # Service-specific documentation
├── package.json
└── package-lock.json
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

All PRs must:
- Pass CI checks (tests + linting)
- Include tests for new features
- Follow existing code style
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Documentation**: [`/docs`](./docs)
- **Service Details**: See individual `services/*/README.md` files
- **Issues**: [GitHub Issues](https://github.com/freetherich-create/AyeBae/issues)
- **Discussions**: [GitHub Discussions](https://github.com/freetherich-create/AyeBae/discussions)

## 📧 Contact

For questions or support, open an issue or reach out via GitHub discussions.

---

Made with ❤️ by the AyeBae team
