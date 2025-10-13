// Dashboard-specific types
export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
  orders: number;
}

export interface Activity {
  id: string;
  type: string;
  message: string;
  timestamp: string;
}
