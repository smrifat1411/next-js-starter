// Example: Screen reader utilities
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

export function createScreenReaderOnly(text: string): HTMLElement {
  const element = document.createElement('span');
  element.className = 'sr-only';
  element.textContent = text;
  return element;
}

export function addScreenReaderDescription(
  element: HTMLElement,
  description: string
) {
  const id = `sr-description-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionElement = document.createElement('span');
  descriptionElement.id = id;
  descriptionElement.className = 'sr-only';
  descriptionElement.textContent = description;

  element.setAttribute('aria-describedby', id);
  element.parentNode?.insertBefore(descriptionElement, element.nextSibling);
}

export function updateAriaLabel(element: HTMLElement, label: string) {
  element.setAttribute('aria-label', label);
}

export function setAriaExpanded(element: HTMLElement, expanded: boolean) {
  element.setAttribute('aria-expanded', expanded.toString());
}

export function setAriaSelected(element: HTMLElement, selected: boolean) {
  element.setAttribute('aria-selected', selected.toString());
}

export function setAriaChecked(element: HTMLElement, checked: boolean) {
  element.setAttribute('aria-checked', checked.toString());
}

export function setAriaHidden(element: HTMLElement, hidden: boolean) {
  element.setAttribute('aria-hidden', hidden.toString());
}
