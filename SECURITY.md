# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing the project maintainers at:

**security@ayebae.com** (or contact the repository owner directly)

### What to Include

When reporting a vulnerability, please include:

- **Type of vulnerability** (e.g., SQL injection, XSS, authentication bypass)
- **Full paths of source file(s)** related to the vulnerability
- **Location** of the affected source code (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact** of the issue, including how an attacker might exploit it
- **Any special configuration** required to reproduce the issue

### Response Timeline

We take all security vulnerabilities seriously and will respond to your report within:

- **48 hours**: Initial acknowledgment of your report
- **5 business days**: Preliminary assessment and validation
- **30 days**: Target for fix development and deployment

### What to Expect

1. **Acknowledgment**: We'll confirm receipt of your vulnerability report
2. **Validation**: We'll validate the vulnerability and determine its severity
3. **Fix Development**: We'll work on a fix and may ask for additional information
4. **Disclosure**: We'll coordinate disclosure timeline with you
5. **Credit**: If desired, we'll publicly credit you for responsible disclosure

## Security Best Practices

When deploying AyeBae, follow these security best practices:

### Environment Variables
- Never commit `.env` files to version control
- Use strong, randomly generated secrets for `JWT_SECRET`, `SESSION_SECRET`, etc.
- Rotate secrets regularly (at least quarterly)

### Database
- Use strong passwords for database connections
- Restrict database access to only necessary services
- Enable SSL/TLS for database connections in production
- Regularly backup data and test restore procedures

### API Keys & Tokens
- Store API keys (Stripe, OAuth providers) in secure environment variables
- Never expose API keys in client-side code
- Use separate keys for development, staging, and production
- Implement rate limiting on all API endpoints

### Authentication
- Enforce strong password policies (minimum 12 characters, complexity requirements)
- Implement multi-factor authentication (MFA) where possible
- Use secure session management with httpOnly and secure cookies
- Implement account lockout after multiple failed login attempts

### Dependencies
- Regularly update dependencies using `npm audit` and Dependabot
- Review security advisories for critical dependencies
- Pin dependency versions in production

### Network Security
- Always use HTTPS in production
- Implement proper CORS policies
- Use security headers (CSP, X-Frame-Options, etc.)
- Keep firewall rules restrictive

## Known Security Considerations

### Payment Processing
- We use Stripe for payment processing and do NOT store credit card information
- All payment data is transmitted directly to Stripe using their secure APIs
- PCI DSS compliance is handled by Stripe

### Data Privacy
- User passwords are hashed using bcrypt with appropriate salt rounds
- Sensitive user data is encrypted at rest
- We implement data retention policies and support GDPR data deletion requests

### Real-time Communication
- WebSocket connections use authentication tokens
- Room access is validated before establishing connections
- Rate limiting prevents abuse of real-time features

## Security Updates

We will announce security updates through:

- GitHub Security Advisories
- Release notes tagged with [SECURITY]
- Email notifications (for critical vulnerabilities)

## Contact

For general security questions or concerns, please reach out through:

- **Security email**: security@ayebae.com
- **GitHub Issues**: For non-sensitive security-related questions only

## Acknowledgments

We thank the security research community for responsible disclosure and helping keep AyeBae secure.
