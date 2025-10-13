// Example: Users feature API with industry-standard REST endpoints
import { apiClient } from '../client';
import { USERS_ENDPOINTS } from '@/lib/constants/api';
import type {
  User,
  CreateUserData,
  UpdateUserData,
  UsersListResponse,
  SearchUsersParams,
} from '@/types/api/users';

export const usersApi = {
  // GET /api/v1/users - List users with pagination
  list: async (params?: SearchUsersParams): Promise<UsersListResponse> => {
    return apiClient.get<UsersListResponse>(USERS_ENDPOINTS.LIST, { params });
  },

  // GET /api/v1/users/:id - Get single user
  get: async (id: string): Promise<User> => {
    return apiClient.get<User>(USERS_ENDPOINTS.GET(id));
  },

  // POST /api/v1/users - Create new user
  create: async (data: CreateUserData): Promise<User> => {
    return apiClient.post<User>(USERS_ENDPOINTS.CREATE, data);
  },

  // PUT /api/v1/users/:id - Update entire user
  update: async (id: string, data: UpdateUserData): Promise<User> => {
    return apiClient.put<User>(USERS_ENDPOINTS.UPDATE(id), data);
  },

  // PATCH /api/v1/users/:id - Partial update
  patch: async (id: string, data: Partial<UpdateUserData>): Promise<User> => {
    return apiClient.patch<User>(USERS_ENDPOINTS.PATCH(id), data);
  },

  // DELETE /api/v1/users/:id - Delete user
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(USERS_ENDPOINTS.DELETE(id));
  },

  // GET /api/v1/users/search - Search users
  search: async (params: SearchUsersParams): Promise<UsersListResponse> => {
    return apiClient.get<UsersListResponse>(USERS_ENDPOINTS.SEARCH, { params });
  },

  // DELETE /api/v1/users/bulk - Bulk delete users
  bulkDelete: async (ids: string[]): Promise<void> => {
    return apiClient.delete<void>(USERS_ENDPOINTS.BULK_DELETE, {
      data: { ids },
    });
  },
};
