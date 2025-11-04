import { useEffect, RefObject } from 'react';

type RefType = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

/**
 * Hook that detects clicks outside of the specified element(s)
 * @param refs - Single ref or array of refs to check against
 * @param callback - Function to call when click outside is detected
 * @param enabled - Whether the hook should be active (default: true)
 */
export const useClickOutside = (
  refs: RefType,
  callback: () => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Convert single ref to array for uniform handling
      const refArray = Array.isArray(refs) ? refs : [refs];
      
      // Check if click is outside all specified elements
      const isOutside = refArray.every(ref => {
        return !ref.current || !ref.current.contains(target);
      });

      if (isOutside) {
        callback();
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback, enabled]);
};

// Example usage:
/*
import { useRef } from 'react';

function MyComponent() {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside both trigger and dropdown
  useClickOutside(
    [triggerRef, dropdownRef], 
    () => setIsOpen(false),
    isOpen // Only listen when dropdown is open
  );

  return (
    <>
      <button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen && (
        <div ref={dropdownRef}>
          Dropdown content
        </div>
      )}
    </>
  );
}
*/