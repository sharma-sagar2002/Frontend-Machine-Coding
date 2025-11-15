import { useEffect, useState } from "react";

interface UseThrottleProps {
  value: string;
  delay: number;
}

export const useThrottle = ({ delay, value }: UseThrottleProps) => {
  const [throttleValue, setThrottleValue] = useState(value);
  useEffect(() => {
    const interval = setInterval(() => {
      setThrottleValue(value);
    }, delay);

    return () => clearInterval(interval);
  }, [throttleValue, delay]);
};
