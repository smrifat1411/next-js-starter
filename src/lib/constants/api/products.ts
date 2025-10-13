// Example: Products API endpoints
import { API_BASE } from './base';

const PRODUCTS_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/products`;

export const PRODUCTS_ENDPOINTS = {
  // Basic CRUD
  LIST: PRODUCTS_BASE,
  CREATE: PRODUCTS_BASE,
  GET: (id: string) => `${PRODUCTS_BASE}/${id}`,
  UPDATE: (id: string) => `${PRODUCTS_BASE}/${id}`,
  PATCH: (id: string) => `${PRODUCTS_BASE}/${id}`,
  DELETE: (id: string) => `${PRODUCTS_BASE}/${id}`,

  // Search & Filtering
  SEARCH: `${PRODUCTS_BASE}/search`,
  FILTER: `${PRODUCTS_BASE}/filter`,
  CATEGORIES: `${PRODUCTS_BASE}/categories`,
  BRANDS: `${PRODUCTS_BASE}/brands`,
  TAGS: `${PRODUCTS_BASE}/tags`,

  // Product Variants
  VARIANTS: (id: string) => `${PRODUCTS_BASE}/${id}/variants`,
  VARIANT_CREATE: (id: string) => `${PRODUCTS_BASE}/${id}/variants`,
  VARIANT_UPDATE: (id: string, variantId: string) =>
    `${PRODUCTS_BASE}/${id}/variants/${variantId}`,
  VARIANT_DELETE: (id: string, variantId: string) =>
    `${PRODUCTS_BASE}/${id}/variants/${variantId}`,

  // Inventory Management
  INVENTORY: (id: string) => `${PRODUCTS_BASE}/${id}/inventory`,
  STOCK_UPDATE: (id: string) => `${PRODUCTS_BASE}/${id}/inventory/stock`,
  STOCK_HISTORY: (id: string) => `${PRODUCTS_BASE}/${id}/inventory/history`,
  LOW_STOCK_ALERTS: `${PRODUCTS_BASE}/inventory/low-stock`,

  // Pricing
  PRICING: (id: string) => `${PRODUCTS_BASE}/${id}/pricing`,
  PRICE_HISTORY: (id: string) => `${PRODUCTS_BASE}/${id}/pricing/history`,
  DISCOUNTS: (id: string) => `${PRODUCTS_BASE}/${id}/discounts`,
  BULK_PRICING: `${PRODUCTS_BASE}/pricing/bulk`,

  // Media & Assets
  MEDIA: (id: string) => `${PRODUCTS_BASE}/${id}/media`,
  IMAGES: (id: string) => `${PRODUCTS_BASE}/${id}/images`,
  VIDEOS: (id: string) => `${PRODUCTS_BASE}/${id}/videos`,
  DOCUMENTS: (id: string) => `${PRODUCTS_BASE}/${id}/documents`,

  // Reviews & Ratings
  REVIEWS: (id: string) => `${PRODUCTS_BASE}/${id}/reviews`,
  REVIEW_CREATE: (id: string) => `${PRODUCTS_BASE}/${id}/reviews`,
  REVIEW_UPDATE: (id: string, reviewId: string) =>
    `${PRODUCTS_BASE}/${id}/reviews/${reviewId}`,
  REVIEW_DELETE: (id: string, reviewId: string) =>
    `${PRODUCTS_BASE}/${id}/reviews/${reviewId}`,
  RATINGS: (id: string) => `${PRODUCTS_BASE}/${id}/ratings`,

  // Analytics & Performance
  ANALYTICS: (id: string) => `${PRODUCTS_BASE}/${id}/analytics`,
  VIEWS: (id: string) => `${PRODUCTS_BASE}/${id}/views`,
  SALES: (id: string) => `${PRODUCTS_BASE}/${id}/sales`,
  PERFORMANCE: (id: string) => `${PRODUCTS_BASE}/${id}/performance`,

  // Bulk Operations
  BULK_CREATE: `${PRODUCTS_BASE}/bulk`,
  BULK_UPDATE: `${PRODUCTS_BASE}/bulk`,
  BULK_DELETE: `${PRODUCTS_BASE}/bulk`,
  BULK_EXPORT: `${PRODUCTS_BASE}/bulk/export`,
  BULK_IMPORT: `${PRODUCTS_BASE}/bulk/import`,

  // Product Relationships
  RELATED: (id: string) => `${PRODUCTS_BASE}/${id}/related`,
  SIMILAR: (id: string) => `${PRODUCTS_BASE}/${id}/similar`,
  RECOMMENDATIONS: (id: string) => `${PRODUCTS_BASE}/${id}/recommendations`,
  BUNDLES: (id: string) => `${PRODUCTS_BASE}/${id}/bundles`,

  // SEO & Marketing
  SEO: (id: string) => `${PRODUCTS_BASE}/${id}/seo`,
  META_TAGS: (id: string) => `${PRODUCTS_BASE}/${id}/meta-tags`,
  SOCIAL_MEDIA: (id: string) => `${PRODUCTS_BASE}/${id}/social-media`,
  MARKETING_CAMPAIGNS: (id: string) => `${PRODUCTS_BASE}/${id}/campaigns`,
} as const;
