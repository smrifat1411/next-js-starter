// Example: UI state hook with selectors
import { useUIStore } from '../stores/ui-store';

// Theme selectors
export const useTheme = () => useUIStore(state => state.theme);
export const useSetTheme = () => useUIStore(state => state.setTheme);

// Sidebar selectors
export const useSidebar = () =>
  useUIStore(state => ({
    open: state.sidebarOpen,
    collapsed: state.sidebarCollapsed,
  }));

export const useSidebarActions = () =>
  useUIStore(state => ({
    toggle: state.toggleSidebar,
    setOpen: state.setSidebarOpen,
    setCollapsed: state.setSidebarCollapsed,
  }));

// Modal selectors
export const useModal = (modalId: string) =>
  useUIStore(state => ({
    isOpen: state.modals[modalId] || false,
    open: () => state.openModal(modalId),
    close: () => state.closeModal(modalId),
  }));

// Loading selectors
export const useLoading = (key: string) =>
  useUIStore(state => ({
    isLoading: state.loading[key] || false,
    setLoading: (loading: boolean) => state.setLoading(key, loading),
  }));

// Toast selectors
export const useToasts = () => useUIStore(state => state.toasts);
export const useToastActions = () =>
  useUIStore(state => ({
    addToast: state.addToast,
    removeToast: state.removeToast,
    clearToasts: state.clearToasts,
  }));
