// Example: User-related enums
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  SUPER_ADMIN = 'super_admin',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
  BANNED = 'banned',
}

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say',
}

export enum UserPreferences {
  THEME_LIGHT = 'light',
  THEME_DARK = 'dark',
  THEME_SYSTEM = 'system',
  LANGUAGE_EN = 'en',
  LANGUAGE_ES = 'es',
  LANGUAGE_FR = 'fr',
  LANGUAGE_DE = 'de',
}

export enum NotificationType {
  EMAIL = 'email',
  PUSH = 'push',
  SMS = 'sms',
  IN_APP = 'in_app',
}

export enum PrivacyLevel {
  PUBLIC = 'public',
  PRIVATE = 'private',
  FRIENDS = 'friends',
  CUSTOM = 'custom',
}
