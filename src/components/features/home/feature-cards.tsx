// Example: Feature cards component
import { Card } from '@/components/ui/card';

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
        <p className="text-muted-foreground">Example card with shadcn/ui</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
        <p className="text-muted-foreground">Another example card</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
        <p className="text-muted-foreground">Third example card</p>
      </Card>
    </div>
  );
}
