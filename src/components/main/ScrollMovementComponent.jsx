import React, { useState, useEffect } from 'react';

const ScrollMovementComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  // Event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scrollable content */}
      <div className="h-[150vh] bg-gray-200">Scroll down to move the object.</div>

      {/* Object that moves with scroll */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded"
        style={{
          top: `${scrollY * 0.2}px`, // Adjust the multiplier to control speed
        }}
      >
        I move with scroll!
      </div>
    </div>
  );
};

export default ScrollMovementComponent;
