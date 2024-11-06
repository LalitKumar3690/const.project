import React, { useState, useEffect } from 'react';

const TextChangingLoop = () => {
  // Array of text strings to loop through
  const textArray = ["Welcome to our website!", "Explore our products.", "Join our community!", "Stay updated with us."];
  
  // State to keep track of the current text index
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Update text every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Loop through the textArray
    }, 3000); // Change text every 3 seconds
    
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [textArray.length]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800 transition-all duration-500 ease-in-out">
        {textArray[currentTextIndex]}
      </h1>
    </div>
  );
};

export default TextChangingLoop;
