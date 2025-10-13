// Form component types
import { BaseComponentProps } from '../common';

// Form component types
export interface FormProps extends BaseComponentProps {
  onSubmit: (data: FormData) => void;
  onReset?: () => void;
  loading?: boolean;
  error?: string;
  success?: string;
}

// Form field types
export interface FormFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  required?: boolean;
  error?: string;
  help?: string;
  disabled?: boolean;
}

// Select component types
export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseComponentProps {
  options: SelectOption[];
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  onChange?: (value: string | number) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

// Checkbox component types
export interface CheckboxProps extends BaseComponentProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

// Radio component types
export interface RadioProps extends BaseComponentProps {
  name: string;
  value: string | number;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  onChange?: (value: string | number) => void;
}

// Textarea component types
export interface TextareaProps extends BaseComponentProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

// File upload component types
export interface FileUploadProps extends BaseComponentProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  onChange?: (files: FileList | null) => void;
  onDrop?: (files: FileList) => void;
}
