import { useRef, useEffect } from "react";

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: (event: TouchEvent | MouseEvent) => void,
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (!ref.current || ref?.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
  return ref;
};

export default useClickOutside;
