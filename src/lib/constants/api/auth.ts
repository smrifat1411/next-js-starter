// Example: Authentication API endpoints
import { API_BASE } from './base';

const AUTH_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/auth`;

export const AUTH_ENDPOINTS = {
  // Authentication
  LOGIN: `${AUTH_BASE}/login`,
  REGISTER: `${AUTH_BASE}/register`,
  LOGOUT: `${AUTH_BASE}/logout`,
  REFRESH: `${AUTH_BASE}/refresh`,
  VERIFY: `${AUTH_BASE}/verify`,

  // Password Management
  FORGOT_PASSWORD: `${AUTH_BASE}/forgot-password`,
  RESET_PASSWORD: `${AUTH_BASE}/reset-password`,
  CHANGE_PASSWORD: `${AUTH_BASE}/change-password`,

  // Email Verification
  VERIFY_EMAIL: `${AUTH_BASE}/verify-email`,
  RESEND_VERIFICATION: `${AUTH_BASE}/resend-verification`,

  // Two-Factor Authentication
  TWO_FACTOR_ENABLE: `${AUTH_BASE}/2fa/enable`,
  TWO_FACTOR_DISABLE: `${AUTH_BASE}/2fa/disable`,
  TWO_FACTOR_VERIFY: `${AUTH_BASE}/2fa/verify`,
  TWO_FACTOR_BACKUP_CODES: `${AUTH_BASE}/2fa/backup-codes`,

  // OAuth Providers
  OAUTH_GOOGLE: `${AUTH_BASE}/oauth/google`,
  OAUTH_GITHUB: `${AUTH_BASE}/oauth/github`,
  OAUTH_MICROSOFT: `${AUTH_BASE}/oauth/microsoft`,
  OAUTH_APPLE: `${AUTH_BASE}/oauth/apple`,
  OAUTH_FACEBOOK: `${AUTH_BASE}/oauth/facebook`,

  // Session Management
  SESSIONS: `${AUTH_BASE}/sessions`,
  SESSION_REVOKE: (sessionId: string) =>
    `${AUTH_BASE}/sessions/${sessionId}/revoke`,
  SESSIONS_REVOKE_ALL: `${AUTH_BASE}/sessions/revoke-all`,

  // Device Management
  DEVICES: `${AUTH_BASE}/devices`,
  DEVICE_REMOVE: (deviceId: string) =>
    `${AUTH_BASE}/devices/${deviceId}/remove`,
  DEVICES_REMOVE_ALL: `${AUTH_BASE}/devices/remove-all`,
} as const;
