// Example: Analytics API endpoints
import { API_BASE } from './base';

const ANALYTICS_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/analytics`;

export const ANALYTICS_ENDPOINTS = {
  // Dashboard Analytics
  DASHBOARD: `${ANALYTICS_BASE}/dashboard`,
  OVERVIEW: `${ANALYTICS_BASE}/overview`,
  SUMMARY: `${ANALYTICS_BASE}/summary`,

  // Event Tracking
  EVENTS: `${ANALYTICS_BASE}/events`,
  EVENT_TRACK: `${ANALYTICS_BASE}/events/track`,
  EVENT_BATCH: `${ANALYTICS_BASE}/events/batch`,
  EVENT_DELETE: (eventId: string) => `${ANALYTICS_BASE}/events/${eventId}`,

  // User Analytics
  USERS: `${ANALYTICS_BASE}/users`,
  USER_BEHAVIOR: (userId: string) =>
    `${ANALYTICS_BASE}/users/${userId}/behavior`,
  USER_JOURNEY: (userId: string) => `${ANALYTICS_BASE}/users/${userId}/journey`,
  USER_SESSIONS: (userId: string) =>
    `${ANALYTICS_BASE}/users/${userId}/sessions`,

  // Funnel Analysis
  FUNNELS: `${ANALYTICS_BASE}/funnels`,
  FUNNEL_CREATE: `${ANALYTICS_BASE}/funnels`,
  FUNNEL_GET: (id: string) => `${ANALYTICS_BASE}/funnels/${id}`,
  FUNNEL_UPDATE: (id: string) => `${ANALYTICS_BASE}/funnels/${id}`,
  FUNNEL_DELETE: (id: string) => `${ANALYTICS_BASE}/funnels/${id}`,
  FUNNEL_ANALYSIS: (id: string) => `${ANALYTICS_BASE}/funnels/${id}/analysis`,

  // Retention Analysis
  RETENTION: `${ANALYTICS_BASE}/retention`,
  COHORT_ANALYSIS: `${ANALYTICS_BASE}/retention/cohorts`,
  RETENTION_RATE: `${ANALYTICS_BASE}/retention/rate`,
  CHURN_ANALYSIS: `${ANALYTICS_BASE}/retention/churn`,

  // Conversion Tracking
  CONVERSIONS: `${ANALYTICS_BASE}/conversions`,
  CONVERSION_RATE: `${ANALYTICS_BASE}/conversions/rate`,
  CONVERSION_PATHS: `${ANALYTICS_BASE}/conversions/paths`,
  CONVERSION_ATTRIBUTION: `${ANALYTICS_BASE}/conversions/attribution`,

  // Performance Metrics
  PERFORMANCE: `${ANALYTICS_BASE}/performance`,
  PAGE_LOAD_TIMES: `${ANALYTICS_BASE}/performance/page-load`,
  API_RESPONSE_TIMES: `${ANALYTICS_BASE}/performance/api-response`,
  ERROR_RATES: `${ANALYTICS_BASE}/performance/errors`,
  UPTIME: `${ANALYTICS_BASE}/performance/uptime`,

  // Custom Metrics
  METRICS: `${ANALYTICS_BASE}/metrics`,
  METRIC_CREATE: `${ANALYTICS_BASE}/metrics`,
  METRIC_GET: (id: string) => `${ANALYTICS_BASE}/metrics/${id}`,
  METRIC_UPDATE: (id: string) => `${ANALYTICS_BASE}/metrics/${id}`,
  METRIC_DELETE: (id: string) => `${ANALYTICS_BASE}/metrics/${id}`,

  // Segments
  SEGMENTS: `${ANALYTICS_BASE}/segments`,
  SEGMENT_CREATE: `${ANALYTICS_BASE}/segments`,
  SEGMENT_GET: (id: string) => `${ANALYTICS_BASE}/segments/${id}`,
  SEGMENT_UPDATE: (id: string) => `${ANALYTICS_BASE}/segments/${id}`,
  SEGMENT_DELETE: (id: string) => `${ANALYTICS_BASE}/segments/${id}`,
  SEGMENT_USERS: (id: string) => `${ANALYTICS_BASE}/segments/${id}/users`,

  // Reports
  REPORTS: `${ANALYTICS_BASE}/reports`,
  REPORT_CREATE: `${ANALYTICS_BASE}/reports`,
  REPORT_GET: (id: string) => `${ANALYTICS_BASE}/reports/${id}`,
  REPORT_UPDATE: (id: string) => `${ANALYTICS_BASE}/reports/${id}`,
  REPORT_DELETE: (id: string) => `${ANALYTICS_BASE}/reports/${id}`,
  REPORT_GENERATE: (id: string) => `${ANALYTICS_BASE}/reports/${id}/generate`,

  // Data Export
  EXPORTS: `${ANALYTICS_BASE}/exports`,
  EXPORT_CREATE: `${ANALYTICS_BASE}/exports`,
  EXPORT_GET: (id: string) => `${ANALYTICS_BASE}/exports/${id}`,
  EXPORT_DOWNLOAD: (id: string) => `${ANALYTICS_BASE}/exports/${id}/download`,

  // Real-time Analytics
  REALTIME: `${ANALYTICS_BASE}/realtime`,
  REALTIME_USERS: `${ANALYTICS_BASE}/realtime/users`,
  REALTIME_EVENTS: `${ANALYTICS_BASE}/realtime/events`,
  REALTIME_SESSIONS: `${ANALYTICS_BASE}/realtime/sessions`,

  // A/B Testing
  AB_TESTS: `${ANALYTICS_BASE}/ab-tests`,
  AB_TEST_CREATE: `${ANALYTICS_BASE}/ab-tests`,
  AB_TEST_GET: (id: string) => `${ANALYTICS_BASE}/ab-tests/${id}`,
  AB_TEST_UPDATE: (id: string) => `${ANALYTICS_BASE}/ab-tests/${id}`,
  AB_TEST_DELETE: (id: string) => `${ANALYTICS_BASE}/ab-tests/${id}`,
  AB_TEST_RESULTS: (id: string) => `${ANALYTICS_BASE}/ab-tests/${id}/results`,

  // Heatmaps
  HEATMAPS: `${ANALYTICS_BASE}/heatmaps`,
  HEATMAP_CREATE: `${ANALYTICS_BASE}/heatmaps`,
  HEATMAP_GET: (id: string) => `${ANALYTICS_BASE}/heatmaps/${id}`,
  HEATMAP_DATA: (id: string) => `${ANALYTICS_BASE}/heatmaps/${id}/data`,

  // Goals & KPIs
  GOALS: `${ANALYTICS_BASE}/goals`,
  GOAL_CREATE: `${ANALYTICS_BASE}/goals`,
  GOAL_GET: (id: string) => `${ANALYTICS_BASE}/goals/${id}`,
  GOAL_UPDATE: (id: string) => `${ANALYTICS_BASE}/goals/${id}`,
  GOAL_DELETE: (id: string) => `${ANALYTICS_BASE}/goals/${id}`,
  GOAL_PROGRESS: (id: string) => `${ANALYTICS_BASE}/goals/${id}/progress`,
} as const;
