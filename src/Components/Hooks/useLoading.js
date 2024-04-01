import { useState, useEffect } from "react";

function useLoading(initialState, delay) {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}

export default useLoading;
