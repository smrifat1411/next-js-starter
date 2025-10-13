// Common component types
import { ReactNode } from 'react';
import { BaseComponentProps } from '../common';
import { PaginationParams } from '../api/common';

// Table component types
export interface TableColumn<T = unknown> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  render?: (value: T[keyof T], record: T) => ReactNode;
  width?: string | number;
}

export interface TableProps<T = unknown> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: PaginationParams;
  onSort?: (key: keyof T, order: 'asc' | 'desc') => void;
  onRowClick?: (record: T) => void;
}

// PaginationParams moved to src/types/api/common.ts

// List component types
export interface ListProps<T = unknown> extends BaseComponentProps {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  loading?: boolean;
  empty?: ReactNode;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

// Badge component types
export interface BadgeProps extends BaseComponentProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

// Avatar component types
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fallback?: ReactNode;
  online?: boolean;
}

// Tooltip component types
export interface TooltipProps extends BaseComponentProps {
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click' | 'focus';
  disabled?: boolean;
}

// Popover component types
export interface PopoverProps extends BaseComponentProps {
  content: ReactNode;
  trigger: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Dropdown component types
export interface DropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends BaseComponentProps {
  items: DropdownItem[];
  trigger: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Accordion component types
export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends BaseComponentProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  onToggle?: (id: string, open: boolean) => void;
}
