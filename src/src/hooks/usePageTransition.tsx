import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time for page transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isLoading };
};