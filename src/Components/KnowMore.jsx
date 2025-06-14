import React, { useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const KnowMore = ({ text = "Know More", link = "/" }) => {
  const linkRef = useRef(null);
  const arrowRef = useRef(null);
  const rippleRef = useRef(null);

  // Hover animation setup
  const setupHover = () => {
    if (!linkRef.current) return;
    
    const tl = gsap.timeline({ paused: true });
    tl.to(linkRef.current, {
      scale: 1.03,
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(arrowRef.current, {
      x: 5,
      scale: 1.1,
      duration: 0.2,
      ease: 'power2.out'
    }, 0);

    linkRef.current.addEventListener('mouseenter', () => tl.play());
    linkRef.current.addEventListener('mouseleave', () => tl.reverse());
  };

  // Ripple effect on click
  const handleClick = (e) => {
    if (!rippleRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    rippleRef.current.style.left = (e.clientX - rect.left) + 'px';
    rippleRef.current.style.top = (e.clientY - rect.top) + 'px';
    rippleRef.current.style.opacity = 1;
    rippleRef.current.style.transform = 'scale(0)';
    gsap.to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  // Initialize hover effect after mount
  React.useEffect(() => {
    setupHover();
    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener('mouseenter', setupHover);
        linkRef.current.removeEventListener('mouseleave', setupHover);
      }
    };
  }, []);

  return (
    <Link
      ref={linkRef}
      to={link}
      onClick={handleClick}
      className="group relative overflow-hidde  inline-flex items-center border border-amber-50  gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold tracking-wide transition-all duration-300"
      
    >
      <div
        ref={rippleRef}
        className="absolute w-8 h-8 rounded-full pointer-events-none opacity-0 transform scale-0"
      />
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full" />
      </span>
      <span ref={arrowRef} className="relative flex items-center justify-center">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default KnowMore;
