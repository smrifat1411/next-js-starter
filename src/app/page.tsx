import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Next.js Starter Template
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A clean, minimal starter template for your Next.js projects with
          TypeScript, Tailwind CSS, and shadcn/ui.
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Fast Performance</CardTitle>
              <CardDescription>
                Built with Next.js 15 for optimal performance
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Type Safety</CardTitle>
              <CardDescription>
                Full TypeScript support for better development experience
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Modern UI</CardTitle>
              <CardDescription>
                Beautiful components with shadcn/ui and Tailwind CSS
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
