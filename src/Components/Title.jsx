import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ text = "Your Title Here", color = "#0A2540" }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <h2
      ref={titleRef}
      className="text-4xl md:text-5xl font-semibold text-center leading-tight tracking-tight"
      style={{ color }}
    >
      {text}
    </h2>
  );
};

export default Title;
