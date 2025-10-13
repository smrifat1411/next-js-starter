// Database configuration constants
export const DATABASE_CONFIG = {
  URL: process.env.DATABASE_URL || 'postgresql://localhost:5432/app',
  HOST: process.env.DATABASE_HOST || 'localhost',
  PORT: parseInt(process.env.DATABASE_PORT || '5432'),
  NAME: process.env.DATABASE_NAME || 'app',
  USER: process.env.DATABASE_USER || 'postgres',
  PASSWORD: process.env.DATABASE_PASSWORD || 'password',
  SSL: process.env.NODE_ENV === 'production',
  POOL: {
    MIN: 2,
    MAX: 10,
    IDLE: 10000,
  },
  TIMEOUT: 30000,
} as const;

// Database connection options
export const DB_OPTIONS = {
  HOST: DATABASE_CONFIG.HOST,
  PORT: DATABASE_CONFIG.PORT,
  DATABASE: DATABASE_CONFIG.NAME,
  USERNAME: DATABASE_CONFIG.USER,
  PASSWORD: DATABASE_CONFIG.PASSWORD,
  SSL: DATABASE_CONFIG.SSL,
  POOL: DATABASE_CONFIG.POOL,
  DIALECT: 'postgres' as const,
  LOGGING: process.env.NODE_ENV === 'development',
  DEFINE: {
    TIMESTAMPS: true,
    UNDERSCORED: true,
  },
} as const;

// Migration configuration
export const MIGRATION_CONFIG = {
  DIRECTORY: './migrations',
  TABLE_NAME: 'migrations',
  EXTENSION: 'ts',
} as const;

// Seed configuration
export const SEED_CONFIG = {
  DIRECTORY: './seeds',
  TABLE_NAME: 'seeds',
  EXTENSION: 'ts',
} as const;
