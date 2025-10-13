// Auth-specific types
export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
  user: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    avatar?: string;
    status: 'active' | 'inactive' | 'suspended';
    emailVerified: boolean;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface RefreshTokenResponse {
  accessToken: string;
  expiresIn: number;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Additional auth-related types
export interface AuthState {
  user: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    avatar?: string;
    status: 'active' | 'inactive' | 'suspended';
    emailVerified: boolean;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType {
  user: {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    avatar?: string;
    status: 'active' | 'inactive' | 'suspended';
    emailVerified: boolean;
    lastLogin?: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (data: ForgotPasswordData) => Promise<void>;
  resetPassword: (data: ResetPasswordData) => Promise<void>;
  changePassword: (data: ChangePasswordData) => Promise<void>;
  refreshToken: () => Promise<void>;
}
