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

export const adjustAnimationStopPoint = () => {
  const windowWidth = window.innerWidth;
  let newPoint = 390;
  let secondAnimpoint = 250;
  const percent = 4.5;

  if (windowWidth <= 1400) {
    const updatedPoint = 1410 - windowWidth;
    newPoint -= Math.ceil(updatedPoint / percent);
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 1253){
    const updatedPoint = 1253 - windowWidth;
    secondAnimpoint = 225 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 1183){
    const updatedPoint = 1183 - windowWidth;
    secondAnimpoint = 240 - Math.ceil(updatedPoint / percent);
  }

  if(windowWidth <= 1021){
    const updatedPoint = 1021 - windowWidth;
    secondAnimpoint = 225 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 921){
    const updatedPoint = 920 - windowWidth;
    newPoint = 142 - Math.ceil(updatedPoint / percent);
  }
  

  if(windowWidth <= 921){
    const updatedPoint = 921 - windowWidth;
    secondAnimpoint = 225 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 804){
    const updatedPoint = 804 - windowWidth;
    secondAnimpoint = 120 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 660){
    const updatedPoint = 660 - windowWidth;
    newPoint = 86 + Math.ceil(updatedPoint / percent);

  }
  if(windowWidth <= 620){
    const updatedPoint = 620 - windowWidth;
    newPoint = 80 + Math.ceil(updatedPoint / percent);

  }
  if(windowWidth <= 588){
    const updatedPoint = 588 - windowWidth;
    newPoint = 114 - Math.ceil(updatedPoint / percent);

  }

  if(windowWidth <= 583){
    const updatedPoint = 583 - windowWidth;
    secondAnimpoint = 114 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 511){
    const updatedPoint = 511 - windowWidth;
    newPoint = 56 - Math.ceil(updatedPoint / percent);

  }
  if(windowWidth <= 524){
    const updatedPoint = 524 - windowWidth;
    secondAnimpoint = 55 - Math.ceil(updatedPoint / percent);
  }
  
  if(windowWidth <= 350){
    const updatedPoint = 350 - windowWidth;
    newPoint = 18 - Math.ceil(updatedPoint / percent);

  }

  document.documentElement.style.setProperty(
    "--stop-point",
    newPoint + "%"
  );
  document.documentElement.style.setProperty(
    "--second-anim-start-point",
    secondAnimpoint + "%"
  );
}