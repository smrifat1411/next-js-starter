// Example: Dashboard feature API
import { apiClient } from '../client';
import type { DashboardStats, Activity } from '@/types/api/dashboard';

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    return apiClient.get<DashboardStats>('/dashboard/stats');
  },

  getActivities: async (): Promise<Activity[]> => {
    return apiClient.get<Activity[]>('/dashboard/activities');
  },

  getRecentActivities: async (limit: number = 10): Promise<Activity[]> => {
    return apiClient.get<Activity[]>(`/dashboard/activities?limit=${limit}`);
  },
};
