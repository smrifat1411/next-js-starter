// Environment configuration constants
export const ENV_CONFIG = {
  APP: {
    NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Next.js App',
    VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    ENVIRONMENT: process.env.NODE_ENV as 'development' | 'production' | 'test',
  },
  FEATURES: {
    ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    DEBUG: process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true',
    MOCK_DATA: process.env.NEXT_PUBLIC_ENABLE_MOCK_DATA === 'true',
    MAINTENANCE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  },
  LIMITS: {
    MAX_FILE_SIZE: parseInt(
      process.env.NEXT_PUBLIC_MAX_FILE_SIZE || '10485760'
    ), // 10MB
    MAX_UPLOADS: parseInt(process.env.NEXT_PUBLIC_MAX_UPLOADS || '5'),
    RATE_LIMIT: parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT || '100'),
  },
  CACHE: {
    ENABLED: process.env.NEXT_PUBLIC_CACHE_ENABLED === 'true',
    TTL: parseInt(process.env.NEXT_PUBLIC_CACHE_TTL || '300'), // 5 minutes
    MAX_SIZE: parseInt(process.env.NEXT_PUBLIC_CACHE_MAX_SIZE || '100'), // 100 items
  },
  MONITORING: {
    ENABLED: process.env.NEXT_PUBLIC_MONITORING_ENABLED === 'true',
    SENTRY: process.env.NEXT_PUBLIC_SENTRY_ENABLED === 'true',
    ANALYTICS: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  },
} as const;

// Environment validation
export const REQUIRED_ENV_VARS = [
  'NEXT_PUBLIC_APP_NAME',
  'NEXT_PUBLIC_APP_VERSION',
  'NEXT_PUBLIC_APP_URL',
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_API_VERSION',
] as const;

// Environment helpers
export const ENV_HELPERS = {
  IS_DEVELOPMENT: () => ENV_CONFIG.APP.ENVIRONMENT === 'development',
  IS_PRODUCTION: () => ENV_CONFIG.APP.ENVIRONMENT === 'production',
  IS_TEST: () => ENV_CONFIG.APP.ENVIRONMENT === 'test',
  IS_FEATURE_ENABLED: (feature: keyof typeof ENV_CONFIG.FEATURES) =>
    ENV_CONFIG.FEATURES[feature],
  GET_APP_CONFIG: () => ENV_CONFIG.APP,
  GET_FEATURE_FLAGS: () => ENV_CONFIG.FEATURES,
  GET_LIMITS: () => ENV_CONFIG.LIMITS,
  GET_CACHE_CONFIG: () => ENV_CONFIG.CACHE,
  GET_MONITORING_CONFIG: () => ENV_CONFIG.MONITORING,
} as const;

// Runtime environment checks
export const ENV_VALIDATION = {
  VALIDATE: () => {
    const errors: string[] = [];

    for (const key of REQUIRED_ENV_VARS) {
      if (!process.env[key]) {
        errors.push(`Missing required environment variable: ${key}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
  CHECK: () => {
    const validation = ENV_VALIDATION.VALIDATE();

    if (!validation.isValid) {
      console.error('Environment validation failed:', validation.errors);
      if (ENV_HELPERS.IS_PRODUCTION()) {
        throw new Error('Invalid environment configuration');
      }
    }

    return validation;
  },
} as const;
