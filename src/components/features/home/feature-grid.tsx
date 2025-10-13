// Example: Feature grid component
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Fast Performance',
    description: 'Built with Next.js 15 for optimal performance',
  },
  {
    title: 'Type Safety',
    description: 'Full TypeScript support for better development experience',
  },
  {
    title: 'Modern UI',
    description: 'Beautiful components with shadcn/ui and Tailwind CSS',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
