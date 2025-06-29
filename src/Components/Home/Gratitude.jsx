import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gratitude = () => {
  const container = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (mobile) return; // Skip scroll animation on mobile

    const ctx = gsap.context(() => {
      gsap.set(card1.current, { y: 0, zIndex: 10 });
      gsap.set(card2.current, { y: 800, zIndex: 5, autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=200vh',
          scrub: 0.2,
          pin: true,
        },
      });

      tl.to(card2.current, {
        y: 0,
        autoAlpha: 1,
        duration: 1.8,
      });

      tl.to(card1.current, {
        autoAlpha: 0,
        duration: 1.8,
      }, "<");

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: '+=200vh',
        onLeave: () => {
          gsap.set(card2.current, { zIndex: 20 });
          gsap.set(card1.current, { zIndex: 5 });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className={`relative ${isMobile ? '' : 'h-screen'} flex flex-col items-center justify-center overflow-hidden z-10 bg-neutral-100`}
      style={{
        background: `radial-gradient(circle at 50% 50%, #5a9bb3, #367a99, #1f5a7d)`,
        perspective: '1000px',
      }}
    >
      {/* Card 1 */}
      <div
        ref={card1}
        className={`w-full px-4 ${isMobile ? 'relative mt-10' : 'absolute'} flex justify-center items-center`}
      >
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
          <div className="md:flex">
            <div className="md:w-5/12 bg-neutral-50 flex items-center justify-center py-10 md:py-16 px-6 md:px-12">
              <img src="/home/founder.webp" className="max-w-full h-auto object-contain" alt="Founder" />
            </div>
            <div className="md:w-7/12 py-10 md:py-16 px-6 md:px-12">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div>
                  <p className="text-[#1365ac] text-2xl font-bold mb-2">Our Founder</p>
                  <h2 className="text-3xl font-medium text-neutral-900 mb-3">Jamsetji Nusserwanji Tata</h2>
                  <p className="text-neutral-600 text-base">March 03, 1839 — May 19, 1904</p>
                </div>
                <div className="border-l-2 border-neutral-300 pl-6">
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    "In a free enterprise, the community is not just another stakeholder in business, but is in fact the very purpose of its existence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={card2}
        className={`w-full px-4 ${isMobile ? 'relative mt-10' : 'absolute'} flex justify-center items-center`}
      >
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
          <div className="md:flex">
            <div className="md:w-5/12 bg-neutral-50 flex items-center justify-center py-10 md:py-16 px-6 md:px-12">
              <img src="/home/rnt.webp" className="max-w-full h-auto object-contain" alt="Mr. Tata" />
            </div>
            <div className="md:w-7/12 py-10 md:py-16 px-6 md:px-12">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div>
                  <p className="text-[#1365ac] text-2xl font-bold mb-2">Remembering Mr. Tata</p>
                  <h2 className="text-3xl font-medium text-neutral-900 mb-3">Padma Vibhushan Ratan N. Tata</h2>
                  <p className="text-neutral-600 text-base">December 28, 1937 — October 09, 2024</p>
                </div>
                <div className="border-l-2 border-neutral-300 pl-6">
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    His legacy will continue to inspire us as we strive to uphold the principles he so passionately championed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
