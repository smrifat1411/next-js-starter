// Authentication configuration (runtime config from environment)
export const AUTH_CONFIG = {
  SECRET: process.env.NEXTAUTH_SECRET || 'your-secret-key',
  URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  PROVIDERS: (process.env.NEXTAUTH_PROVIDERS || 'credentials').split(','),
  JWT: {
    SECRET: process.env.NEXTAUTH_SECRET || 'your-secret-key',
    MAX_AGE: 30 * 24 * 60 * 60, // 30 days
  },
  CALLBACKS: {
    SIGN_IN: true,
    REDIRECT: true,
    SESSION: true,
    JWT: true,
  },
} as const;

// OAuth provider configurations (runtime config from environment)
export const OAUTH_CONFIG = {
  GOOGLE: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  GITHUB: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
  DISCORD: {
    CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  },
} as const;
