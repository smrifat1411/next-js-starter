// Example: Content Management API endpoints
import { API_BASE } from './base';

const CONTENT_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/content`;

export const CONTENT_ENDPOINTS = {
  // Pages Management
  PAGES: `${CONTENT_BASE}/pages`,
  PAGE_CREATE: `${CONTENT_BASE}/pages`,
  PAGE_GET: (id: string) => `${CONTENT_BASE}/pages/${id}`,
  PAGE_UPDATE: (id: string) => `${CONTENT_BASE}/pages/${id}`,
  PAGE_DELETE: (id: string) => `${CONTENT_BASE}/pages/${id}`,
  PAGE_PUBLISH: (id: string) => `${CONTENT_BASE}/pages/${id}/publish`,
  PAGE_UNPUBLISH: (id: string) => `${CONTENT_BASE}/pages/${id}/unpublish`,

  // Posts Management
  POSTS: `${CONTENT_BASE}/posts`,
  POST_CREATE: `${CONTENT_BASE}/posts`,
  POST_GET: (id: string) => `${CONTENT_BASE}/posts/${id}`,
  POST_UPDATE: (id: string) => `${CONTENT_BASE}/posts/${id}`,
  POST_DELETE: (id: string) => `${CONTENT_BASE}/posts/${id}`,
  POST_PUBLISH: (id: string) => `${CONTENT_BASE}/posts/${id}/publish`,
  POST_UNPUBLISH: (id: string) => `${CONTENT_BASE}/posts/${id}/unpublish`,

  // Categories Management
  CATEGORIES: `${CONTENT_BASE}/categories`,
  CATEGORY_CREATE: `${CONTENT_BASE}/categories`,
  CATEGORY_GET: (id: string) => `${CONTENT_BASE}/categories/${id}`,
  CATEGORY_UPDATE: (id: string) => `${CONTENT_BASE}/categories/${id}`,
  CATEGORY_DELETE: (id: string) => `${CONTENT_BASE}/categories/${id}`,

  // Tags Management
  TAGS: `${CONTENT_BASE}/tags`,
  TAG_CREATE: `${CONTENT_BASE}/tags`,
  TAG_GET: (id: string) => `${CONTENT_BASE}/tags/${id}`,
  TAG_UPDATE: (id: string) => `${CONTENT_BASE}/tags/${id}`,
  TAG_DELETE: (id: string) => `${CONTENT_BASE}/tags/${id}`,

  // Media Management
  MEDIA: `${CONTENT_BASE}/media`,
  MEDIA_UPLOAD: `${CONTENT_BASE}/media/upload`,
  MEDIA_GET: (id: string) => `${CONTENT_BASE}/media/${id}`,
  MEDIA_UPDATE: (id: string) => `${CONTENT_BASE}/media/${id}`,
  MEDIA_DELETE: (id: string) => `${CONTENT_BASE}/media/${id}`,
  MEDIA_DOWNLOAD: (id: string) => `${CONTENT_BASE}/media/${id}/download`,

  // Media Types
  IMAGES: `${CONTENT_BASE}/media/images`,
  VIDEOS: `${CONTENT_BASE}/media/videos`,
  AUDIO: `${CONTENT_BASE}/media/audio`,
  DOCUMENTS: `${CONTENT_BASE}/media/documents`,

  // Content Templates
  TEMPLATES: `${CONTENT_BASE}/templates`,
  TEMPLATE_CREATE: `${CONTENT_BASE}/templates`,
  TEMPLATE_GET: (id: string) => `${CONTENT_BASE}/templates/${id}`,
  TEMPLATE_UPDATE: (id: string) => `${CONTENT_BASE}/templates/${id}`,
  TEMPLATE_DELETE: (id: string) => `${CONTENT_BASE}/templates/${id}`,

  // Content Blocks
  BLOCKS: `${CONTENT_BASE}/blocks`,
  BLOCK_CREATE: `${CONTENT_BASE}/blocks`,
  BLOCK_GET: (id: string) => `${CONTENT_BASE}/blocks/${id}`,
  BLOCK_UPDATE: (id: string) => `${CONTENT_BASE}/blocks/${id}`,
  BLOCK_DELETE: (id: string) => `${CONTENT_BASE}/blocks/${id}`,

  // Content Workflow
  WORKFLOW: `${CONTENT_BASE}/workflow`,
  DRAFT: (id: string) => `${CONTENT_BASE}/workflow/${id}/draft`,
  REVIEW: (id: string) => `${CONTENT_BASE}/workflow/${id}/review`,
  APPROVE: (id: string) => `${CONTENT_BASE}/workflow/${id}/approve`,
  REJECT: (id: string) => `${CONTENT_BASE}/workflow/${id}/reject`,

  // Content Analytics
  ANALYTICS: `${CONTENT_BASE}/analytics`,
  PAGE_VIEWS: (id: string) => `${CONTENT_BASE}/analytics/${id}/views`,
  ENGAGEMENT: (id: string) => `${CONTENT_BASE}/analytics/${id}/engagement`,
  PERFORMANCE: (id: string) => `${CONTENT_BASE}/analytics/${id}/performance`,

  // SEO Management
  SEO: `${CONTENT_BASE}/seo`,
  META_TAGS: (id: string) => `${CONTENT_BASE}/seo/${id}/meta-tags`,
  KEYWORDS: (id: string) => `${CONTENT_BASE}/seo/${id}/keywords`,
  SITEMAP: `${CONTENT_BASE}/seo/sitemap`,
  ROBOTS_TXT: `${CONTENT_BASE}/seo/robots-txt`,

  // Content Search
  SEARCH: `${CONTENT_BASE}/search`,
  SEARCH_SUGGESTIONS: `${CONTENT_BASE}/search/suggestions`,
  SEARCH_HISTORY: `${CONTENT_BASE}/search/history`,
  SEARCH_ANALYTICS: `${CONTENT_BASE}/search/analytics`,

  // Content Import/Export
  IMPORT: `${CONTENT_BASE}/import`,
  EXPORT: `${CONTENT_BASE}/export`,
  BACKUP: `${CONTENT_BASE}/backup`,
  RESTORE: `${CONTENT_BASE}/restore`,

  // Content Scheduling
  SCHEDULED: `${CONTENT_BASE}/scheduled`,
  SCHEDULE: (id: string) => `${CONTENT_BASE}/schedule/${id}`,
  UNSCHEDULE: (id: string) => `${CONTENT_BASE}/schedule/${id}/unschedule`,

  // Content Comments
  COMMENTS: (id: string) => `${CONTENT_BASE}/comments/${id}`,
  COMMENT_CREATE: (id: string) => `${CONTENT_BASE}/comments/${id}`,
  COMMENT_UPDATE: (id: string, commentId: string) =>
    `${CONTENT_BASE}/comments/${id}/${commentId}`,
  COMMENT_DELETE: (id: string, commentId: string) =>
    `${CONTENT_BASE}/comments/${id}/${commentId}`,
} as const;
