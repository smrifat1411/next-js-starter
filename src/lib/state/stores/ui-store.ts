// Example: UI state store using Zustand
import { create } from 'zustand';

interface UIState {
  // Theme state
  theme: 'light' | 'dark' | 'system';

  // Sidebar state
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;

  // Modal state
  modals: Record<string, boolean>;

  // Loading states
  loading: Record<string, boolean>;

  // Toast notifications
  toasts: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description?: string;
    duration?: number;
  }>;

  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  setLoading: (key: string, loading: boolean) => void;
  addToast: (toast: Omit<UIState['toasts'][0], 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  // Initial state
  theme: 'system',
  sidebarOpen: true,
  sidebarCollapsed: false,
  modals: {},
  loading: {},
  toasts: [],

  // Actions
  setTheme: theme => set({ theme }),

  toggleSidebar: () =>
    set(state => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  setSidebarOpen: sidebarOpen => set({ sidebarOpen }),

  setSidebarCollapsed: sidebarCollapsed => set({ sidebarCollapsed }),

  openModal: modalId =>
    set(state => ({
      modals: { ...state.modals, [modalId]: true },
    })),

  closeModal: modalId =>
    set(state => ({
      modals: { ...state.modals, [modalId]: false },
    })),

  setLoading: (key, loading) =>
    set(state => ({
      loading: { ...state.loading, [key]: loading },
    })),

  addToast: toast => {
    const id = Math.random().toString(36).substr(2, 9);
    set(state => ({
      toasts: [...state.toasts, { ...toast, id }],
    }));

    // Auto remove toast after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },

  removeToast: id =>
    set(state => ({
      toasts: state.toasts.filter(toast => toast.id !== id),
    })),

  clearToasts: () => set({ toasts: [] }),
}));
