// Example: Users API endpoints
import { API_BASE } from './base';

const USERS_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/users`;

export const USERS_ENDPOINTS = {
  // Basic CRUD
  LIST: USERS_BASE,
  CREATE: USERS_BASE,
  GET: (id: string) => `${USERS_BASE}/${id}`,
  UPDATE: (id: string) => `${USERS_BASE}/${id}`,
  PATCH: (id: string) => `${USERS_BASE}/${id}`,
  DELETE: (id: string) => `${USERS_BASE}/${id}`,

  // Search & Filtering
  SEARCH: `${USERS_BASE}/search`,
  FILTER: `${USERS_BASE}/filter`,
  SORT: `${USERS_BASE}/sort`,

  // Bulk Operations
  BULK_CREATE: `${USERS_BASE}/bulk`,
  BULK_UPDATE: `${USERS_BASE}/bulk`,
  BULK_DELETE: `${USERS_BASE}/bulk`,
  BULK_EXPORT: `${USERS_BASE}/bulk/export`,
  BULK_IMPORT: `${USERS_BASE}/bulk/import`,

  // User Management
  ACTIVATE: (id: string) => `${USERS_BASE}/${id}/activate`,
  DEACTIVATE: (id: string) => `${USERS_BASE}/${id}/deactivate`,
  SUSPEND: (id: string) => `${USERS_BASE}/${id}/suspend`,
  UNSUSPEND: (id: string) => `${USERS_BASE}/${id}/unsuspend`,

  // Roles & Permissions
  ROLES: (id: string) => `${USERS_BASE}/${id}/roles`,
  PERMISSIONS: (id: string) => `${USERS_BASE}/${id}/permissions`,
  ASSIGN_ROLE: (id: string) => `${USERS_BASE}/${id}/roles/assign`,
  REVOKE_ROLE: (id: string) => `${USERS_BASE}/${id}/roles/revoke`,

  // Profile Management
  PROFILE: (id: string) => `${USERS_BASE}/${id}/profile`,
  AVATAR: (id: string) => `${USERS_BASE}/${id}/avatar`,
  PREFERENCES: (id: string) => `${USERS_BASE}/${id}/preferences`,
  SETTINGS: (id: string) => `${USERS_BASE}/${id}/settings`,

  // Activity & Analytics
  ACTIVITY: (id: string) => `${USERS_BASE}/${id}/activity`,
  ANALYTICS: (id: string) => `${USERS_BASE}/${id}/analytics`,
  STATS: (id: string) => `${USERS_BASE}/${id}/stats`,

  // Relationships
  FRIENDS: (id: string) => `${USERS_BASE}/${id}/friends`,
  FOLLOWERS: (id: string) => `${USERS_BASE}/${id}/followers`,
  FOLLOWING: (id: string) => `${USERS_BASE}/${id}/following`,
  BLOCKED: (id: string) => `${USERS_BASE}/${id}/blocked`,

  // Notifications
  NOTIFICATIONS: (id: string) => `${USERS_BASE}/${id}/notifications`,
  NOTIFICATION_PREFERENCES: (id: string) =>
    `${USERS_BASE}/${id}/notification-preferences`,
} as const;
