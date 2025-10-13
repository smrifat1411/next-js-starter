// Example: Users list component
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserCard from './user-card';

interface UsersListProps {
  users: Array<{
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  }>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function UsersList({ users, onEdit, onDelete }: UsersListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={() => onEdit(user.id)}
              onDelete={() => onDelete(user.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
