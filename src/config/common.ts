// Common configuration shared across the application
export const COMMON_CONFIG = {
  // Application metadata
  APP: {
    NAME: process.env.NEXT_PUBLIC_APP_NAME || 'NextJS Starter',
    VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    DESCRIPTION:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
      'A modern Next.js starter template',
    AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR || 'Your Name',
    URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Environment settings
  ENV: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    IS_TEST: process.env.NODE_ENV === 'test',
  },

  // Feature flags
  FEATURES: {
    ANALYTICS: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
    PWA: process.env.NEXT_PUBLIC_PWA_ENABLED === 'true',
    DARK_MODE: process.env.NEXT_PUBLIC_DARK_MODE_ENABLED === 'true',
    MULTI_LANGUAGE: process.env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'true',
    DEBUG_MODE: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
  },

  // Performance settings
  PERFORMANCE: {
    LAZY_LOADING: process.env.NEXT_PUBLIC_LAZY_LOADING_ENABLED === 'true',
    IMAGE_OPTIMIZATION:
      process.env.NEXT_PUBLIC_IMAGE_OPTIMIZATION_ENABLED === 'true',
    BUNDLE_ANALYSIS: process.env.NEXT_PUBLIC_BUNDLE_ANALYSIS_ENABLED === 'true',
    CACHE_ENABLED: process.env.NEXT_PUBLIC_CACHE_ENABLED === 'true',
  },

  // Security settings
  SECURITY: {
    CSP_ENABLED: process.env.NEXT_PUBLIC_CSP_ENABLED === 'true',
    HTTPS_ONLY: process.env.NEXT_PUBLIC_HTTPS_ONLY === 'true',
    SECURE_COOKIES: process.env.NEXT_PUBLIC_SECURE_COOKIES === 'true',
    XSS_PROTECTION: process.env.NEXT_PUBLIC_XSS_PROTECTION === 'true',
  },

  // UI/UX settings
  UI: {
    THEME: process.env.NEXT_PUBLIC_THEME || 'light',
    PRIMARY_COLOR: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#3b82f6',
    SECONDARY_COLOR: process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#64748b',
    FONT_FAMILY: process.env.NEXT_PUBLIC_FONT_FAMILY || 'Inter',
    ANIMATION_ENABLED: process.env.NEXT_PUBLIC_ANIMATION_ENABLED === 'true',
  },

  // Development settings
  DEVELOPMENT: {
    HOT_RELOAD: process.env.NEXT_PUBLIC_HOT_RELOAD_ENABLED === 'true',
    SOURCE_MAPS: process.env.NEXT_PUBLIC_SOURCE_MAPS_ENABLED === 'true',
    CONSOLE_LOGS: process.env.NEXT_PUBLIC_CONSOLE_LOGS_ENABLED === 'true',
    PERFORMANCE_MONITORING:
      process.env.NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED === 'true',
  },
} as const;
