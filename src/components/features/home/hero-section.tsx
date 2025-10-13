// Example: Hero section component
'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Build amazing applications with our modern Next.js starter template
      </p>
      <div className="space-x-4">
        <Button className="px-6 py-3 text-lg">Get Started</Button>
        <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 px-6 py-3 text-lg">
          Learn More
        </Button>
      </div>
    </section>
  );
}
