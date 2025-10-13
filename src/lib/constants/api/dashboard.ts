// Example: Dashboard API endpoints
import { API_BASE } from './base';

const DASHBOARD_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/dashboard`;

export const DASHBOARD_ENDPOINTS = {
  // Main Dashboard
  OVERVIEW: `${DASHBOARD_BASE}/overview`,
  STATS: `${DASHBOARD_BASE}/stats`,
  METRICS: `${DASHBOARD_BASE}/metrics`,
  KPIS: `${DASHBOARD_BASE}/kpis`,

  // Activities & Events
  ACTIVITIES: `${DASHBOARD_BASE}/activities`,
  RECENT_ACTIVITIES: `${DASHBOARD_BASE}/activities/recent`,
  USER_ACTIVITIES: (userId: string) =>
    `${DASHBOARD_BASE}/activities/user/${userId}`,
  SYSTEM_ACTIVITIES: `${DASHBOARD_BASE}/activities/system`,

  // Charts & Visualizations
  CHARTS: `${DASHBOARD_BASE}/charts`,
  LINE_CHART: `${DASHBOARD_BASE}/charts/line`,
  BAR_CHART: `${DASHBOARD_BASE}/charts/bar`,
  PIE_CHART: `${DASHBOARD_BASE}/charts/pie`,
  AREA_CHART: `${DASHBOARD_BASE}/charts/area`,
  SCATTER_CHART: `${DASHBOARD_BASE}/charts/scatter`,

  // Time Series Data
  TIME_SERIES: `${DASHBOARD_BASE}/time-series`,
  DAILY_METRICS: `${DASHBOARD_BASE}/metrics/daily`,
  WEEKLY_METRICS: `${DASHBOARD_BASE}/metrics/weekly`,
  MONTHLY_METRICS: `${DASHBOARD_BASE}/metrics/monthly`,
  YEARLY_METRICS: `${DASHBOARD_BASE}/metrics/yearly`,

  // Reports & Analytics
  REPORTS: `${DASHBOARD_BASE}/reports`,
  GENERATE_REPORT: `${DASHBOARD_BASE}/reports/generate`,
  REPORT_TEMPLATES: `${DASHBOARD_BASE}/reports/templates`,
  CUSTOM_REPORTS: `${DASHBOARD_BASE}/reports/custom`,

  // Widgets & Components
  WIDGETS: `${DASHBOARD_BASE}/widgets`,
  WIDGET_CONFIG: (widgetId: string) =>
    `${DASHBOARD_BASE}/widgets/${widgetId}/config`,
  WIDGET_DATA: (widgetId: string) =>
    `${DASHBOARD_BASE}/widgets/${widgetId}/data`,
  WIDGET_LAYOUT: `${DASHBOARD_BASE}/widgets/layout`,

  // Trends & Insights
  TRENDS: `${DASHBOARD_BASE}/trends`,
  INSIGHTS: `${DASHBOARD_BASE}/insights`,
  PREDICTIONS: `${DASHBOARD_BASE}/predictions`,
  ALERTS: `${DASHBOARD_BASE}/alerts`,

  // Performance & Monitoring
  PERFORMANCE: `${DASHBOARD_BASE}/performance`,
  HEALTH_CHECK: `${DASHBOARD_BASE}/health`,
  SYSTEM_STATUS: `${DASHBOARD_BASE}/system-status`,
  UPTIME: `${DASHBOARD_BASE}/uptime`,

  // Data Export & Import
  EXPORT_DATA: `${DASHBOARD_BASE}/export`,
  IMPORT_DATA: `${DASHBOARD_BASE}/import`,
  BACKUP: `${DASHBOARD_BASE}/backup`,
  RESTORE: `${DASHBOARD_BASE}/restore`,
} as const;
