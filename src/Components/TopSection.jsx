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

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    if (underlineRef.current) {
      tl.fromTo(
        underlineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (stRef.current) {
      tl.fromTo(
        stRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.4'
      );
    }

    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }
  }, []);

  const handleTabClick = (id) => {
    onTabClick(id);

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      
      {/* Layered color depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-indigo-900/10" />
      
      {/* Subtle geometric accents */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/8 to-transparent rounded-full blur-2xl" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`
      }} />

      {/* Reveal Animation Layer */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-700 ease-in-out z-10 ${
          reveal ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Content */}
      <div
        className="relative z-20 container mx-auto px-6 py-20 md:pt-28 md:pb-20"
        ref={containerRef}
        id={sectionId}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {title && (
            <h1
              ref={titleRef}
              className="opacity-0 text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              {title}
            </h1>
          )}

          {title && (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400" />
              <div
                ref={underlineRef}
                className="opacity-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform origin-center"
              />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400" />
            </div>
          )}

          {subtitle && (
            <p
              ref={stRef}
              className="opacity-0 text-xl md:text-2xl font-medium text-slate-200 leading-relaxed max-w-6xl mx-auto"
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              ref={descRef}
              className="opacity-0 text-lg md:text-xl text-slate-300 leading-relaxed max-w-6xl mx-auto"
            >
              {description}
            </p>
          )}

        {tabs.length > 0 && (
  <div className="pt-6">
    <div className="flex flex-col md:w-fit mx-auto md:flex-row justify-center gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
      {tabs.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => handleTabClick(id)}
          className={`w-full md:w-auto text-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group break-words
            ${
              activeTab === id
                ? 'bg-white/20 text-white shadow-lg border border-white/30 backdrop-blur-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
        >
          <span className="relative z-10">{label}</span>
          {activeTab === id && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
          )}
        </button>
      ))}
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}