// Common API types - shared across all API modules
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, unknown>;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Request/Response types
export interface ApiRequest<T = unknown> {
  method: HttpMethod;
  url: string;
  data?: T;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface ApiRequestConfig {
  timeout?: number;
  retries?: number;
  cache?: boolean;
  signal?: AbortSignal;
}

// API Endpoint types
export interface ApiEndpoint {
  url: string;
  method: HttpMethod;
  auth?: boolean;
  rateLimit?: number;
}

// Query parameters
export interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

// Filter types
export interface FilterParams {
  search?: string;
  category?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}
