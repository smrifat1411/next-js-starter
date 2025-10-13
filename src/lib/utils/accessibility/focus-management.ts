// Example: Focus management utilities
export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[
    focusableElements.length - 1
  ] as HTMLElement;

  function handleTabKey(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  // Focus first element
  firstElement?.focus();

  // Add event listener
  element.addEventListener('keydown', handleTabKey);

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

export function restoreFocus(previousElement: HTMLElement | null) {
  if (previousElement && typeof previousElement.focus === 'function') {
    previousElement.focus();
  }
}

export function getNextFocusableElement(
  currentElement: HTMLElement
): HTMLElement | null {
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const currentIndex = Array.from(focusableElements).indexOf(currentElement);
  const nextElement = focusableElements[currentIndex + 1] as HTMLElement;

  return nextElement || null;
}

export function getPreviousFocusableElement(
  currentElement: HTMLElement
): HTMLElement | null {
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const currentIndex = Array.from(focusableElements).indexOf(currentElement);
  const previousElement = focusableElements[currentIndex - 1] as HTMLElement;

  return previousElement || null;
}
