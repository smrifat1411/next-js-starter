// Example: Application-wide state store using Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  // App configuration
  language: string;
  timezone: string;
  dateFormat: string;

  // Feature flags
  features: {
    analytics: boolean;
    notifications: boolean;
    darkMode: boolean;
    multiLanguage: boolean;
  };

  // User preferences
  preferences: {
    autoSave: boolean;
    compactMode: boolean;
    showTooltips: boolean;
    animationsEnabled: boolean;
  };

  // App metadata
  version: string;
  lastUpdateCheck: string | null;

  // Actions
  setLanguage: (language: string) => void;
  setTimezone: (timezone: string) => void;
  setDateFormat: (format: string) => void;
  toggleFeature: (feature: keyof AppState['features']) => void;
  updatePreferences: (preferences: Partial<AppState['preferences']>) => void;
  setLastUpdateCheck: (date: string) => void;
  resetPreferences: () => void;
}

const defaultPreferences = {
  autoSave: true,
  compactMode: false,
  showTooltips: true,
  animationsEnabled: true,
};

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      // Initial state
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/dd/yyyy',
      features: {
        analytics: true,
        notifications: true,
        darkMode: true,
        multiLanguage: false,
      },
      preferences: defaultPreferences,
      version: '1.0.0',
      lastUpdateCheck: null,

      // Actions
      setLanguage: language => set({ language }),
      setTimezone: timezone => set({ timezone }),
      setDateFormat: dateFormat => set({ dateFormat }),

      toggleFeature: feature =>
        set(state => ({
          features: {
            ...state.features,
            [feature]: !state.features[feature],
          },
        })),

      updatePreferences: newPreferences =>
        set(state => ({
          preferences: { ...state.preferences, ...newPreferences },
        })),

      setLastUpdateCheck: date => set({ lastUpdateCheck: date }),

      resetPreferences: () => set({ preferences: defaultPreferences }),
    }),
    {
      name: 'app-storage',
      partialize: state => ({
        language: state.language,
        timezone: state.timezone,
        dateFormat: state.dateFormat,
        features: state.features,
        preferences: state.preferences,
        lastUpdateCheck: state.lastUpdateCheck,
      }),
    }
  )
);
