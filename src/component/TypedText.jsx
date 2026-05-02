import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Hossam Mohamed", "UI/UX Designer"],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);

  return <span className="input" ref={textRef}></span>;
};

export default TypedText;
