// Example: Keyboard navigation utilities
export function handleArrowKeys(
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  orientation: 'horizontal' | 'vertical' = 'vertical'
) {
  const { key } = event;
  let newIndex = currentIndex;

  if (orientation === 'vertical') {
    if (key === 'ArrowDown') {
      newIndex = Math.min(currentIndex + 1, items.length - 1);
    } else if (key === 'ArrowUp') {
      newIndex = Math.max(currentIndex - 1, 0);
    }
  } else {
    if (key === 'ArrowRight') {
      newIndex = Math.min(currentIndex + 1, items.length - 1);
    } else if (key === 'ArrowLeft') {
      newIndex = Math.max(currentIndex - 1, 0);
    }
  }

  if (newIndex !== currentIndex) {
    event.preventDefault();
    items[newIndex]?.focus();
    return newIndex;
  }

  return currentIndex;
}

export function handleEscapeKey(event: KeyboardEvent, callback: () => void) {
  if (event.key === 'Escape') {
    event.preventDefault();
    callback();
  }
}

export function handleEnterKey(event: KeyboardEvent, callback: () => void) {
  if (event.key === 'Enter') {
    event.preventDefault();
    callback();
  }
}

export function handleSpaceKey(event: KeyboardEvent, callback: () => void) {
  if (event.key === ' ') {
    event.preventDefault();
    callback();
  }
}

export function createKeyboardHandler(
  handlers: Record<string, (event: KeyboardEvent) => void>
) {
  return (event: KeyboardEvent) => {
    const handler = handlers[event.key];
    if (handler) {
      handler(event);
    }
  };
}

export function isKeyboardUser(): boolean {
  return document.documentElement.getAttribute('data-keyboard-user') === 'true';
}

export function detectKeyboardUser() {
  let hadKeyboardEvent = false;

  const keyboardHandler = () => {
    hadKeyboardEvent = true;
    document.documentElement.setAttribute('data-keyboard-user', 'true');
    document.removeEventListener('keydown', keyboardHandler);
  };

  const mouseHandler = () => {
    if (!hadKeyboardEvent) {
      document.documentElement.setAttribute('data-keyboard-user', 'false');
    }
    document.removeEventListener('mousedown', mouseHandler);
  };

  document.addEventListener('keydown', keyboardHandler, true);
  document.addEventListener('mousedown', mouseHandler, true);
}
