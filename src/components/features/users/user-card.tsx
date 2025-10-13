// Example: User card component
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="flex items-center space-x-2 mt-2">
              <Badge className="bg-gray-100 text-gray-800">{user.role}</Badge>
              <Badge
                className={
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }
              >
                {user.status}
              </Badge>
            </div>
          </div>
          <div className="space-x-2">
            <Button
              className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 px-3 py-1 text-sm"
              onClick={onEdit}
            >
              Edit
            </Button>
            <Button
              className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 text-sm"
              onClick={onDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
