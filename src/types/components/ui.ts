// UI component types
import { ReactNode } from 'react';
import { BaseComponentProps, Size, Variant } from '../common';

// Button component types
export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

// Input component types
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

// Card component types
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  actions?: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

// Modal component types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: Size;
  closable?: boolean;
  overlay?: boolean;
}

// Loading component types
export interface LoadingProps extends BaseComponentProps {
  size?: Size;
  text?: string;
  overlay?: boolean;
}

// Error component types
export interface ErrorProps extends BaseComponentProps {
  title?: string;
  message?: string;
  code?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}
