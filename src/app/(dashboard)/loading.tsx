// Example: Dashboard loading component
import { LoadingSpinner } from '@/components/common/loading-spinner';

export default function DashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <LoadingSpinner />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    </div>
  );
}
