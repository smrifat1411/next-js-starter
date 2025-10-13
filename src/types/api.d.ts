// Example: API types (moved to src/types/api/)
// This file is kept for backward compatibility
// Import from @/types/api instead

// Re-export from centralized API types
export type {
  ApiResponse,
  ApiError,
  PaginationParams,
  PaginatedResponse,
  HttpMethod,
  ApiRequest,
  ApiRequestConfig,
  ApiEndpoint,
  QueryParams,
  FilterParams,
} from '@/types/api/common';
