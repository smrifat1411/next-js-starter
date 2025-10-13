// Example: System API endpoints
import { API_BASE } from './base';

const SYSTEM_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/system`;

export const SYSTEM_ENDPOINTS = {
  // Health & Status
  HEALTH: `${SYSTEM_BASE}/health`,
  STATUS: `${SYSTEM_BASE}/status`,
  PING: `${SYSTEM_BASE}/ping`,
  READINESS: `${SYSTEM_BASE}/readiness`,
  LIVENESS: `${SYSTEM_BASE}/liveness`,

  // System Information
  INFO: `${SYSTEM_BASE}/info`,
  VERSION: `${SYSTEM_BASE}/version`,
  BUILD_INFO: `${SYSTEM_BASE}/build-info`,
  ENVIRONMENT: `${SYSTEM_BASE}/environment`,
  CONFIG: `${SYSTEM_BASE}/config`,

  // Performance Monitoring
  METRICS: `${SYSTEM_BASE}/metrics`,
  PERFORMANCE: `${SYSTEM_BASE}/performance`,
  CPU_USAGE: `${SYSTEM_BASE}/metrics/cpu`,
  MEMORY_USAGE: `${SYSTEM_BASE}/metrics/memory`,
  DISK_USAGE: `${SYSTEM_BASE}/metrics/disk`,
  NETWORK_USAGE: `${SYSTEM_BASE}/metrics/network`,

  // Logging
  LOGS: `${SYSTEM_BASE}/logs`,
  LOG_LEVELS: `${SYSTEM_BASE}/logs/levels`,
  LOG_FILTERS: `${SYSTEM_BASE}/logs/filters`,
  LOG_EXPORT: `${SYSTEM_BASE}/logs/export`,
  LOG_CLEAR: `${SYSTEM_BASE}/logs/clear`,

  // Error Tracking
  ERRORS: `${SYSTEM_BASE}/errors`,
  ERROR_STATS: `${SYSTEM_BASE}/errors/stats`,
  ERROR_DETAILS: (errorId: string) => `${SYSTEM_BASE}/errors/${errorId}`,
  ERROR_RESOLVE: (errorId: string) =>
    `${SYSTEM_BASE}/errors/${errorId}/resolve`,

  // Uptime Monitoring
  UPTIME: `${SYSTEM_BASE}/uptime`,
  UPTIME_HISTORY: `${SYSTEM_BASE}/uptime/history`,
  DOWNTIME_EVENTS: `${SYSTEM_BASE}/uptime/downtime`,
  INCIDENTS: `${SYSTEM_BASE}/uptime/incidents`,

  // Database Management
  DATABASE: `${SYSTEM_BASE}/database`,
  DB_STATUS: `${SYSTEM_BASE}/database/status`,
  DB_CONNECTIONS: `${SYSTEM_BASE}/database/connections`,
  DB_QUERIES: `${SYSTEM_BASE}/database/queries`,
  DB_BACKUP: `${SYSTEM_BASE}/database/backup`,
  DB_RESTORE: `${SYSTEM_BASE}/database/restore`,

  // Cache Management
  CACHE: `${SYSTEM_BASE}/cache`,
  CACHE_STATUS: `${SYSTEM_BASE}/cache/status`,
  CACHE_CLEAR: `${SYSTEM_BASE}/cache/clear`,
  CACHE_STATS: `${SYSTEM_BASE}/cache/stats`,
  CACHE_KEYS: `${SYSTEM_BASE}/cache/keys`,

  // Queue Management
  QUEUES: `${SYSTEM_BASE}/queues`,
  QUEUE_STATUS: (queueName: string) =>
    `${SYSTEM_BASE}/queues/${queueName}/status`,
  QUEUE_JOBS: (queueName: string) => `${SYSTEM_BASE}/queues/${queueName}/jobs`,
  QUEUE_CLEAR: (queueName: string) =>
    `${SYSTEM_BASE}/queues/${queueName}/clear`,
  QUEUE_PAUSE: (queueName: string) =>
    `${SYSTEM_BASE}/queues/${queueName}/pause`,
  QUEUE_RESUME: (queueName: string) =>
    `${SYSTEM_BASE}/queues/${queueName}/resume`,

  // Security
  SECURITY: `${SYSTEM_BASE}/security`,
  SECURITY_SCAN: `${SYSTEM_BASE}/security/scan`,
  VULNERABILITIES: `${SYSTEM_BASE}/security/vulnerabilities`,
  SECURITY_ALERTS: `${SYSTEM_BASE}/security/alerts`,
  ACCESS_LOGS: `${SYSTEM_BASE}/security/access-logs`,

  // Maintenance
  MAINTENANCE: `${SYSTEM_BASE}/maintenance`,
  MAINTENANCE_MODE: `${SYSTEM_BASE}/maintenance/mode`,
  MAINTENANCE_SCHEDULE: `${SYSTEM_BASE}/maintenance/schedule`,
  MAINTENANCE_HISTORY: `${SYSTEM_BASE}/maintenance/history`,

  // Updates & Deployment
  UPDATES: `${SYSTEM_BASE}/updates`,
  UPDATE_CHECK: `${SYSTEM_BASE}/updates/check`,
  UPDATE_INSTALL: `${SYSTEM_BASE}/updates/install`,
  DEPLOYMENT_STATUS: `${SYSTEM_BASE}/deployment/status`,
  DEPLOYMENT_HISTORY: `${SYSTEM_BASE}/deployment/history`,

  // Backup & Recovery
  BACKUP: `${SYSTEM_BASE}/backup`,
  BACKUP_CREATE: `${SYSTEM_BASE}/backup/create`,
  BACKUP_LIST: `${SYSTEM_BASE}/backup/list`,
  BACKUP_RESTORE: (backupId: string) =>
    `${SYSTEM_BASE}/backup/${backupId}/restore`,
  BACKUP_DELETE: (backupId: string) =>
    `${SYSTEM_BASE}/backup/${backupId}/delete`,

  // Alerts & Notifications
  ALERTS: `${SYSTEM_BASE}/alerts`,
  ALERT_RULES: `${SYSTEM_BASE}/alerts/rules`,
  ALERT_CREATE: `${SYSTEM_BASE}/alerts/rules`,
  ALERT_UPDATE: (ruleId: string) => `${SYSTEM_BASE}/alerts/rules/${ruleId}`,
  ALERT_DELETE: (ruleId: string) => `${SYSTEM_BASE}/alerts/rules/${ruleId}`,
  ALERT_HISTORY: `${SYSTEM_BASE}/alerts/history`,

  // API Rate Limiting
  RATE_LIMITS: `${SYSTEM_BASE}/rate-limits`,
  RATE_LIMIT_STATUS: `${SYSTEM_BASE}/rate-limits/status`,
  RATE_LIMIT_RESET: `${SYSTEM_BASE}/rate-limits/reset`,

  // Feature Flags
  FEATURE_FLAGS: `${SYSTEM_BASE}/feature-flags`,
  FEATURE_FLAG_CREATE: `${SYSTEM_BASE}/feature-flags`,
  FEATURE_FLAG_UPDATE: (flagId: string) =>
    `${SYSTEM_BASE}/feature-flags/${flagId}`,
  FEATURE_FLAG_DELETE: (flagId: string) =>
    `${SYSTEM_BASE}/feature-flags/${flagId}`,
  FEATURE_FLAG_TOGGLE: (flagId: string) =>
    `${SYSTEM_BASE}/feature-flags/${flagId}/toggle`,
} as const;
