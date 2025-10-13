// Example: Local storage hook
export function useLocalStorage(key: string, defaultValue: unknown) {
  const getValue = () => defaultValue;
  const setValue = (value: unknown) => console.log('Set value:', value);
  return [getValue(), setValue];
}
