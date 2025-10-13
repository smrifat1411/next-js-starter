// Example: Custom render function with providers
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
// import { ThemeProvider } from '@/lib/providers/theme-provider' // File doesn't exist
import { ToastProvider } from '@/lib/providers/toast-provider';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: 'light' | 'dark' | 'system';
}

export function renderWithProviders(
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) {
  const { ...renderOptions } = options;

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      // <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
      // </ThemeProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything
export * from '@testing-library/react';
export { renderWithProviders as render };
