// Example: Utility function test
import { cn } from '@/lib/utils/cn';

describe('cn utility function', () => {
  it('should combine class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should filter out falsy values', () => {
    expect(cn('class1', false, null, 'class2', undefined, '')).toBe(
      'class1 class2'
    );
  });

  it('should handle conditional classes', () => {
    expect(cn('base', true && 'conditional')).toBe('base conditional');
    expect(cn('base', false && 'conditional')).toBe('base');
  });

  it('should handle arrays', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2');
  });

  it('should handle objects', () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe(
      'class1 class3'
    );
  });

  it('should handle mixed inputs', () => {
    expect(
      cn('base', ['array1', 'array2'], { conditional: true, hidden: false })
    ).toBe('base array1 array2 conditional');
  });

  it('should return empty string for no valid classes', () => {
    expect(cn()).toBe('');
    expect(cn(false, null, undefined, '')).toBe('');
  });
});
