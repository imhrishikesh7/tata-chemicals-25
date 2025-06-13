import React, { useEffect, useRef } from 'react';
import Heading from '../Heading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gratitude = () => {
  const container = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial card setup
      gsap.set(card2.current, { opacity: 0, y: 100, scale: 0.98 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(card1.current, {
        opacity: 0,
        y: -80,
        duration: 1.2,
        ease: 'power2.inOut',
      }).to(card2.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      }, '<0.3');

      // Animate radial gradient position + color (stronger shift)
      gsap.to(container.current, {
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        '--color1': '#e0f7ff',
        '--color2': '#81d4fa',
        '--color3': '#0288d1',
        '--posX': '70%',
        '--posY': '30%',
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const cardStyle = 'max-w-5xl w-full bg-white shadow-xl rounded-xl p-10 md:flex items-center gap-10 transition-transform duration-700';

  return (
    <div
      ref={container}
      className="relative h-screen flex items-center justify-center overflow-hidden z-10"
      style={{
        background: `radial-gradient(circle at var(--posX, 50%) var(--posY, 50%), var(--color1, #aee3f9), var(--color2, #89cff0), var(--color3, #5cb1e2))`,
        '--color1': '#aee3f9',
        '--color2': '#89cff0',
        '--color3': '#5cb1e2',
        '--posX': '50%',
        '--posY': '50%',
      }}
    >
      {/* Card 1 */}
      <div ref={card1} className="absolute px-4 w-full flex justify-center items-center">
        <div className={cardStyle}>
          <div className="md:w-2/3">
            <Heading text="Our Founder" />
            <p className="my-4 text-3xl leading-snug text-gray-800">
              In a free enterprise, the community is not just another stakeholder in business, but is in fact the very purpose of its existence.
            </p>
            <p className="font-bold text-lg">Jamsetji Nusserwanji Tata</p>
            <p className="text-base">March 03, 1839 to May 19, 1904</p>
          </div>
          <div className="md:w-1/3">
            <img src="/home/founder.webp" className="w-full h-auto object-contain" alt="Founder" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div ref={card2} className="absolute px-4 w-full flex justify-center items-center">
        <div className={cardStyle}>
          <div className="md:w-2/3">
            <Heading text="Remembering Mr. Tata" />
            <p className="my-4 text-3xl leading-snug text-gray-800">
              His legacy will continue to inspire us as we strive to uphold the principles he so passionately championed.
            </p>
            <p className="font-bold text-lg">Padma Vibhushan Ratan N. Tata</p>
            <p className="text-base">Born: December 28, 1937</p>
          </div>
          <div className="md:w-1/3">
            <img src="/home/rnt.webp" className="w-full h-auto object-contain" alt="Mr. Tata" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
