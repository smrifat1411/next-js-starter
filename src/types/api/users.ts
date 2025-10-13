// Users-specific types
export interface User {
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
}

export interface CreateUserData {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  role?: 'user' | 'admin';
  status?: 'active' | 'inactive' | 'suspended';
}

export interface UsersListResponse {
  data: User[];
  total: number;
  page: number;
  limit: number;
}

export interface SearchUsersParams {
  q?: string;
  page?: number;
  limit?: number;
  role?: 'user' | 'admin';
  status?: 'active' | 'inactive' | 'suspended';
}

// Additional user-related types
export interface UserFilters {
  search?: string;
  role?: 'user' | 'admin';
  status?: 'active' | 'inactive' | 'suspended';
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface UserSortOptions {
  field: 'name' | 'email' | 'role' | 'status' | 'createdAt' | 'lastLogin';
  order: 'asc' | 'desc';
}

export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  suspended: number;
  newThisMonth: number;
  growth: number;
}

export interface UserActivity {
  id: string;
  userId: string;
  type: 'login' | 'logout' | 'profile_update' | 'password_change';
  description: string;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
}
