// Example: Error boundary common component
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return <div className="error-boundary">{children}</div>;
}
