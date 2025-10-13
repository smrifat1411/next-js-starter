// Example: Users hooks with TanStack Query
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { queryKeys } from '../keys';
import { usersApi } from '@/lib/api/users';
import type { User, CreateUserData, UpdateUserData } from '@/types/api/users';

// Get users list with pagination
export function useUsers(params?: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  return useQuery({
    queryKey: queryKeys.users.list(params || {}),
    queryFn: () => usersApi.list(params),
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Get single user
export function useUser(userId: string) {
  return useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: () => usersApi.get(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Search users
export function useSearchUsers(query: string) {
  return useQuery({
    queryKey: queryKeys.users.search(query),
    queryFn: () => usersApi.search({ q: query }),
    enabled: query.length > 2, // Only search if query is longer than 2 characters
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 2 * 60 * 1000, // 2 minutes
  });
}

// Infinite query for users (for infinite scroll)
export function useInfiniteUsers(params?: { limit?: number; search?: string }) {
  return useInfiniteQuery({
    queryKey: queryKeys.users.list(params || {}),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await usersApi.list({
        ...params,
        page: pageParam,
        limit: params?.limit || 10,
      });
      return response;
    },
    getNextPageParam: lastPage => {
      const { page, total, limit } = lastPage;
      const totalPages = Math.ceil(total / limit);
      return page < totalPages ? page + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Create user mutation
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserData) => usersApi.create(data),
    onSuccess: newUser => {
      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });

      // Add the new user to the cache
      queryClient.setQueryData(queryKeys.users.detail(newUser.id), newUser);
    },
    onError: error => {
      console.error('Create user failed:', error);
    },
  });
}

// Update user mutation
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserData }) =>
      usersApi.update(id, data),
    onSuccess: updatedUser => {
      // Update the user in cache
      queryClient.setQueryData(
        queryKeys.users.detail(updatedUser.id),
        updatedUser
      );

      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
    onError: error => {
      console.error('Update user failed:', error);
    },
  });
}

// Delete user mutation
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => usersApi.delete(userId),
    onSuccess: (_, userId) => {
      // Remove user from cache
      queryClient.removeQueries({ queryKey: queryKeys.users.detail(userId) });

      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
    onError: error => {
      console.error('Delete user failed:', error);
    },
  });
}

// Bulk delete users mutation
export function useBulkDeleteUsers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userIds: string[]) => usersApi.bulkDelete(userIds),
    onSuccess: (_, userIds) => {
      // Remove users from cache
      userIds.forEach(userId => {
        queryClient.removeQueries({ queryKey: queryKeys.users.detail(userId) });
      });

      // Invalidate users list to refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
    onError: error => {
      console.error('Bulk delete users failed:', error);
    },
  });
}

// Prefetch user data
export function usePrefetchUser() {
  const queryClient = useQueryClient();

  return (userId: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.users.detail(userId),
      queryFn: () => usersApi.get(userId),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  };
}

// Optimistic update for user
export function useOptimisticUpdateUser() {
  const queryClient = useQueryClient();

  return (userId: string, data: Partial<UpdateUserData>) => {
    // Optimistically update the cache
    queryClient.setQueryData(
      queryKeys.users.detail(userId),
      (old: User | undefined) => {
        if (!old) return old;
        return { ...old, ...data };
      }
    );

    // Revert on error
    return () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.users.detail(userId),
      });
    };
  };
}
