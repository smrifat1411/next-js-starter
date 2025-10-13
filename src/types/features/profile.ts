// Profile feature types
export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    timezone: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface ProfileFormData {
  name: string;
  email: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PreferencesFormData {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

export interface ProfileStats {
  totalPosts: number;
  totalFollowers: number;
  totalFollowing: number;
  totalLikes: number;
  totalComments: number;
}

export interface ProfileActivity {
  id: string;
  type: 'post' | 'like' | 'comment' | 'follow';
  message: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface ProfileContextType {
  profile: Profile | null;
  stats: ProfileStats | null;
  activities: ProfileActivity[];
  isLoading: boolean;
  error: string | null;
  updateProfile: (data: ProfileFormData) => Promise<void>;
  updatePassword: (data: PasswordFormData) => Promise<void>;
  updatePreferences: (data: PreferencesFormData) => Promise<void>;
  uploadAvatar: (file: File) => Promise<void>;
  refreshStats: () => Promise<void>;
  refreshActivities: () => Promise<void>;
}
