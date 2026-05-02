import React, { useEffect, useRef } from 'react';

const TypedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let typedInstance;
    
    const initTyped = async () => {
      const Typed = (await import('typed.js')).default;
      if (textRef.current) {
        typedInstance = new Typed(textRef.current, {
          strings: ["Hossam Mohamed", "UI/UX Designer"],
          typeSpeed: 70,
          backSpeed: 60,
          loop: true
        });
      }
    };

    const timer = setTimeout(() => {
      initTyped();
    }, 1000); // Defer even more to ensure main thread is free

    return () => {
      clearTimeout(timer);
      if (typedInstance) typedInstance.destroy();
    };
  }, []);

  return <span className="input" ref={textRef}></span>;
};

export default TypedText;
