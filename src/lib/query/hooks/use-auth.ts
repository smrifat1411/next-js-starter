// Example: Auth hooks with TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';
import { authApi } from '@/lib/api/auth';
import type { LoginData, RegisterData, AuthResponse } from '@/types/api/auth';

// Get current user
export function useAuthUser() {
  return useQuery({
    queryKey: queryKeys.auth.user(),
    queryFn: async () => {
      // This would typically check localStorage or make an API call
      const token = localStorage.getItem('accessToken');
      if (!token) return null;

      // In a real app, you'd validate the token with the server
      return {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user' as const,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Login mutation
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginData) => authApi.login(data),
    onSuccess: (response: AuthResponse) => {
      // Store tokens
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      // Update auth query
      queryClient.setQueryData(queryKeys.auth.user(), response.user);

      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.all });
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });
}

// Register mutation
export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegisterData) => authApi.register(data),
    onSuccess: (response: AuthResponse) => {
      // Store tokens
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);

      // Update auth query
      queryClient.setQueryData(queryKeys.auth.user(), response.user);

      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.all });
    },
    onError: error => {
      console.error('Registration failed:', error);
    },
  });
}

// Logout mutation
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // Clear tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      // Clear all queries
      queryClient.clear();

      // Reset auth query
      queryClient.setQueryData(queryKeys.auth.user(), null);
    },
    onError: error => {
      console.error('Logout failed:', error);

      // Still clear local data even if API call fails
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      queryClient.clear();
      queryClient.setQueryData(queryKeys.auth.user(), null);
    },
  });
}

// Refresh token mutation
export function useRefreshToken() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.refreshToken(),
    onSuccess: response => {
      // Update stored token
      localStorage.setItem('accessToken', response.accessToken);

      // Invalidate auth queries to refetch with new token
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.all });
    },
    onError: error => {
      console.error('Token refresh failed:', error);

      // If refresh fails, logout user
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      queryClient.clear();
      queryClient.setQueryData(queryKeys.auth.user(), null);
    },
  });
}

// Change password mutation
export function useChangePassword() {
  return useMutation({
    mutationFn: (data: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    }) => authApi.changePassword(data),
    onSuccess: () => {
      console.log('Password changed successfully');
    },
    onError: error => {
      console.error('Password change failed:', error);
    },
  });
}

// Forgot password mutation
export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: { email: string }) => authApi.forgotPassword(data),
    onSuccess: () => {
      console.log('Password reset email sent');
    },
    onError: error => {
      console.error('Forgot password failed:', error);
    },
  });
}

// Reset password mutation
export function useResetPassword() {
  return useMutation({
    mutationFn: (data: {
      token: string;
      password: string;
      confirmPassword: string;
    }) => authApi.resetPassword(data),
    onSuccess: () => {
      console.log('Password reset successfully');
    },
    onError: error => {
      console.error('Password reset failed:', error);
    },
  });
}
