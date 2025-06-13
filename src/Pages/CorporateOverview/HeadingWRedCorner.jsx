import React from 'react';

const HeadingWRedCorner = ({ title = "Kenya" }) => {
  return (
    <div className="relative w-full mb-6">
      <div className="absolute top-0 left-0 w-[200px] h-[52px] bg-[#ed1c24] rounded-[20px] z-0 translate-x-[30.5%] -translate-y-[12%]" />
      <div className="relative inline-block w-[255px] bg-[#083e7f] text-white px-6 py-3 text-2xl font-medium rounded-tr-[20px] z-10">
        {title}
      </div>
      <div className="h-[2px] bg-[#083e7f] w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[95%]" />
    </div>
  );
};

export default HeadingWRedCorner;
