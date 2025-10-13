// Example: TanStack Query client configuration
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time: How long data stays fresh
      staleTime: 5 * 60 * 1000, // 5 minutes

      // Cache time: How long data stays in cache
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)

      // Retry configuration
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error instanceof Error && error.message.includes('4')) {
          return false;
        }
        // Retry up to 3 times for other errors
        return failureCount < 3;
      },

      // Refetch on window focus
      refetchOnWindowFocus: false,

      // Refetch on reconnect
      refetchOnReconnect: true,

      // Background refetch interval
      refetchInterval: false,
    },
    mutations: {
      // Retry mutations once
      retry: 1,

      // Network mode
      networkMode: 'online',
    },
  },
});

// Global error handler
queryClient.setMutationDefaults(['auth', 'login'], {
  onError: error => {
    console.error('Login mutation failed:', error);
  },
});

queryClient.setMutationDefaults(['auth', 'logout'], {
  onError: error => {
    console.error('Logout mutation failed:', error);
  },
});

// Query invalidation helpers
export const invalidateQueries = {
  auth: () => queryClient.invalidateQueries({ queryKey: ['auth'] }),
  users: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  dashboard: () => queryClient.invalidateQueries({ queryKey: ['dashboard'] }),
  all: () => queryClient.invalidateQueries(),
};

// Prefetch helpers
export const prefetchQueries = {
  user: (userId: string) =>
    queryClient.prefetchQuery({
      queryKey: ['users', userId],
      queryFn: () =>
        import('@/lib/api/users').then(api => api.usersApi.get(userId)),
    }),

  users: () =>
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: () => import('@/lib/api/users').then(api => api.usersApi.list()),
    }),
};
