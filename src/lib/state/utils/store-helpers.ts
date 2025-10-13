// Example: Store utility functions
import { StoreApi, UseBoundStore } from 'zustand';

// Store subscription helper
export function subscribeToStore<T>(
  store: UseBoundStore<StoreApi<T>>,
  selector: (state: T) => unknown
) {
  return store.subscribe(selector);
}

// Store state snapshot helper
export function getStoreSnapshot<T>(store: UseBoundStore<StoreApi<T>>): T {
  return store.getState();
}

// Store reset helper
export function resetStore<T>(
  store: UseBoundStore<StoreApi<T>>,
  initialState: T
) {
  store.setState(initialState, true);
}

// Store persistence helper
export function createPersistedStore<T>(store: UseBoundStore<StoreApi<T>>) {
  // This would typically be used with zustand/middleware/persist
  // For now, it's a placeholder for the pattern
  return store;
}

// Store hydration helper
export function hydrateStore<T>(
  store: UseBoundStore<StoreApi<T>>,
  data: Partial<T>
) {
  store.setState(data, true);
}

// Store validation helper
export function validateStoreState<T>(
  state: T,
  validator: (state: T) => boolean
): boolean {
  return validator(state);
}
