import { useState, useEffect } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for DOM to be ready and initial render to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Loading complete - all sections should now be visible");
    }, 1500); // Reduced from 2000ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}
