// Example: TanStack Query utility functions
import { QueryClient } from '@tanstack/react-query';

// Query client instance
export const queryClient = new QueryClient();

// Error handling utilities
export function handleQueryError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }

  return 'An unknown error occurred';
}

// Retry logic utilities
export function shouldRetryQuery(
  failureCount: number,
  error: unknown
): boolean {
  // Don't retry on 4xx errors (client errors)
  if (error instanceof Error && error.message.includes('4')) {
    return false;
  }

  // Don't retry on 401 (unauthorized)
  if (error instanceof Error && error.message.includes('401')) {
    return false;
  }

  // Retry up to 3 times for other errors
  return failureCount < 3;
}

// Query invalidation utilities
export function invalidateQueriesByPattern(pattern: string[]) {
  return queryClient.invalidateQueries({
    queryKey: pattern,
    exact: false,
  });
}

export function invalidateAllQueries() {
  return queryClient.invalidateQueries();
}

export function removeQueriesByPattern(pattern: string[]) {
  return queryClient.removeQueries({
    queryKey: pattern,
    exact: false,
  });
}

// Prefetch utilities
export async function prefetchQuery<T>(
  queryKey: readonly unknown[],
  queryFn: () => Promise<T>,
  options?: { staleTime?: number; gcTime?: number }
) {
  return queryClient.prefetchQuery({
    queryKey,
    queryFn,
    staleTime: options?.staleTime,
    gcTime: options?.gcTime,
  });
}

// Cache utilities
export function getQueryData<T>(queryKey: readonly unknown[]): T | undefined {
  return queryClient.getQueryData<T>(queryKey);
}

export function setQueryData<T>(
  queryKey: readonly unknown[],
  data: T | ((old: T | undefined) => T)
) {
  return queryClient.setQueryData(queryKey, data);
}

// Query state utilities
export function isQueryLoading(queryKey: readonly unknown[]): boolean {
  const query = queryClient.getQueryState(queryKey);
  return query?.status === 'pending';
}

export function isQueryError(queryKey: readonly unknown[]): boolean {
  const query = queryClient.getQueryState(queryKey);
  return query?.status === 'error';
}

export function isQuerySuccess(queryKey: readonly unknown[]): boolean {
  const query = queryClient.getQueryState(queryKey);
  return query?.status === 'success';
}

// Optimistic update utilities
export function optimisticUpdate<T>(
  queryKey: readonly unknown[],
  updater: (old: T | undefined) => T
) {
  return queryClient.setQueryData(queryKey, updater);
}

export function rollbackOptimisticUpdate(queryKey: readonly unknown[]) {
  return queryClient.invalidateQueries({ queryKey });
}

// Query configuration utilities
export function createQueryConfig<T>(
  queryKey: readonly unknown[],
  queryFn: () => Promise<T>,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    gcTime?: number;
    retry?:
      | boolean
      | number
      | ((failureCount: number, error: unknown) => boolean);
  }
) {
  return {
    queryKey,
    queryFn,
    enabled: options?.enabled ?? true,
    staleTime: options?.staleTime ?? 5 * 60 * 1000, // 5 minutes
    gcTime: options?.gcTime ?? 10 * 60 * 1000, // 10 minutes
    retry: options?.retry ?? shouldRetryQuery,
  };
}

// Mutation configuration utilities
export function createMutationConfig<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: unknown, variables: TVariables) => void;
    onSettled?: (
      data: TData | undefined,
      error: unknown | null,
      variables: TVariables
    ) => void;
  }
) {
  return {
    mutationFn,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
    onSettled: options?.onSettled,
  };
}

// Query key utilities
export function createQueryKey(baseKey: string[], ...params: unknown[]) {
  return [...baseKey, ...params] as const;
}

export function getQueryKeyPrefix(queryKey: readonly unknown[]): string[] {
  return queryKey.slice(0, -1) as string[];
}

// Debug utilities
export function logQueryState(queryKey: readonly unknown[]) {
  const state = queryClient.getQueryState(queryKey);
  console.log('Query State:', {
    key: queryKey,
    status: state?.status,
    dataUpdatedAt: state?.dataUpdatedAt,
    errorUpdatedAt: state?.errorUpdatedAt,
    fetchStatus: state?.fetchStatus,
  });
}

export function logAllQueries() {
  const queries = queryClient.getQueryCache().getAll();
  console.log(
    'All Queries:',
    queries.map(q => ({
      key: q.queryKey,
      status: q.state.status,
      dataUpdatedAt: q.state.dataUpdatedAt,
    }))
  );
}
