// Example: Profile settings component
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function ProfileSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="notifications">Email Notifications</Label>
            <p className="text-sm text-gray-600">Receive email updates</p>
          </div>
          <Switch id="notifications" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <p className="text-sm text-gray-600">Switch to dark theme</p>
          </div>
          <Switch id="dark-mode" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="two-factor">Two-Factor Authentication</Label>
            <p className="text-sm text-gray-600">Add extra security</p>
          </div>
          <Switch id="two-factor" />
        </div>
      </CardContent>
    </Card>
  );
}
