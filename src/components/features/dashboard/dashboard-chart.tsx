// Example: Dashboard chart component
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
}

export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">
            Chart visualization would go here
            {data.length > 0 && ` (${data.length} data points)`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
