import React, { useEffect, useState } from 'react';

const HoverIcon = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    let lastposistion = null;
    const handleMouseMove = (e) => {
      if (isHovered) {
        const offsetX = -610; // Offset to avoid the cursor
        const offsetY = -175; // Offset to avoid the cursor
        setPosition({ x: e.clientX + offsetX, y: e.clientY + offsetY });
      }
      
    };

    // useEffect(()=>{
    //   if(isHovered){
    //     lastposistion = 25;
    //   }
    //   window.addEventListener('mousemove', handleMouseMove);
    //   return () => {
    //     window.removeEventListener('mousemove', handleMouseMove);
    //   };
    // },[])
  
    return (
        <div className="w-full h-screen  flex items-center justify-center">
      <div 
        onMouseMove={handleMouseMove} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className='    w-32 h-32 overflow-hidden flex justify-center items-center bg-gray-700 '
      >
        <div
          style={{
            // position:'relative',
            // left:`${lastposistion}%`,
            // right:`${lastposistion}%`,
            // top:`${lastposistion}%`,
            // bottom:`${lastposistion}%`,
            transform: `translate(${position.x-65}%, ${position.y-180}%)`,
            transition: 'transform 0.1s ease-out',
          }}
          className={`w-20 h-20 bg-blue-500 rounded-full  `}
        />
      </div>
      </div>
    );
  };

export default HoverIcon;
