import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Environment = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="relative container mx-auto px-6 py-16">
          <div
            id="hero-title"
            data-animate
            className={`transition-all duration-1000 transform ${isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
              Environment
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#2ca9a1] to-[#40b2a2] mx-auto rounded-full mb-8"></div>

            {/* Quick Navigation */}
            <div className="flex justify-center flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('carbon-footprint')}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Reducing our Carbon Footprint
              </button>
              <button
                onClick={() => scrollToSection('targets-initiatives')}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Tata Chemicals Environment Targets and Initiatives
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Background Image */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('ESG/India17.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Reducing Carbon Footprint Section - Outside Container */}
        <div className="relative z-10 pt-20">
          <motion.section
            id="carbon-footprint"
            className="bg-white/60 backdrop-blur-sm rounded-tr-[50px] p-8 md:p-12 shadow-xl border border-white/20 mb-20 mx-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] mb-8">
              Reducing our Carbon Footprint
            </h2>

            <h3 className="text-2xl font-bold text-[#4d4d4f] mb-4">Project Aalingana</h3>
            <p className="text-[#4d4d4f] leading-relaxed text-lg">
              The Tata group's sustainability strategy is guided by Project Aalingana, which is driven by the vision to protect the world and build the future through the technologies of tomorrow. While the principles of social and environmental responsibility are deeply ingrained in the group's founding principles, project Aalingana seeks to build on this foundation to position the group among sustainability leaders globally. Tata Chemicals' sustainability commitments are aligned to Project Aalingana commitments.
            </p>
          </motion.section>
        </div>

        <div className="relative container mx-auto px-6 space-y-20 py-10">
          {/* Targets and Initiatives Section */}
          <section
            id="targets-initiatives"
            className="p-8 md:p-12"
            data-animate
          >
            <div className={`transition-all duration-1000 transform ${isVisible['targets-initiatives'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] mb-12 text-center">
                Tata Chemicals Environment Targets and Initiatives
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Climate Change */}
                <div className="rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border border-white/30">
                  <div className="flex items-center mb-6">
                    <div className="w-15 h-15  rounded-full flex items-center justify-center mr-4">
                      <img src="ESG/Environment/1.png" alt="" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Climate change</h3>
                      <div className="w-25 h-1 bg-[#ed1a3b] rounded-full mb-1"></div>
                      <p className="text-white text-xl">GHG emissions, NOx and SOx</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-lg">Commitments</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        28% reduction in absolute carbon emissions (Scope 1 and 2) by 2030 in line with SBTi
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Net Zero emissions by 2045
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Ensure NOx, SOx and SPM well below regulatory limits
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 text-lg">Key projects</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Use of more biomass as a renewable fuel
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Increasing mix of renewable power
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Improving energy efficiencies across manufacturing facilities
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Continuing with Carbon Capture Unit in UK operations
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Circular Economy */}
                <div className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30">
                  <div className="flex items-center mb-6">
                    <div className="w-15 h-15 rounded-full flex items-center justify-center mr-4">
                      <img src="ESG/Environment/2.png" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Circular economy</h3>
                      <div className="w-25 h-1 bg-[#ed1a3b] rounded-full mb-1"></div>
                      <p className="text-white">Water, waste, renewable energy</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-lg">Commitments</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Become water positive by 2030 in India
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Zero waste to landfill by 2030
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Double the share of renewable by 2025
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 text-lg">Key projects</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        33.15 MCF1 rainwater harvested through our Dhan programme
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        100% fly ash consumption
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Recycling solid waste 3 lakh MT
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Green chemistries, fermentation technologies
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        EPR compliant
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        IIoT applications for process efficiencies and high productivity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        34% increase in renewable energy consumption, touching 5,28,809 GJ
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Nature and Biodiversity */}
                <div className=" rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30">
                  <div className="flex items-center mb-6">
                    <div className="w-15 h-15 rounded-full flex items-center justify-center mr-4">
                      <img src="ESG/Environment/3.png" alt="" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Nature and biodiversity</h3>
                      <div className="w-25 h-1 bg-[#ed1a3b] rounded-full mb-1"></div>
                      <p className="text-white text-lg">Plantation, species, resource conservation</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-white mb-3">Commitments</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Zero harm
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Net zero impact on biodiversity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] text-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Coastal and marine ecosystem restoration
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-white mb-3">Key projects</h4>
                    <ul className="space-y-2 text-lg text-white">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Reduce negative impact on biodiversity
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Coral reef restoration
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#40b2a2] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        3.3 lakh Mangroves and 2.75 lakh tree plantations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='bg-white rounded-3xl p-8 md:p-12 shadow-xl'>
            <h1 className='text-3xl text-[#1368b4] font-bold text-center'>Progress in Sustainability Performance </h1>
            <img src="ESG/Environment/Table.png" alt="" className='mt-10' />
            <img src="ESG/Environment/India16.png" alt="" className='mt-10' />
            <div className='flex'>
              <div className='w-2/3'>
                <h1 className='text-3xl text-[#ed1a3b] font-bold text-left mt-10'>Recognising the urgent need for decarbonisation to address climate change, wide array of initiatives have been implemented.</h1>
                <img src="ESG/Environment/44-Page-IMG.png" alt="" className='mt-10' />
              </div>
              <div className='w-1/3'>
                <img src="ESG/Environment/India18.png" alt="" className='mt-25' />
              </div>
            </div>
            <div className='my-6'>
              <img src="./envc1.webp" alt="" />
            </div>
            <div className='my-6'>
              <img src="./envc2.webp" className='w-full' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;