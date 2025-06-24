import { useEffect, useRef } from 'react';

type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

/**
 * Hook that triggers a callback when a click occurs outside of the referenced element
 * @param handler Callback function to execute when click is outside
 * @returns React ref to attach to the element you want to monitor
 */
function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  handler: ClickOutsideHandler
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
}

export default useClickOutside;