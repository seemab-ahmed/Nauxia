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
  let newPoint = 360;
  let secondAnimpoint = 230;
  let percent = 110;

  if (windowWidth <= 1400) {
    const updatedPoint = 1400 - windowWidth;
    newPoint -= Math.ceil(updatedPoint / percent);
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if (windowWidth <= 1200) {
    percent = 4.2;
    secondAnimpoint = 222;
    const updatedPoint = 1200 - windowWidth;
    newPoint -= Math.ceil(updatedPoint / percent);
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  // if(windowWidth <= 1253){
  //   const updatedPoint = 1253 - windowWidth;
  //   secondAnimpoint = 225 - Math.ceil(updatedPoint / percent);
  // }
  // if(windowWidth <= 1183){
  //   const updatedPoint = 1183 - windowWidth;
  //   secondAnimpoint = 240 - Math.ceil(updatedPoint / percent);
  // }

  if(windowWidth <= 1096){
    secondAnimpoint = 210;
    const updatedPoint = 1096 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  } 
  
  if(windowWidth <= 1038){
    secondAnimpoint = 227;
    const updatedPoint = 1038 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  // if(windowWidth <= 921){
  //   const updatedPoint = 920 - windowWidth;
  //   newPoint = 142 - Math.ceil(updatedPoint / percent);
  // }
  

  // if(windowWidth <= 921){
  //   const updatedPoint = 921 - windowWidth;
  //   secondAnimpoint = 225 - Math.ceil(updatedPoint / percent);
  // }
  if(windowWidth <= 898){
    secondAnimpoint = 202;
    const updatedPoint = 898 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }  
  
  if(windowWidth <= 856){
    secondAnimpoint = 201;
    const updatedPoint = 856 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 812){
    secondAnimpoint = 208;
    const updatedPoint = 812 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 740){
    secondAnimpoint = 197;
    const updatedPoint = 740 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 712){
    secondAnimpoint = 104;
    const updatedPoint = 712 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 795){
    percent = 4.2;
    const updatedPoint = 795 - windowWidth;
    newPoint = 130 - Math.ceil(updatedPoint / percent);
  }
  // if(windowWidth <= 660){
  //   const updatedPoint = 660 - windowWidth;
  //   newPoint = 86 + Math.ceil(updatedPoint / percent);

  // }
  // if(windowWidth <= 620){
  //   const updatedPoint = 620 - windowWidth;
  //   newPoint = 80 + Math.ceil(updatedPoint / percent);

  // }
  // if(windowWidth <= 588){
  //   const updatedPoint = 588 - windowWidth;
  //   newPoint = 114 - Math.ceil(updatedPoint / percent);

  // }

  if(windowWidth <= 570){
    const updatedPoint = 570 - windowWidth;
    newPoint = 80 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 550){
    const updatedPoint = 550 - windowWidth;
    newPoint = 85 - Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 522){
    secondAnimpoint = 104;
    const updatedPoint = 522 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 511){
    const updatedPoint = 511 - windowWidth;
    newPoint = 105 - Math.ceil(updatedPoint / percent);
  }
  
  if(windowWidth <= 474){
    secondAnimpoint = 48;
    const updatedPoint = 474 - windowWidth;
    secondAnimpoint -= Math.ceil(updatedPoint / percent);
  }
  if(windowWidth <= 443){
    const updatedPoint = 443 - windowWidth;
    newPoint = 45 - Math.ceil(updatedPoint / percent);
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