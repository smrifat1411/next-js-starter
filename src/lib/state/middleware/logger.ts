// Example: Zustand logger middleware
import { StateCreator } from 'zustand';

// Logger middleware for development
export const logger =
  <T>(config: StateCreator<T>, name?: string): StateCreator<T> =>
  (set, get, api) =>
    config(
      (...args) => {
        if (process.env.NODE_ENV === 'development') {
          console.group(`🔄 ${name || 'Store'} Update`);
          console.log('Previous State:', get());
          set(...args);
          console.log('Next State:', get());
          console.groupEnd();
        } else {
          set(...args);
        }
      },
      get,
      api
    );

// Action logger for specific actions
export const logAction = (actionName: string, payload?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🎯 Action: ${actionName}`, payload);
  }
};
