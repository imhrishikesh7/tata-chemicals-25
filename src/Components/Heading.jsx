import React from 'react'

const Heading = ({ className , text }) => {
  return (
    <div className='flex flex-col gap-3 text-[#1268B3] md:text-4xl text-2xl font-bold'>
        <h2 className= {`${className} `} >
        {text}
        </h2>
        <div className='w-full bg-[#1268B3] h-[2px] rounded-full relative'>
            <div className='absolute bg-[#ED1A3B] top-1/2 transform -translate-y-1/2 rounded-full py-1 w-[150px]'></div>
        </div>
    </div>
  )
}

export default Heading