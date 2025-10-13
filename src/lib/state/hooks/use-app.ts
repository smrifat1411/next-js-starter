// Example: App state hook with selectors
import { useAppStore } from '../stores/app-store';

// Configuration selectors
export const useAppConfig = () =>
  useAppStore(state => ({
    language: state.language,
    timezone: state.timezone,
    dateFormat: state.dateFormat,
  }));

export const useAppConfigActions = () =>
  useAppStore(state => ({
    setLanguage: state.setLanguage,
    setTimezone: state.setTimezone,
    setDateFormat: state.setDateFormat,
  }));

// Feature flags selectors
export const useFeatures = () => useAppStore(state => state.features);
export const useFeature = (feature: keyof ReturnType<typeof useFeatures>) =>
  useAppStore(state => state.features[feature]);
export const useToggleFeature = () => useAppStore(state => state.toggleFeature);

// Preferences selectors
export const usePreferences = () => useAppStore(state => state.preferences);
export const usePreference = (key: keyof ReturnType<typeof usePreferences>) =>
  useAppStore(state => state.preferences[key]);
export const useUpdatePreferences = () =>
  useAppStore(state => state.updatePreferences);

// App metadata selectors
export const useAppMetadata = () =>
  useAppStore(state => ({
    version: state.version,
    lastUpdateCheck: state.lastUpdateCheck,
  }));

export const useAppActions = () =>
  useAppStore(state => ({
    setLastUpdateCheck: state.setLastUpdateCheck,
    resetPreferences: state.resetPreferences,
  }));
