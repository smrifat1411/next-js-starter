// Example: Auth feature API with industry-standard REST endpoints
import { apiClient } from '../client';
import { AUTH_ENDPOINTS } from '@/lib/constants/api';
import type {
  LoginData,
  RegisterData,
  AuthResponse,
  RefreshTokenResponse,
  ForgotPasswordData,
  ResetPasswordData,
  ChangePasswordData,
} from '@/types/api/auth';

export const authApi = {
  // POST /api/v1/auth/login - User login
  login: async (data: LoginData): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, data);
  },

  // POST /api/v1/auth/register - User registration
  register: async (data: RegisterData): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(AUTH_ENDPOINTS.REGISTER, data);
  },

  // POST /api/v1/auth/logout - User logout
  logout: async (): Promise<void> => {
    return apiClient.post<void>(AUTH_ENDPOINTS.LOGOUT);
  },

  // POST /api/v1/auth/refresh - Refresh access token
  refreshToken: async (): Promise<RefreshTokenResponse> => {
    return apiClient.post<RefreshTokenResponse>(AUTH_ENDPOINTS.REFRESH);
  },

  // POST /api/v1/auth/verify - Verify email token
  verify: async (token: string): Promise<void> => {
    return apiClient.post<void>(AUTH_ENDPOINTS.VERIFY, { token });
  },

  // POST /api/v1/auth/forgot-password - Request password reset
  forgotPassword: async (data: ForgotPasswordData): Promise<void> => {
    return apiClient.post<void>(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
  },

  // POST /api/v1/auth/reset-password - Reset password with token
  resetPassword: async (data: ResetPasswordData): Promise<void> => {
    return apiClient.post<void>(AUTH_ENDPOINTS.RESET_PASSWORD, data);
  },

  // POST /api/v1/auth/change-password - Change password (authenticated)
  changePassword: async (data: ChangePasswordData): Promise<void> => {
    return apiClient.post<void>(AUTH_ENDPOINTS.CHANGE_PASSWORD, data);
  },
};
