# Next.js Starter Template

A modern, production-ready Next.js starter template with all the essentials you need to build amazing applications.

**Created by [Rifat Hossain](https://linkedin.com/in/smrifat1411)** - Full-Stack Developer & Team Lead

## 🚀 Features

- **Next.js 15** - Latest Next.js with App Router, Turbopack, and React 19
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components built with Radix UI
- **Custom Hooks** - Reusable React hooks for common functionality
- **Utility Functions** - Helper functions for formatting, validation, etc.
- **Route Groups** - Organized routing with Next.js App Router
- **Responsive Design** - Mobile-first approach
- **ESLint + Prettier** - Code linting and formatting
- **Modern Structure** - Clean, scalable folder organization

## 📦 What's Included

### Project Structure

```
next-js-starter/
├── .env.example                    # Environment variables template
├── .env.local                      # Local environment variables
├── .gitignore                      # Git ignore rules
├── .prettierrc                     # Prettier configuration
├── .husky/                         # Git hooks
│   └── pre-commit
├── components.json                  # shadcn/ui configuration
├── docker-compose.yml              # Docker development setup
├── Dockerfile                      # Docker production image
├── eslint.config.mjs               # ESLint configuration
├── jest.config.js                  # Jest testing configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── playwright.config.ts            # E2E testing configuration
├── postcss.config.mjs              # PostCSS configuration
├── prisma/                         # Database schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── public/                         # Static assets
│   ├── icons/
│   ├── images/
│   └── favicon.ico
├── README.md                       # Project documentation
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── src/
    ├── app/                        # App Router (Next.js 13+)
    │   ├── (auth)/                 # Route groups
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── register/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── (dashboard)/            # Protected routes
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── profile/
    │   │   │   └── page.tsx
    │   │   ├── settings/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── api/                    # API routes
    │   │   ├── auth/
    │   │   │   ├── login/
    │   │   │   │   └── route.ts
    │   │   │   └── register/
    │   │   │       └── route.ts
    │   │   └── users/
    │   │       └── route.ts
    │   ├── globals.css              # Global styles
    │   ├── layout.tsx              # Root layout
    │   ├── loading.tsx             # Global loading UI
    │   ├── not-found.tsx           # 404 page
    │   ├── error.tsx               # Error boundary
    │   └── page.tsx                # Home page
    ├── components/                 # Reusable components
    │   ├── ui/                     # Base UI components (shadcn/ui)
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── input.tsx
    │   │   ├── dialog.tsx
    │   │   ├── select.tsx
    │   │   ├── table.tsx
    │   │   └── index.ts            # Re-export all UI components
    │   ├── forms/                  # Form components
    │   │   ├── login-form.tsx
    │   │   ├── register-form.tsx
    │   │   ├── profile-form.tsx
    │   │   └── index.ts
    │   ├── layout/                 # Layout components
    │   │   ├── header.tsx
    │   │   ├── footer.tsx
    │   │   ├── sidebar.tsx
    │   │   ├── navigation.tsx
    │   │   └── index.ts
    │   ├── features/              # Feature-specific components
    │   │   ├── auth/
    │   │   │   ├── auth-button.tsx
    │   │   │   ├── auth-guard.tsx
    │   │   │   └── index.ts
    │   │   ├── dashboard/
    │   │   │   ├── stats-card.tsx
    │   │   │   ├── activity-feed.tsx
    │   │   │   └── index.ts
    │   │   └── users/
    │   │       ├── user-card.tsx
    │   │       ├── user-list.tsx
    │   │       └── index.ts
    │   └── common/                # Common components
    │       ├── loading-spinner.tsx
    │       ├── error-boundary.tsx
    │       ├── page-header.tsx
    │       └── index.ts
    ├── hooks/                     # Custom React hooks
    │   ├── api/                   # API-related hooks
    │   │   ├── use-auth.ts
    │   │   ├── use-users.ts
    │   │   └── index.ts
    │   ├── ui/                    # UI-related hooks
    │   │   ├── use-theme.ts
    │   │   ├── use-toast.ts
    │   │   ├── use-local-storage.ts
    │   │   └── index.ts
    │   └── index.ts               # Re-export all hooks
    ├── lib/                       # Utilities and configurations
    │   ├── auth/                  # Authentication utilities
    │   │   ├── config.ts
    │   │   ├── middleware.ts
    │   │   └── index.ts
    │   ├── api/                   # API utilities
    │   │   ├── client.ts
    │   │   ├── endpoints.ts
    │   │   ├── interceptors.ts
    │   │   └── index.ts
    │   ├── db/                    # Database utilities
    │   │   ├── prisma.ts
    │   │   ├── seed.ts
    │   │   └── index.ts
    │   ├── utils/                 # General utilities
    │   │   ├── cn.ts
    │   │   ├── format.ts
    │   │   ├── validation.ts
    │   │   └── index.ts
    │   ├── stores/               # State management
    │   │   ├── auth-store.ts
    │   │   ├── ui-store.ts
    │   │   └── index.ts
    │   ├── providers/            # React providers
    │   │   ├── query-provider.tsx
    │   │   ├── theme-provider.tsx
    │   │   ├── auth-provider.tsx
    │   │   └── index.ts
    │   └── config/               # Configuration files
    │       ├── env.ts
    │       ├── constants.ts
    │       └── index.ts
    ├── server/                   # Server-side logic (NEW!)
    │   ├── actions/              # Server Actions
    │   │   ├── auth.ts
    │   │   ├── users.ts
    │   │   └── index.ts
    │   ├── services/             # Server services
    │   │   ├── auth-service.ts
    │   │   ├── user-service.ts
    │   │   └── index.ts
    │   └── middleware.ts         # Next.js middleware
    ├── contexts/                 # React Context providers (NEW!)
    │   ├── auth-context.tsx
    │   ├── theme-context.tsx
    │   └── index.ts
    ├── types/                    # TypeScript type definitions
    │   ├── api.ts               # API types
    │   ├── auth.ts              # Authentication types
    │   ├── user.ts              # User types
    │   ├── common.ts            # Common types
    │   └── index.ts             # Re-export all types
    ├── styles/                  # Styles and themes
    │   ├── globals.css
    │   ├── components.css
    │   └── themes/
    │       ├── light.css
    │       └── dark.css
    └── __tests__/               # Test files
        ├── components/
        ├── hooks/
        ├── lib/
        └── setup.ts
```

### Components

- **UI Components**: Button, Card, Input, Dialog, Select, Table (shadcn/ui)
- **Form Components**: Login form with React Hook Form + Zod validation
- **Layout Components**: Header, Footer, Sidebar, Navigation
- **Feature Components**: Auth button, Stats card, User card
- **Common Components**: Loading spinner, Error boundary, Page header

### Hooks

- **API Hooks**: useAuth, useUsers (with React Query)
- **UI Hooks**: useLocalStorage, useTheme, useToast

### Utilities

- **cn**: Class name utility for conditional styling
- **format**: Date, currency, number, and text formatting functions
- **API Client**: Axios client with interceptors
- **Auth Config**: JWT, OAuth, session settings

### State Management

- **Zustand Stores**: Auth store with persistence
- **React Context**: Auth context provider
- **React Query**: Data fetching and caching

### Server-Side

- **Server Actions**: Auth actions with form handling
- **Server Services**: User service with database operations
- **Middleware**: Next.js middleware for route protection

### Types

- **API Types**: Response, pagination, error interfaces
- **Auth Types**: User, session, credentials interfaces
- **Common Types**: Theme, notification, form field interfaces

### Testing

- **Component Tests**: Button component with Jest + Testing Library
- **Hook Tests**: useLocalStorage hook testing
- **Utility Tests**: Format utility function testing

### CI/CD

- **GitHub Actions** - Simple CI pipeline with testing and security
- **Automated Testing** - Unit and E2E tests
- **Security Audit** - Dependency vulnerability scanning

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd next-js-starter
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Customization

### Theme

The template includes a built-in theme system with light/dark mode support. You can customize colors in `src/app/globals.css`.

### Components

All UI components are built with shadcn/ui and can be customized by modifying the component files in `src/components/ui/`.

### State Management

Zustand stores are located in `src/lib/stores/`. You can add new stores or modify existing ones as needed.

### API Integration

API utilities are in `src/lib/api.ts`. You can modify the base URL, add interceptors, or customize error handling.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### TypeScript

TypeScript configuration is in `tsconfig.json`. Path aliases are configured for easy imports.

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js`. Custom colors and utilities can be added here.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rifat Hossain** - Full-Stack Developer & Team Lead

- 📧 Email: [smrifat1411@gmail.com](mailto:smrifat1411@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/smrifat1411](https://linkedin.com/in/smrifat1411)
- 📱 Phone: +8801312994785
- 📍 Location: Sylhet, Bangladesh

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Vercel](https://vercel.com) for hosting and deployment
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) team for the utility-first CSS framework
- [Zustand](https://zustand-demo.pmnd.rs) team for the simple state management
- [TanStack](https://tanstack.com) team for React Query

---

**Happy coding! 🚀**
