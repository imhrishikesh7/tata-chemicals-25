import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function TopSection({
  title,
  subtitle,
  description,
  tabs = [],
  activeTab,
  onTabClick,
  sectionId = 'hero-title',
}) {
  const [reveal, setReveal] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const stRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setReveal(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        underlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        stRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
      
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* Reveal Animation Layer */}
      <div
        className={`absolute inset-0 bg-white transition-transform duration-[1200ms] ease-in-out z-10 ${
          reveal ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Content */}
      <div
        className="relative z-20 container mx-auto px-6 py-24"
        ref={containerRef}
        id={sectionId}
      >
        <div className="space-y-4">
          <h1
            ref={titleRef}
            className="opacity-0 text-4xl md:text-6xl lg:text-6xl font-extrabold text-center text-[#1b5587] tracking-tight mb-2"
          >
            {title}
          </h1>

          <div
            ref={underlineRef}
            className="opacity-0 mx-auto w-20 h-[2px] bg-red-600 rounded-sm"
          />

          <p
            ref={stRef}
            className="opacity-0 text-center max-w-6xl mx-auto text-lg md:text-2xl font-semibold text-[#1b5587] leading-relaxed"
          >
            {subtitle}
          </p>
          <p
            ref={descRef}
            className="opacity-0 text-center max-w-6xl mx-auto text-lg md:text-xl text-neutral-700 leading-relaxed"
          >
            {description}
          </p>
        </div>

        {/* In-page Navigation Tabs */}
        {tabs.length > 0 && (
          <div className="w-full mt-14">
            <div className="flex flex-wrap justify-center w-full max-w-5xl mx-auto gap-2 sm:gap-3">
              {tabs.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => onTabClick(id)}
                  className={`flex-shrink-0 px-4 py-3 cursor-pointer rounded-2xl text-sm sm:text-base font-medium border text-center transition-all duration-300 whitespace-nowrap
                    ${
                      activeTab === id
                        ? 'bg-[#1b5587] text-white shadow-md'
                        : 'bg-white text-[#1b5587] border-neutral-300 hover:bg-neutral-100'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}