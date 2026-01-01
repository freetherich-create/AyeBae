# Contributing to AyeBae

Thank you for your interest in contributing to AyeBae! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**: `npm ci`
3. **Set up environment**: Copy `.env.example` to `.env` and configure
4. **Run the project**: `npm run bootstrap` then `npm run dev`
5. **Run tests**: `npm test` to ensure everything works

## Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-matching-algorithm`)
- `fix/` - Bug fixes (e.g., `fix/auth-token-expiry`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)
- `docs/` - Documentation updates (e.g., `docs/api-endpoints`)

### Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our [coding standards](#coding-standards)

3. Write or update tests for your changes

4. Run tests locally:
   ```bash
   npm test
   npm run lint
   ```

5. Commit your changes with clear, descriptive messages:
   ```bash
   git commit -m "feat(matching): add compatibility scoring algorithm"
   ```

### Commit Message Format

We follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Example:**
```
feat(auth): add OAuth2 Google provider

Implements Google OAuth2 authentication flow with JWT token generation.

Closes #123
```

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add tests** for new features or bug fixes
3. **Ensure CI passes** - All tests and lint checks must pass
4. **Update the README** if adding new features or changing setup
5. **Request review** from at least one maintainer

### PR Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's coding standards
- [ ] All tests pass locally (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] New features have corresponding tests
- [ ] Documentation is updated
- [ ] Commit messages follow conventional commits format
- [ ] Branch is up to date with `main`

## Coding Standards

### JavaScript/Node.js Style

- Use **ES6+ syntax** (async/await, arrow functions, etc.)
- Follow **ESLint** configuration (run `npm run lint`)
- Use **2 spaces** for indentation
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes
- Add **JSDoc comments** for public functions

### File Organization

Each service should follow this structure:
```
services/<service-name>/
├── src/
│   ├── routes/          # Express route handlers
│   ├── controllers/     # Business logic
│   ├── models/          # Database models
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── index.js         # Entry point
├── test/
│   ├── unit/            # Unit tests
│   └── integration/     # Integration tests
├── README.md            # Service documentation
└── package.json
```

## Testing Requirements

### Unit Tests

- Write unit tests for all business logic
- Use **Mocha + Chai** for testing
- Aim for **>80% code coverage**
- Mock external dependencies

### Integration Tests

- Test API endpoints end-to-end
- Test service interactions
- Use test databases (never production)

### Running Tests

```bash
# Run all tests
npm test

# Run tests for specific service
cd services/auth && npm test

# Run tests in watch mode
npm run test:watch

# Run integration tests
npm run test:integration
```

## Questions?

If you have questions:

- Open a [GitHub Discussion](https://github.com/freetherich-create/AyeBae/discussions)
- Check existing [Issues](https://github.com/freetherich-create/AyeBae/issues)
- Reach out to maintainers

Thank you for contributing to AyeBae! 🎉
