// Pages configuration for Next.js App Router
export const PAGES_CONFIG = {
  // Route groups and their settings
  ROUTE_GROUPS: {
    '(dashboard)': {
      LAYOUT: 'dashboard',
      PROTECTED: true,
      REQUIRES_AUTH: true,
      REDIRECT_IF_UNAUTHENTICATED: '/auth/login',
    },
    '(auth)': {
      LAYOUT: 'auth',
      PROTECTED: false,
      REQUIRES_AUTH: false,
      REDIRECT_IF_AUTHENTICATED: '/dashboard',
    },
    '(marketing)': {
      LAYOUT: 'marketing',
      PROTECTED: false,
      REQUIRES_AUTH: false,
    },
  },

  // Page-specific configurations
  PAGES: {
    '/': {
      TITLE: 'Home',
      DESCRIPTION: 'Welcome to NextJS Starter',
      LAYOUT: 'marketing',
      PROTECTED: false,
      METADATA: {
        TITLE: 'Home | NextJS Starter',
        DESCRIPTION: 'A modern Next.js starter template',
        KEYWORDS: 'nextjs, react, typescript',
      },
    },
    '/dashboard': {
      TITLE: 'Dashboard',
      DESCRIPTION: 'User dashboard',
      LAYOUT: 'dashboard',
      PROTECTED: true,
      REQUIRES_AUTH: true,
      METADATA: {
        TITLE: 'Dashboard | NextJS Starter',
        DESCRIPTION: 'User dashboard and analytics',
        KEYWORDS: 'dashboard, analytics, user',
      },
    },
    '/profile': {
      TITLE: 'Profile',
      DESCRIPTION: 'User profile',
      LAYOUT: 'dashboard',
      PROTECTED: true,
      REQUIRES_AUTH: true,
      METADATA: {
        TITLE: 'Profile | NextJS Starter',
        DESCRIPTION: 'User profile and settings',
        KEYWORDS: 'profile, user, settings',
      },
    },
    '/auth/login': {
      TITLE: 'Login',
      DESCRIPTION: 'User login',
      LAYOUT: 'auth',
      PROTECTED: false,
      REQUIRES_AUTH: false,
      REDIRECT_IF_AUTHENTICATED: '/dashboard',
      METADATA: {
        TITLE: 'Login | NextJS Starter',
        DESCRIPTION: 'Sign in to your account',
        KEYWORDS: 'login, signin, auth',
      },
    },
    '/auth/register': {
      TITLE: 'Register',
      DESCRIPTION: 'User registration',
      LAYOUT: 'auth',
      PROTECTED: false,
      REQUIRES_AUTH: false,
      REDIRECT_IF_AUTHENTICATED: '/dashboard',
      METADATA: {
        TITLE: 'Register | NextJS Starter',
        DESCRIPTION: 'Create a new account',
        KEYWORDS: 'register, signup, auth',
      },
    },
  },

  // Dynamic route configurations
  DYNAMIC_ROUTES: {
    '/users/[id]': {
      TITLE: 'User Profile',
      DESCRIPTION: 'User profile page',
      LAYOUT: 'dashboard',
      PROTECTED: true,
      REQUIRES_AUTH: true,
      GENERATE_STATIC_PARAMS: true,
      METADATA: {
        TITLE: 'User Profile | NextJS Starter',
        DESCRIPTION: 'User profile and information',
      },
    },
    '/posts/[slug]': {
      TITLE: 'Post',
      DESCRIPTION: 'Blog post page',
      LAYOUT: 'marketing',
      PROTECTED: false,
      GENERATE_STATIC_PARAMS: true,
      METADATA: {
        TITLE: 'Post | NextJS Starter',
        DESCRIPTION: 'Blog post content',
      },
    },
  },

  // Error pages
  ERROR_PAGES: {
    '/404': {
      TITLE: 'Page Not Found',
      DESCRIPTION: 'The page you are looking for does not exist',
      LAYOUT: 'error',
      PROTECTED: false,
      METADATA: {
        TITLE: '404 - Page Not Found | NextJS Starter',
        DESCRIPTION: 'The page you are looking for does not exist',
        ROBOTS: 'noindex, nofollow',
      },
    },
    '/500': {
      TITLE: 'Server Error',
      DESCRIPTION: 'Something went wrong on our end',
      LAYOUT: 'error',
      PROTECTED: false,
      METADATA: {
        TITLE: '500 - Server Error | NextJS Starter',
        DESCRIPTION: 'Something went wrong on our end',
        ROBOTS: 'noindex, nofollow',
      },
    },
  },

  // Loading states
  LOADING: {
    DEFAULT: {
      SPINNER: true,
      SKELETON: false,
      MESSAGE: 'Loading...',
    },
    DASHBOARD: {
      SPINNER: false,
      SKELETON: true,
      MESSAGE: 'Loading dashboard...',
    },
    AUTH: {
      SPINNER: true,
      SKELETON: false,
      MESSAGE: 'Authenticating...',
    },
  },

  // Redirects
  REDIRECTS: {
    '/home': '/',
    '/signin': '/auth/login',
    '/signup': '/auth/register',
    '/admin': '/dashboard',
  },

  // Middleware configuration
  MIDDLEWARE: {
    AUTH_REQUIRED_PATHS: ['/dashboard', '/profile', '/settings'],
    GUEST_ONLY_PATHS: ['/auth/login', '/auth/register'],
    PUBLIC_PATHS: ['/', '/about', '/contact'],
  },
} as const;
