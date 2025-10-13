// Dashboard feature types
export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
  orders: number;
  growth: {
    users: number;
    revenue: number;
    orders: number;
  };
}

export interface Activity {
  id: string;
  type: 'user' | 'order' | 'payment' | 'system';
  message: string;
  timestamp: string;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
  metadata?: Record<string, any>;
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }>;
}

export interface DashboardWidget {
  id: string;
  title: string;
  type: 'stat' | 'chart' | 'table' | 'list';
  data: any;
  size: 'sm' | 'md' | 'lg' | 'xl';
  position: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface DashboardLayout {
  widgets: DashboardWidget[];
  columns: number;
  gap: number;
}

export interface DashboardFilters {
  dateRange: {
    start: string;
    end: string;
  };
  period: 'day' | 'week' | 'month' | 'quarter' | 'year';
  category?: string;
  status?: string;
}

export interface DashboardContextType {
  stats: DashboardStats | null;
  activities: Activity[];
  isLoading: boolean;
  error: string | null;
  filters: DashboardFilters;
  refreshStats: () => Promise<void>;
  refreshActivities: () => Promise<void>;
  updateFilters: (filters: Partial<DashboardFilters>) => void;
}
