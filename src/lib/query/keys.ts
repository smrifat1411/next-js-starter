// Example: TanStack Query keys - Industry standard pattern

// Combined query keys object for backward compatibility
export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    user: () => [...queryKeys.auth.all, 'user'] as const,
    session: () => [...queryKeys.auth.all, 'session'] as const,
    permissions: () => [...queryKeys.auth.all, 'permissions'] as const,
  },

  users: {
    all: ['users'] as const,
    lists: () => [...queryKeys.users.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
    search: (query: string) =>
      [...queryKeys.users.all, 'search', query] as const,
  },

  dashboard: {
    all: ['dashboard'] as const,
    stats: () => [...queryKeys.dashboard.all, 'stats'] as const,
    activities: (limit?: number) =>
      [...queryKeys.dashboard.all, 'activities', limit] as const,
    metrics: (period?: string) =>
      [...queryKeys.dashboard.all, 'metrics', period] as const,
    reports: () => [...queryKeys.dashboard.all, 'reports'] as const,
  },

  products: {
    all: ['products'] as const,
    lists: () => [...queryKeys.products.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.products.lists(), filters] as const,
    details: () => [...queryKeys.products.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.products.details(), id] as const,
    categories: () => [...queryKeys.products.all, 'categories'] as const,
    search: (query: string) =>
      [...queryKeys.products.all, 'search', query] as const,
  },

  orders: {
    all: ['orders'] as const,
    lists: () => [...queryKeys.orders.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.orders.lists(), filters] as const,
    details: () => [...queryKeys.orders.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.orders.details(), id] as const,
    byUser: (userId: string) =>
      [...queryKeys.orders.all, 'user', userId] as const,
  },
} as const;

// Helper function to create query keys
export function createQueryKey(baseKey: string[], ...params: unknown[]) {
  return [...baseKey, ...params] as const;
}

// Helper function to get query key prefix
export function getQueryKeyPrefix(queryKey: readonly unknown[]): string[] {
  return queryKey.slice(0, -1) as string[];
}
