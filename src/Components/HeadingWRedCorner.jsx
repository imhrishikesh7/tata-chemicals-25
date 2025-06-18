import React, { useRef, useEffect, useState } from 'react';

const HeadingWRedCorner = ({ title = "Kenya" }) => {
  const blueRef = useRef(null);
  const [blueWidth, setBlueWidth] = useState(0);

  useEffect(() => {
    if (blueRef.current) {
      setBlueWidth(blueRef.current.offsetWidth);
    }
  }, [title]);

  return (
    <div className="relative w-full mb-6">
      {/* Red corner - positioned and sized based on blue div width */}
      <div 
        className="absolute top-0 h-[52px] bg-[#ed1c24] rounded-[20px] z-0 -translate-y-[12%]"
        style={{ 
          left: `${blueWidth * 0.25}px`, // Position relative to blue width
          width: `${blueWidth * 0.784}px` // Width relative to blue width (70% of blue width)
        }}
      />
      
      {/* Blue div - dynamic width based on content */}
      <div 
        ref={blueRef}
        className="relative inline-block w-fit bg-[#083e7f] text-white px-6 py-3 text-2xl font-medium rounded-tr-[20px] z-10 min-w-[255px]"
      >
        {title}
      </div>
      
      {/* Bottom line */}
      <div className="h-[2px] bg-[#083e7f] w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[95%]" />
    </div>
  );
};

export default HeadingWRedCorner;