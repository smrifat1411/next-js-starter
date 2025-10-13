// Example: TanStack Query types
import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

// API types moved to src/types/api/common.ts

// Query options types
export interface QueryOptions<TData, TError = Error>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
  enabled?: boolean;
  staleTime?: number;
  gcTime?: number;
}

// Mutation options types
export interface MutationOptions<TData, TError = Error, TVariables = unknown>
  extends Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'> {
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables
  ) => void;
}

// Infinite query types
export interface InfiniteQueryParams {
  pageParam?: number;
  limit?: number;
}

export interface InfiniteQueryResponse<T> {
  data: T[];
  nextCursor?: number;
  hasNextPage: boolean;
}

// Query error types
export interface QueryError {
  message: string;
  status?: number;
  code?: string;
  details?: Record<string, unknown>;
}

// Query state types
export interface QueryState<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: QueryError | null;
  isFetching: boolean;
  isStale: boolean;
  refetch: () => void;
}

// Mutation state types
export interface MutationState<TData, TVariables = unknown> {
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
  error: QueryError | null;
  mutate: (variables: TVariables) => void;
  mutateAsync: (variables: TVariables) => Promise<TData>;
  reset: () => void;
}

// Query invalidation types
export interface InvalidationOptions {
  exact?: boolean;
  predicate?: (query: unknown) => boolean;
}

// Prefetch types
export interface PrefetchOptions {
  staleTime?: number;
  gcTime?: number;
}
