// Example: Zustand devtools middleware
import { devtools } from 'zustand/middleware';

// Development-only devtools wrapper
export const withDevtools = <T>(store: T, name: string) => {
  if (process.env.NODE_ENV === 'development') {
    return devtools(store as any, { name });
  }
  return store;
};

// Redux DevTools configuration
export const devtoolsConfig = {
  name: 'NextJS Starter Store',
  serialize: {
    options: {
      map: true,
      set: true,
    },
  },
};
