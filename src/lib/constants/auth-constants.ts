// Authentication constants
export const AUTH_CONSTANTS = {
  // Password policy
  PASSWORD_POLICY: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBERS: true,
    REQUIRE_SPECIAL_CHARS: true,
    FORBIDDEN_PASSWORDS: ['password', '123456', 'qwerty'],
  },

  // Rate limiting
  RATE_LIMIT: {
    SIGN_IN: {
      MAX_ATTEMPTS: 5,
      WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    },
    SIGN_UP: {
      MAX_ATTEMPTS: 3,
      WINDOW_MS: 60 * 60 * 1000, // 1 hour
    },
    PASSWORD_RESET: {
      MAX_ATTEMPTS: 3,
      WINDOW_MS: 60 * 60 * 1000, // 1 hour
    },
  },

  // OAuth scopes
  OAUTH_SCOPES: {
    GOOGLE: ['email', 'profile'],
    GITHUB: ['user:email'],
    DISCORD: ['identify', 'email'],
  },

  // Session constants
  SESSION: {
    STRATEGY: 'jwt' as const,
    MAX_AGE: 30 * 24 * 60 * 60, // 30 days
    UPDATE_AGE: 24 * 60 * 60, // 24 hours
  },

  // Page routes
  PAGES: {
    SIGN_IN: '/auth/signin',
    SIGN_OUT: '/auth/signout',
    ERROR: '/auth/error',
    VERIFY_REQUEST: '/auth/verify-request',
  },
} as const;
