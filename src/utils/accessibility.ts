// Accessibility utilities

/**
 * Trap focus within a container element
 * Useful for modals, dropdowns, and other overlay components
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  function handleTabKey(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  function handleEscapeKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      // Find and focus the trigger element or first focusable element outside container
      const triggerElement = document.querySelector('[aria-expanded="true"]') as HTMLElement;
      if (triggerElement) {
        triggerElement.focus();
      }
    }
  }

  container.addEventListener('keydown', handleTabKey);
  container.addEventListener('keydown', handleEscapeKey);

  // Focus the first element
  if (firstElement) {
    firstElement.focus();
  }

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleTabKey);
    container.removeEventListener('keydown', handleEscapeKey);
  };
}

/**
 * Announce content to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
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

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get appropriate ARIA label for form validation
 */
export function getValidationAriaLabel(
  fieldName: string,
  isValid: boolean,
  errorMessage?: string
): string {
  if (isValid) {
    return `${fieldName} valide`;
  }
  return `${fieldName} invalide: ${errorMessage || 'Erreur de validation'}`;
}

/**
 * Manage focus for single-page applications
 */
export class FocusManager {
  private static instance: FocusManager;
  private focusHistory: HTMLElement[] = [];

  static getInstance(): FocusManager {
    if (!FocusManager.instance) {
      FocusManager.instance = new FocusManager();
    }
    return FocusManager.instance;
  }

  /**
   * Save current focus and move to new element
   */
  moveFocus(newElement: HTMLElement, saveCurrent: boolean = true) {
    if (saveCurrent && document.activeElement instanceof HTMLElement) {
      this.focusHistory.push(document.activeElement);
    }
    newElement.focus();
  }

  /**
   * Return focus to previous element
   */
  returnFocus() {
    const previousElement = this.focusHistory.pop();
    if (previousElement) {
      previousElement.focus();
    }
  }

  /**
   * Clear focus history
   */
  clearHistory() {
    this.focusHistory = [];
  }
}

/**
 * Skip link component helper
 */
export function createSkipLink(targetId: string, text: string = 'Aller au contenu principal'): HTMLElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.className = 'skip-link';
  skipLink.textContent = text;
  
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return skipLink;
}

/**
 * Keyboard navigation helpers
 */
export const KeyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReader(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return !(
    style.display === 'none' ||
    style.visibility === 'hidden' ||
    element.hasAttribute('aria-hidden') ||
    element.getAttribute('aria-hidden') === 'true'
  );
}