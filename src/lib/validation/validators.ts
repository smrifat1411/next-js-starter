// Example: Validation utility functions
import { z } from 'zod';

// Generic validation function
export function validate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): {
  success: boolean;
  data?: T;
  errors?: z.ZodError;
} {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return { success: false, errors: result.error };
}

// Async validation function
export async function validateAsync<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): Promise<{
  success: boolean;
  data?: T;
  errors?: z.ZodError;
}> {
  try {
    const result = await schema.parseAsync(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}

// Form validation helper
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  formData: FormData
): {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
} {
  const data = Object.fromEntries(formData.entries());
  const result = validate(schema, data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  // Convert Zod errors to form-friendly format
  const errors: Record<string, string> = {};
  result.errors?.issues.forEach(issue => {
    const path = issue.path.join('.');
    errors[path] = issue.message;
  });

  return { success: false, errors };
}

// Partial validation (for forms with optional fields)
export function validatePartial<T>(
  schema: z.ZodSchema<T>,
  data: Partial<T>
): {
  success: boolean;
  data?: Partial<T>;
  errors?: Record<string, string>;
} {
  const partialSchema = (schema as any).partial();
  const result = validate(partialSchema, data);

  if (result.success) {
    return { success: true, data: result.data as Partial<T> };
  }

  const errors: Record<string, string> = {};
  result.errors?.issues.forEach(issue => {
    const path = issue.path.join('.');
    errors[path] = issue.message;
  });

  return { success: false, errors };
}

// Email validation
export const emailSchema = z.string().email('Invalid email format');
export const isValidEmail = (email: string) =>
  emailSchema.safeParse(email).success;

// Password validation
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  );

export const isValidPassword = (password: string) =>
  passwordSchema.safeParse(password).success;

// URL validation
export const urlSchema = z.string().url('Invalid URL format');
export const isValidUrl = (url: string) => urlSchema.safeParse(url).success;
