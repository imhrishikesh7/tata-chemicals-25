import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KnowMore = ({ text = "Know More", delay = 0 }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(linkRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 90%",
        },
      });
    }, linkRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={linkRef} className="group inline-block cursor-pointer">
      <span className="text-base text-white font-medium relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
        {text}
        <span className="block h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full absolute left-0 bottom-0"></span>
      </span>
    </div>
  );
};

export default KnowMore;
