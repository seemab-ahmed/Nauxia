import { TypeAnimation } from 'react-type-animation';

export const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hello! This is Exelon 14. We need help immediately. Can anyone hear us?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hello! Is anybody out there? Hello? This is Tracer Ship Exelon 14. We have crashed. I repeat we have crashed...',
        1000,
        'What is this place? Is anyone around here??',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={0}
    />
  );
};