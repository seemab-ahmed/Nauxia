import { useState , useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypingEffect = () => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [hideDiv1, setHideDiv1] = useState(false);
  const [hideDiv2, setHideDiv2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowDiv1(true), 1000);
    const timeout4 = setTimeout(()=>setHideDiv1(true),11000);
    const timeout2 = setTimeout(() => setShowDiv2(true), 14000);
    const timeout5 = setTimeout(()=>setHideDiv2(true),26000);
    const timeout3 = setTimeout(() => setShowDiv3(true), 29000);

    // Clear timeouts on component unmount to avoid memory leaks
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, []);

  return (
    <div className="">
      {showDiv1 && <div className={`${hideDiv1 ? 'fadeOutAnime' : ''}`}>
      <TypeAnimation
          sequence={[
            'Hello! This is Exelon 14. We need help immediately. Can anyone hear us?',
            3000,
          ]}
          wrapper="span"
          speed={40}
          repeat={0}
          cursor={false}
        />
        </div>}
      {showDiv2 && <div className={`${hideDiv2 ? 'fadeOutAnime' : ''}`}>
      <TypeAnimation
          sequence={[
            'Hello! Is anybody out there? Hello? This is Tracer Ship Exelon 14. We have crashed. I repeat we have crashed...',
            3000,
          ]}
          wrapper="span"
          speed={40}
          repeat={0}
          cursor={false}
        />
         </div>}
      {showDiv3 && <div className="">
      <TypeAnimation
        sequence={[
          'What is this place? Is anyone around here??',
          1000
        ]}
        wrapper="span"
        speed={40}
        repeat={0}
        cursor={false}
      />
        </div>}
    
    </div>
  );
};
