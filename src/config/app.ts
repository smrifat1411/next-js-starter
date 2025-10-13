// Next.js App Router configuration
export const APP_CONFIG = {
  // App Router settings
  ROUTER: {
    PREFETCH: process.env.NEXT_PUBLIC_PREFETCH_ENABLED === 'true',
    SCROLL_RESTORATION:
      process.env.NEXT_PUBLIC_SCROLL_RESTORATION_ENABLED === 'true',
    COMPRESSION: process.env.NEXT_PUBLIC_COMPRESSION_ENABLED === 'true',
  },

  // Page settings
  PAGES: {
    HOME: '/',
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    NOT_FOUND: '/404',
    ERROR: '/500',
  },

  // Layout settings
  LAYOUT: {
    HEADER_HEIGHT: 64,
    SIDEBAR_WIDTH: 256,
    FOOTER_HEIGHT: 48,
    CONTAINER_MAX_WIDTH: 1200,
    CONTENT_PADDING: 24,
  },

  // App metadata
  METADATA: {
    TITLE: process.env.NEXT_PUBLIC_APP_TITLE || 'NextJS Starter',
    DESCRIPTION:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
      'A modern Next.js starter template',
    KEYWORDS:
      process.env.NEXT_PUBLIC_APP_KEYWORDS ||
      'nextjs, react, typescript, tailwind',
    AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR || 'Your Name',
    VIEWPORT: 'width=device-width, initial-scale=1',
    THEME_COLOR: process.env.NEXT_PUBLIC_THEME_COLOR || '#3b82f6',
    MANIFEST: '/manifest.json',
    ICONS: {
      APPLE: '/apple-touch-icon.png',
      FAVICON: '/favicon.ico',
      ICON: '/icon.png',
    },
  },

  // Navigation settings
  NAVIGATION: {
    MAIN_MENU: [
      { label: 'Home', href: '/', icon: 'home' },
      { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
      { label: 'Profile', href: '/profile', icon: 'user' },
      { label: 'Settings', href: '/settings', icon: 'settings' },
    ],
    FOOTER_MENU: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Contact', href: '/contact' },
    ],
    BREADCRUMB_ENABLED: process.env.NEXT_PUBLIC_BREADCRUMB_ENABLED === 'true',
  },

  // Loading states
  LOADING: {
    SPINNER_SIZE: 32,
    SPINNER_COLOR: '#3b82f6',
    SKELETON_ENABLED: process.env.NEXT_PUBLIC_SKELETON_ENABLED === 'true',
    PROGRESS_BAR_ENABLED:
      process.env.NEXT_PUBLIC_PROGRESS_BAR_ENABLED === 'true',
  },

  // Error handling
  ERROR: {
    BOUNDARY_ENABLED: process.env.NEXT_PUBLIC_ERROR_BOUNDARY_ENABLED === 'true',
    REPORTING_ENABLED:
      process.env.NEXT_PUBLIC_ERROR_REPORTING_ENABLED === 'true',
    FALLBACK_PAGE: '/500',
    RETRY_ATTEMPTS: 3,
  },

  // SEO settings
  SEO: {
    DEFAULT_TITLE: 'NextJS Starter',
    TITLE_TEMPLATE: '%s | NextJS Starter',
    DEFAULT_DESCRIPTION: 'A modern Next.js starter template',
    CANONICAL_URL:
      process.env.NEXT_PUBLIC_CANONICAL_URL || 'http://localhost:3000',
    OPEN_GRAPH: {
      TYPE: 'website',
      SITE_NAME: 'NextJS Starter',
      LOCALE: 'en_US',
    },
    TWITTER: {
      CARD: 'summary_large_image',
      SITE: '@yourusername',
      CREATOR: '@yourusername',
    },
  },
} as const;
