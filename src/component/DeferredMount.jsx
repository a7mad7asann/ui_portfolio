import React, { useState, useEffect, useRef } from 'react';

const DeferredMount = ({ children, fallback = null, rootMargin = '200px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Only need to load once
        }
      },
      { rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : '100vh' }}>
      {isIntersecting ? children : fallback}
    </div>
  );
};

export default DeferredMount;
