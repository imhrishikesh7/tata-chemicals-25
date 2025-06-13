import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ text = "Your Title Here" }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(titleRef.current, {
      types: "chars",
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // play once when in view
      },
      x: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.04,
      ease: "power4.out",
    });

    return () => {
      split.revert(); // clean up
    };
  }, []);

  return (
    <h1
    className="text-[#2469b3]"
      ref={titleRef}
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
