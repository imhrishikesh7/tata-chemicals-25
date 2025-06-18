import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Heading from '../Heading';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gratitude = () => {
  const container = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
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
  
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative h-screen flex items-center justify-center overflow-hidden z-10 bg-neutral-100"
      style={{
        background: `radial-gradient(circle at 50% 50%, #5a9bb3, #367a99, #1f5a7d)`,
        perspective: '1000px',
      }}
    >
      {/* Card 1 - Founder */}
      <div 
        ref={card1} 
        className="absolute px-4  w-full  flex justify-center items-center"
      >
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-lg border  border-neutral-200">
          <div className="md:flex ">
            {/* Image Section */}
            <div className="md:w-5/12 bg-neutral-50 flex  items-center justify-center py-16 px-12">
              <img 
                src="/home/founder.webp" 
                className="max-w-full h-auto object-contain" 
                alt="Founder" 
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-7/12 py-16 px-12">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-3xl font-medium text-neutral-900 mb-3">
                    Jamsetji Nusserwanji Tata
                  </h2>
                  <p className="text-neutral-600 text-base">
                    March 03, 1839 — May 19, 1904
                  </p>
                  <p className="text-neutral-500 text-sm mt-1">
                    Our Founder
                  </p>
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

      {/* Card 2 - Mr. Tata */}
      <div 
        ref={card2} 
        className="absolute px-4 w-full  flex justify-center items-center"
      >
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-5/12 bg-neutral-50 flex items-center justify-center py-16 px-12">
              <img 
                src="/home/rnt.webp" 
                className="max-w-full h-auto object-contain" 
                alt="Mr. Tata" 
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-7/12 py-16 px-12">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-3xl font-medium text-neutral-900 mb-3">
                    Padma Vibhushan Ratan N. Tata
                  </h2>
                  <p className="text-neutral-600 text-base">
                    December 28, 1937 — October 09, 2024
                  </p>
                  <p className="text-neutral-500 text-sm mt-1">
                  Remembering Mr. Tata
                  </p>
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