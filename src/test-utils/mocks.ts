// Example: Mock utilities
export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user' as const,
};

export const mockApiResponse = <T>(data: T) => ({
  success: true,
  data,
  message: 'Success',
});

export const mockApiError = (message: string, status = 400) => ({
  success: false,
  error: message,
  status,
});

export const mockLocalStorage = () => {
  const store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach(key => delete store[key]);
    },
  };
};
