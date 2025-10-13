// Example: Orders API endpoints
import { API_BASE } from './base';

const ORDERS_BASE = `${API_BASE.PREFIX}/${API_BASE.VERSION}/orders`;

export const ORDERS_ENDPOINTS = {
  // Basic CRUD
  LIST: ORDERS_BASE,
  CREATE: ORDERS_BASE,
  GET: (id: string) => `${ORDERS_BASE}/${id}`,
  UPDATE: (id: string) => `${ORDERS_BASE}/${id}`,
  PATCH: (id: string) => `${ORDERS_BASE}/${id}`,
  DELETE: (id: string) => `${ORDERS_BASE}/${id}`,

  // Order Management
  CANCEL: (id: string) => `${ORDERS_BASE}/${id}/cancel`,
  REFUND: (id: string) => `${ORDERS_BASE}/${id}/refund`,
  RETURN: (id: string) => `${ORDERS_BASE}/${id}/return`,
  EXCHANGE: (id: string) => `${ORDERS_BASE}/${id}/exchange`,

  // Fulfillment
  FULFILL: (id: string) => `${ORDERS_BASE}/${id}/fulfill`,
  SHIP: (id: string) => `${ORDERS_BASE}/${id}/ship`,
  DELIVER: (id: string) => `${ORDERS_BASE}/${id}/deliver`,
  PICKUP: (id: string) => `${ORDERS_BASE}/${id}/pickup`,

  // Status Management
  STATUS: (id: string) => `${ORDERS_BASE}/${id}/status`,
  STATUS_HISTORY: (id: string) => `${ORDERS_BASE}/${id}/status/history`,
  UPDATE_STATUS: (id: string) => `${ORDERS_BASE}/${id}/status/update`,

  // Tracking & Shipping
  TRACKING: (id: string) => `${ORDERS_BASE}/${id}/tracking`,
  TRACKING_NUMBER: (id: string) => `${ORDERS_BASE}/${id}/tracking/number`,
  SHIPPING_LABEL: (id: string) => `${ORDERS_BASE}/${id}/shipping/label`,
  SHIPPING_METHODS: `${ORDERS_BASE}/shipping/methods`,

  // Payment Management
  PAYMENT: (id: string) => `${ORDERS_BASE}/${id}/payment`,
  PAYMENT_METHODS: (id: string) => `${ORDERS_BASE}/${id}/payment/methods`,
  PAYMENT_HISTORY: (id: string) => `${ORDERS_BASE}/${id}/payment/history`,
  INVOICE: (id: string) => `${ORDERS_BASE}/${id}/invoice`,
  RECEIPT: (id: string) => `${ORDERS_BASE}/${id}/receipt`,

  // Order Items
  ITEMS: (id: string) => `${ORDERS_BASE}/${id}/items`,
  ADD_ITEM: (id: string) => `${ORDERS_BASE}/${id}/items`,
  UPDATE_ITEM: (id: string, itemId: string) =>
    `${ORDERS_BASE}/${id}/items/${itemId}`,
  REMOVE_ITEM: (id: string, itemId: string) =>
    `${ORDERS_BASE}/${id}/items/${itemId}`,

  // Customer Management
  CUSTOMER: (id: string) => `${ORDERS_BASE}/${id}/customer`,
  CUSTOMER_ORDERS: (customerId: string) =>
    `${ORDERS_BASE}/customer/${customerId}`,
  GUEST_ORDERS: `${ORDERS_BASE}/guest`,

  // Analytics & Reporting
  ANALYTICS: `${ORDERS_BASE}/analytics`,
  SALES_REPORT: `${ORDERS_BASE}/reports/sales`,
  REVENUE_REPORT: `${ORDERS_BASE}/reports/revenue`,
  CUSTOMER_REPORT: `${ORDERS_BASE}/reports/customer`,
  PRODUCT_REPORT: `${ORDERS_BASE}/reports/product`,

  // Bulk Operations
  BULK_CREATE: `${ORDERS_BASE}/bulk`,
  BULK_UPDATE: `${ORDERS_BASE}/bulk`,
  BULK_DELETE: `${ORDERS_BASE}/bulk`,
  BULK_EXPORT: `${ORDERS_BASE}/bulk/export`,
  BULK_IMPORT: `${ORDERS_BASE}/bulk/import`,

  // Notifications
  NOTIFICATIONS: (id: string) => `${ORDERS_BASE}/${id}/notifications`,
  EMAIL_NOTIFICATIONS: (id: string) =>
    `${ORDERS_BASE}/${id}/notifications/email`,
  SMS_NOTIFICATIONS: (id: string) => `${ORDERS_BASE}/${id}/notifications/sms`,

  // Returns & Exchanges
  RETURNS: `${ORDERS_BASE}/returns`,
  RETURN_CREATE: `${ORDERS_BASE}/returns`,
  RETURN_UPDATE: (returnId: string) => `${ORDERS_BASE}/returns/${returnId}`,
  EXCHANGES: `${ORDERS_BASE}/exchanges`,
  EXCHANGE_CREATE: `${ORDERS_BASE}/exchanges`,

  // Discounts & Coupons
  DISCOUNTS: (id: string) => `${ORDERS_BASE}/${id}/discounts`,
  COUPONS: (id: string) => `${ORDERS_BASE}/${id}/coupons`,
  APPLY_COUPON: (id: string) => `${ORDERS_BASE}/${id}/coupons/apply`,
  REMOVE_COUPON: (id: string) => `${ORDERS_BASE}/${id}/coupons/remove`,
} as const;
