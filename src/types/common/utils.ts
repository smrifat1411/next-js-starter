// Utility types for common operations
export type NonNullable<T> = T extends null | undefined ? never : T;
export type Nullable<T> = T | null | undefined;

// Array utility types
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
export type NonEmptyArray<T> = [T, ...T[]];

// Object utility types
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export type ValuesOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never;
}[keyof T];

// Function utility types
export type AsyncFunction<T extends any[] = any[], R = any> = (
  ...args: T
) => Promise<R>;
export type VoidFunction = () => void;
export type EventHandler<T = Event> = (event: T) => void;

// Promise utility types
export type PromiseValue<T> = T extends Promise<infer U> ? U : T;
export type PromiseReturnType<T> = T extends (
  ...args: any[]
) => Promise<infer U>
  ? U
  : never;

// Union utility types
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
export type UnionToTuple<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => infer R
    ? R
    : never;

// String utility types
export type StringLiteral<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;
export type StringKeys<T> = Extract<keyof T, string>;

// Number utility types
export type PositiveNumber = number & { __brand: 'PositiveNumber' };
export type NegativeNumber = number & { __brand: 'NegativeNumber' };
export type NonZeroNumber = number & { __brand: 'NonZeroNumber' };
