# Contributing to NextJS Starter Template

Thank you for your interest in contributing to the NextJS Starter Template! This document provides guidelines and information for contributors.

**Created by [Rifat Hossain](https://linkedin.com/in/smrifat1411)** - Full-Stack Developer & Team Lead

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+ (recommended) or npm/yarn
- Git

### Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/smrifat1411/next-js-starter.git
   cd next-js-starter
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your local configuration
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

## 📝 How to Contribute

### Reporting Issues

- Use the GitHub issue tracker
- Provide a clear description of the issue
- Include steps to reproduce
- Add relevant screenshots or error messages
- Specify your environment (OS, Node.js version, etc.)

### Suggesting Features

- Open a GitHub issue with the "enhancement" label
- Describe the feature and its benefits
- Explain how it fits with the project's goals
- Consider implementation complexity

### Code Contributions

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation if needed
   - Ensure all tests pass

3. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎯 Development Guidelines

### Code Style

- **TypeScript**: Use strict mode, proper typing
- **ESLint**: Follow the configured rules
- **Prettier**: Use the configured formatting
- **Naming**: Use descriptive, consistent names

### Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── ui/             # Base UI components
│   ├── features/       # Feature-specific components
│   └── layout/         # Layout components
├── lib/                # Utilities and configurations
│   ├── api/           # API clients
│   ├── state/         # State management
│   ├── utils/         # Utility functions
│   └── validation/    # Validation schemas
├── types/              # TypeScript type definitions
├── config/             # Configuration files
└── styles/             # Global styles
```

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Maintenance tasks

### Testing

- **Unit Tests**: Use Jest and React Testing Library
- **E2E Tests**: Use Playwright
- **Coverage**: Maintain >80% test coverage
- **Run Tests**: `pnpm test`

### Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update CHANGELOG.md for user-facing changes
- Keep documentation up-to-date

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript type checking

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage
pnpm test:e2e         # Run E2E tests
```

## 🎨 Design Guidelines

### Components

- Use shadcn/ui as the base component library
- Follow atomic design principles
- Make components reusable and composable
- Include proper TypeScript types
- Add accessibility attributes

### Styling

- Use Tailwind CSS for styling
- Follow the design system tokens
- Ensure responsive design
- Maintain consistent spacing and typography

### State Management

- Use Zustand for global state
- Use TanStack Query for server state
- Keep state as close to usage as possible
- Avoid prop drilling

## 🚀 Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create a release PR
4. Merge after review
5. Create GitHub release
6. Publish to npm (if applicable)

## 📋 Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Commit messages follow conventional format
- [ ] PR description is clear and complete

## 🆘 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use GitHub Issues for bugs and features
- **Documentation**: Check the README and inline docs
- **Contact**: Reach out to [Rifat Hossain](https://linkedin.com/in/smrifat1411) for direct support

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to NextJS Starter Template! 🎉
