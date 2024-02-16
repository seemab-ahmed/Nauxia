import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    desktop: false,
    tablet: false,
    mobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType(prev => ({desktop: false, tablet: false, mobile: true}));
      } else if (width > 768 && width <= 1024) {
        setDeviceType(prev => ({desktop: false, tablet: true, mobile: false}));
      } else {
        setDeviceType(prev => ({desktop: true, tablet: false, mobile: false}));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
