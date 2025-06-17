import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cover = () => {
  const headingRef = useRef(null)

  useEffect(() => {
    const lines = headingRef.current.querySelectorAll('.line')

    gsap.set(lines, { y: 100, opacity: 0 })

    gsap.to(lines, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 0.5,
    })
  }, [])

  return (
    <div className="md:h-screen h-[80vh] w-full overflow-hidden relative">
      <div className='absolute bg-gradient-to-t from-black to-transparent top-0 left-0 h-full w-full'></div>
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        src="/home/cover.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Heading */}
      <div
        ref={headingRef}
        className="absolute  p-2 bottom-20 left-1/2 transform -translate-1/2 w-full text-center text-white font-bold"
      >
        {/* <h1 className="text-4xl md:text-8xl leading-[1.2] tracking-tight m-bold font-[Myriad_Bold]">
          <div className="line overflow-hidden">Chemistry of</div>
          <div className="line overflow-hidden">Sustainable</div>
          <div className="line overflow-hidden">Growth</div>
        </h1> */}
        <h1 className='text-4xl md:text-[8vh] text-shadow leading-[1.2] tracking-tight m-bold font-[Myriad_Bold]'>
        Chemistry of Sustainable Growth
        </h1>
      </div>
    </div>
  )
}

export default Cover
