import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // lower is smoother
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default LenisScroll
