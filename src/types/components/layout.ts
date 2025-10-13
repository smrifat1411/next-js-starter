// Layout component types
import { ReactNode } from 'react';
import { BaseComponentProps } from '../common';

// Layout component types
export interface LayoutProps extends BaseComponentProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

// Header component types
export interface HeaderProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  logo?: ReactNode;
  navigation?: ReactNode;
  userMenu?: ReactNode;
}

// Sidebar component types
export interface SidebarProps extends BaseComponentProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  activeItem?: string;
  onItemClick?: (item: SidebarItem) => void;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  badge?: string | number;
  children?: SidebarItem[];
  disabled?: boolean;
}

// Footer component types
export interface FooterProps extends BaseComponentProps {
  copyright?: string;
  links?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ platform: string; href: string; icon: ReactNode }>;
}

// Breadcrumb component types
export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// Container component types
export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
}

// Grid component types
export interface GridProps extends BaseComponentProps {
  columns?: number;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

// Flex component types
export interface FlexProps extends BaseComponentProps {
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  gap?: 'none' | 'sm' | 'md' | 'lg';
}
