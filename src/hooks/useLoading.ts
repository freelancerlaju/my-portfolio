import { useState, useEffect } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}
