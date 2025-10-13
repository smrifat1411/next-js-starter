// Example: Dashboard component using dynamic imports
'use client';

import { useState } from 'react';
// import { DynamicLineChart, DynamicBarChart, DynamicDataTable } from './dynamic'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function DynamicDashboard() {
  const [activeChart, setActiveChart] = useState<'line' | 'bar' | null>(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Dynamic Components Demo</h3>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={() => setActiveChart('line')}>
              Load Line Chart
            </Button>
            <Button onClick={() => setActiveChart('bar')}>
              Load Bar Chart
            </Button>
            <Button onClick={() => setShowTable(!showTable)}>
              {showTable ? 'Hide' : 'Show'} Data Table
            </Button>
          </div>

          {activeChart === 'line' && (
            <div className="border rounded-lg p-4">
              <div className="text-center text-gray-500">
                Line Chart Component
              </div>
            </div>
          )}

          {activeChart === 'bar' && (
            <div className="border rounded-lg p-4">
              <div className="text-center text-gray-500">
                Bar Chart Component
              </div>
            </div>
          )}

          {showTable && (
            <div className="border rounded-lg p-4">
              <div className="text-center text-gray-500">
                Data Table Component
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
