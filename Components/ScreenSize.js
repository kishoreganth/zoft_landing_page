import { useState, useEffect } from 'react';

const useScreenSize = () => {
  let isWindowAvailable = typeof window !== "undefined";
  const [width, setWidth] = useState(isWindowAvailable ? window?.innerWidth : null);

  useEffect(() => {
    if (isWindowAvailable) {
      // Avoid running on the server
      return;
    }

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useScreenSize;
