import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Title from '../Title';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Financial',
    colorFrom: '#2469b3cf',
    colorTo: '#2469b3',
    data: [
      { value: 14887, label: 'Revenue', suffix: '₹', unit: ' crore' },
      { value: 1953, label: 'EBITDA', suffix: '₹', unit: ' crore' },
    ],
  },
  {
    title: 'Customer',
    colorFrom: '#41b2a2cf',
    colorTo: '#41b2a2',
    data: [
      { value: 86, label: 'Customer Satisfaction Index (CSI)', suffix: '', unit: '%' },
      { value: 90, label: 'Net Promoter Score (NPS)', suffix: '', unit: '%' },
    ],
  },
  {
    title: 'Operations',
    colorFrom: '#a088abcf',
    colorTo: '#6d2e8a',
    heading: 'Production Volume (MT)',
    data: [
      { value: 3676780, label: 'Soda Ash' },
      { value: 1683320, label: 'Salt' },
      { value: 237489, label: 'Bicarbonate' },
    ],
  },
  {
    title: 'Social',
    colorFrom: '#40aeefcf',
    colorTo: '#40aeef',
    data: [
      { value: 72, label: 'Employee Engagement Score', suffix: '', unit: '%' },
      { value: 34, label: 'Increase in Renewable Energy', suffix: '', unit: '%' },
      { value: 22.54, label: 'CSR Spend', suffix: '₹', unit: ' crore' },
    ],
  },
];

const SliderCard = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const numberRef = useRef(null);

  const totalItems = section.data.length;
  const currentItem = section.data[currentIndex];

  useEffect(() => {
    if (!numberRef.current || !currentItem) return;
  
    const el = numberRef.current;
  
    // Kill existing animations on this element
    gsap.killTweensOf(el);
  
    // Animate text out
    gsap.to(el, {
      opacity: 0,
      y: -10,
      blur: 4,
      duration: 0.2,
      ease: 'power1.in',
      onComplete: () => {
        // Format new value
        const val =
          typeof currentItem.value === 'number' && currentItem.value % 1 !== 0
            ? currentItem.value.toFixed(2)
            : Math.floor(currentItem.value);
        const formatted = new Intl.NumberFormat('en-IN').format(val);
  
        // Update text content
        el.innerText = `${currentItem.suffix || ''}${formatted}${currentItem.unit || ''}`;
  
        // Animate text in
        gsap.fromTo(
          el,
          { opacity: 0, y: 10, blur: 4 },
          {
            opacity: 1,
            y: 0,
            blur: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      },
    });
  }, [currentItem]);
  
  
  useEffect(() => {
    if (isAutoPlay && totalItems > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, totalItems]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <div
      className="rounde-2xl overflow-hidde border-t-2 pt-4 flex flex-col justify-end gap-4"
      style={{ color: section.colorTo }}
    >
      <div className="px-4 w-full h-ful relative">
        {section.heading && (
          <p className="text-sm text-black mb-2 font-bold italic">{section.heading}</p>
        )}

        {/* Slider Content */}
        <div className="flex flex-col relative justify-end ">
          {/* Current Data Display */}
          <div className="flex flex-col">
            <p
              ref={numberRef}
              className="md:text-[4.2vh] text-3xl font-bold m-semi-bold"
            ></p>
            <p className="text-lg text-gray-500 opacity-90 transition-all duration-300">
              {currentItem.label}
            </p>
          </div>

          {totalItems > 1 && (
            <div className="flex space-x-2 mt-4">
              {section.data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex(i);
                    setTimeout(() => setIsAutoPlay(true), 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? 'scale-125 opacity-100'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    backgroundColor: section.colorTo,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Title Section */}
      <div
        className="w-full flex items-center rounded-b-2xl justify-between p-4"
        style={{
          background: `linear-gradient(to bottom right, ${section.colorFrom}, ${section.colorTo})`,
        }}
      >
        <h3 className="text-2xl md:text-[3vh] font-bold text-white m-semi-bold">{section.title}</h3>

        {totalItems > 1 && (
          <div className="flex space-x-2 ">
            <button
              onClick={handlePrevious}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="bg-white marginal !py-20 relative z-10">
      <div className="text-center my-6 ">
        <Title text="Highlights of FY 2025" />
      </div>
      <div className="mx-auto px-4  grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, i) => (
          <SliderCard key={i} section={section}  />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
