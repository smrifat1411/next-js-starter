// Example: 404 not found page
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto text-center">
        <CardHeader>
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>
            The page you&apos;re looking for doesn&apos;t exist.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Sorry, we couldn&apos;t find the page you requested.
          </p>
          <div className="flex gap-2 justify-center">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            <Link href="javascript:history.back()">
              <Button className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50">
                Go Back
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
