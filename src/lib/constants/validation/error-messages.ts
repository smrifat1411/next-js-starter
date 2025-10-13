// Example: Validation error messages
export const VALIDATION_ERRORS = {
  // Common errors
  REQUIRED: 'This field is required',
  INVALID_FORMAT: 'Invalid format',
  TOO_SHORT: 'Too short',
  TOO_LONG: 'Too long',
  INVALID_EMAIL: 'Invalid email address',
  INVALID_PHONE: 'Invalid phone number',
  INVALID_URL: 'Invalid URL',

  // Auth errors
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    WEAK_PASSWORD: 'Password is too weak',
    PASSWORDS_DONT_MATCH: 'Passwords do not match',
    INVALID_TOKEN: 'Invalid or expired token',
    ACCOUNT_LOCKED: 'Account is locked',
    EMAIL_NOT_VERIFIED: 'Email not verified',
  },

  // User errors
  USER: {
    NAME_TOO_SHORT: 'Name must be at least 2 characters',
    NAME_TOO_LONG: 'Name must be less than 50 characters',
    INVALID_ROLE: 'Invalid user role',
    INVALID_STATUS: 'Invalid user status',
  },

  // Form errors
  FORM: {
    INVALID_DATA: 'Invalid form data',
    MISSING_FIELDS: 'Please fill in all required fields',
    SUBMISSION_FAILED: 'Form submission failed',
  },

  // File upload errors
  FILE: {
    TOO_LARGE: 'File is too large',
    INVALID_TYPE: 'Invalid file type',
    UPLOAD_FAILED: 'File upload failed',
    MAX_FILES_EXCEEDED: 'Maximum number of files exceeded',
  },
} as const;

// Error message helper
export function getErrorMessage(key: string, fallback?: string): string {
  const keys = key.split('.');
  let message: any = VALIDATION_ERRORS;

  for (const k of keys) {
    message = message?.[k];
  }

  return message || fallback || 'An error occurred';
}
