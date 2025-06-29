import React, { createContext, useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoToTopButton from './GoToTop';

gsap.registerPlugin(ScrollTrigger);

// ✅ Create and export context
export const LenisContext = createContext(null);

const LenisScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null); // for context

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis); // ✅ make available to context consumers

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };
    animationFrame = requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.targetScroll || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'transform',
    });

    ScrollTrigger.defaults({
      scroller: document.body,
      refreshPriority: -1,
    });

    gsap.delayedCall(0.5, ScrollTrigger.refresh);
    window.addEventListener('load', ScrollTrigger.refresh);

    const handleResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', ScrollTrigger.refresh);
      ScrollTrigger.killAll();
      ScrollTrigger.clearScrollMemory();
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
       <GoToTopButton/>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisScroll;
