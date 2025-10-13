import * as React from 'react';

export interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const Select = ({ children }: SelectProps) => {
  return <div className="relative">{children}</div>;
};

const SelectTrigger = ({ children, className = '' }: SelectTriggerProps) => (
  <div
    className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  >
    {children}
    <svg
      className="h-4 w-4 opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
);

const SelectContent = ({ children, className = '' }: SelectContentProps) => (
  <div
    className={`absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg ${className}`}
  >
    {children}
  </div>
);

const SelectItem = ({ children, className = '' }: SelectItemProps) => (
  <div
    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${className}`}
  >
    {children}
  </div>
);

export { Select, SelectTrigger, SelectContent, SelectItem };
