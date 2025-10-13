// Example: Dashboard hooks with TanStack Query
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';
import { dashboardApi } from '@/lib/api/dashboard';
import type { DashboardStats, Activity } from '@/types/api/dashboard';

// Get dashboard stats
export function useDashboardStats() {
  return useQuery({
    queryKey: queryKeys.dashboard.stats(),
    queryFn: () => dashboardApi.getStats(),
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
  });
}

// Get dashboard activities
export function useDashboardActivities(limit = 10) {
  return useQuery({
    queryKey: queryKeys.dashboard.activities(limit),
    queryFn: () => dashboardApi.getRecentActivities(limit),
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 60 * 1000, // Refetch every minute
  });
}

// Get dashboard metrics - commented out as method doesn't exist
// export function useDashboardMetrics(period = 'month') {
//   return useQuery({
//     queryKey: queryKeys.dashboard.metrics(period),
//     queryFn: () => dashboardApi.getMetrics(period as 'day' | 'week' | 'month' | 'year'),
//     staleTime: 5 * 60 * 1000, // 5 minutes
//     gcTime: 10 * 60 * 1000, // 10 minutes
//   })
// }

// Get dashboard reports - commented out as method doesn't exist
// export function useDashboardReports() {
//   return useQuery({
//     queryKey: queryKeys.dashboard.reports(),
//     queryFn: () => dashboardApi.getReports(),
//     staleTime: 10 * 60 * 1000, // 10 minutes
//     gcTime: 30 * 60 * 1000, // 30 minutes
//   })
// }

// Generate report mutation - commented out as method doesn't exist
// export function useGenerateReport() {
//   const queryClient = useQueryClient()
//
//   return useMutation({
//     mutationFn: ({ reportType, params }: { reportType: string; params: Record<string, unknown> }) =>
//       dashboardApi.generateReport(reportType, params),
//     onSuccess: (newReport) => {
//       // Add the new report to the cache
//       queryClient.setQueryData(queryKeys.dashboard.reports(), (old: DashboardReport[] | undefined) => {
//         if (!old) return [newReport]
//         return [newReport, ...old]
//       })
//
//       // Invalidate reports query to refetch
//       queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.reports() })
//     },
//     onError: (error) => {
//       console.error('Generate report failed:', error)
//     },
//   })
// }

// Combined dashboard data hook
export function useDashboardData() {
  const stats = useDashboardStats();
  const activities = useDashboardActivities();
  // const metrics = useDashboardMetrics() // Commented out as method doesn't exist
  // const reports = useDashboardReports() // Commented out as method doesn't exist

  return {
    stats,
    activities,
    // metrics,
    // reports,
    isLoading: stats.isLoading || activities.isLoading,
    isError: stats.isError || activities.isError,
    error: stats.error || activities.error,
  };
}

// Prefetch dashboard data
export function usePrefetchDashboard() {
  const queryClient = useQueryClient();

  return () => {
    // Prefetch all dashboard data
    queryClient.prefetchQuery({
      queryKey: queryKeys.dashboard.stats(),
      queryFn: () => dashboardApi.getStats(),
      staleTime: 1 * 60 * 1000,
    });

    queryClient.prefetchQuery({
      queryKey: queryKeys.dashboard.activities(10),
      queryFn: () => dashboardApi.getRecentActivities(10),
      staleTime: 30 * 1000,
    });

    // queryClient.prefetchQuery({
    //   queryKey: queryKeys.dashboard.metrics('month'),
    //   queryFn: () => dashboardApi.getMetrics('month'),
    //   staleTime: 5 * 60 * 1000,
    // })
  };
}

// Real-time dashboard updates
export function useRealtimeDashboard() {
  const queryClient = useQueryClient();

  // Simulate real-time updates (in a real app, you'd use WebSocket or SSE)
  const updateStats = () => {
    queryClient.setQueryData(
      queryKeys.dashboard.stats(),
      (old: DashboardStats | undefined) => {
        if (!old) return old;

        // Simulate random updates
        return {
          ...old,
          totalUsers: old.totalUsers + Math.floor(Math.random() * 3),
          activeUsers: old.activeUsers + Math.floor(Math.random() * 2),
        };
      }
    );
  };

  const updateActivities = () => {
    queryClient.setQueryData(
      queryKeys.dashboard.activities(10),
      (old: Activity[] | undefined) => {
        if (!old) return old;

        // Add a new activity
        const newActivity: Activity = {
          id: Date.now().toString(),
          type: 'page_view',
          message: 'User viewed dashboard',
          timestamp: new Date().toISOString(),
        };

        return [newActivity, ...old.slice(0, 9)]; // Keep only 10 activities
      }
    );
  };

  return {
    updateStats,
    updateActivities,
  };
}
