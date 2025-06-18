import React, { useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const KnowMore = ({ 
  text = "Know More", 
  link = "/",
  customColor = "white" // Single color prop that replaces all white elements
}) => {
  const linkRef = useRef(null);
  const arrowRef = useRef(null);
  const rippleRef = useRef(null);

  // Hover animation setup
  const setupHover = () => {
    if (!linkRef.current) return;
        
    const tl = gsap.timeline({ paused: true });
    tl.to(linkRef.current, {
      scale: 1.03,
      boxShadow: `0 0 15px rgba(${customColor === 'white' ? '255, 255, 255' : hexToRgb(customColor)}, 0.5)`,
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

  // Helper function to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    }
    // Fallback for named colors or invalid hex - return white RGB
    return '255, 255, 255';
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
  }, [customColor]); // Add customColor as dependency

  return (
    <Link
      to={link}
      ref={linkRef}
      onClick={handleClick}
      className="relative inline-flex rounded-full items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 overflow-hidden group"
      style={{
        backgroundColor: 'transparent',
        color: customColor,
        border: `1px solid ${customColor}`,
      }}
    >
      {/* Ripple effect */}
      <span
        ref={rippleRef}
        className="absolute rounded-full pointer-events-none opacity-0"
        style={{
          backgroundColor: customColor,
          width: '20px',
          height: '20px',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Text */}
      <span className="relative z-10">{text}</span>
      
      {/* Arrow */}
      <span 
        ref={arrowRef}
        className="relative z-10 transition-transform duration-200"
        style={{ color: customColor }}
      >
        →
      </span>
    </Link>
  );
};

export default KnowMore;