// API configuration (runtime config from environment)
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  VERSION: process.env.NEXT_PUBLIC_API_VERSION || 'v1',
  TIMEOUT: parseInt(process.env.API_TIMEOUT || '10000'),
  RETRIES: parseInt(process.env.API_RETRIES || '3'),
  CACHE: {
    ENABLED: process.env.API_CACHE_ENABLED === 'true',
    TTL: parseInt(process.env.API_CACHE_TTL || '300'), // 5 minutes
  },
  RATE_LIMIT: {
    ENABLED: process.env.API_RATE_LIMIT_ENABLED === 'true',
    MAX_REQUESTS: parseInt(process.env.API_RATE_LIMIT_MAX || '100'),
    WINDOW_MS: parseInt(process.env.API_RATE_LIMIT_WINDOW || '900000'), // 15 minutes
  },
  CORS: {
    ENABLED: process.env.API_CORS_ENABLED === 'true',
    ORIGINS: (process.env.API_CORS_ORIGINS || '*').split(','),
    METHODS: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    HEADERS: ['Content-Type', 'Authorization', 'X-Requested-With'],
  },
  SECURITY: {
    ENABLED: process.env.API_SECURITY_ENABLED === 'true',
    HELMET: process.env.API_HELMET_ENABLED === 'true',
    CSRF: process.env.API_CSRF_ENABLED === 'true',
  },
  MIDDLEWARE: {
    AUTH: {
      REQUIRED: true,
      OPTIONAL: false,
    },
    VALIDATION: {
      ENABLED: true,
      STRICT: true,
    },
    LOGGING: {
      ENABLED: process.env.NODE_ENV === 'development',
      LEVEL: 'info',
    },
    MONITORING: {
      ENABLED: process.env.API_MONITORING_ENABLED === 'true',
      METRICS: process.env.API_METRICS_ENABLED === 'true',
    },
  },
} as const;
