import React from 'react'

const Cover = () => {
  return (
    <div className="md:h- md:pt-0 pt-4 w-full overflow-hidde">
      {/* Background Video */}
      <video
        className="w-full  object-contain"
        src="/home/tata-chemicals-cover.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

  )
}

export default Cover
