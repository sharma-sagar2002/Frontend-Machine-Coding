import { useEffect, useState } from "react";

interface UseDeounceProps {
  value: string | undefined;
  delay: number;
}

export const useDebounce = ({ delay, value }: UseDeounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      console.log("line 13", debouncedValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
