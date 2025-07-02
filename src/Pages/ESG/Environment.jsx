import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopSection from '../../Components/TopSection';
import { Recycle, Droplets, Cog, Fish } from 'lucide-react';

const Environment = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('');

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
  const tabs = [
    {
      id: 'targets-initiatives',
      title: 'Tata Chemicals Environment Targets and Initiatives',
      label: 'Tata Chemicals Environment Targets and Initiatives'
    },
    {
      id: 'driving',
      title: 'Driving Net Zero',
      label: 'Driving Net Zero'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
      {/* Hero Section */}
      <TopSection
        title="Environment"
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={scrollToSection}
        isVisible={isVisible}
      />


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
              <h2 className="text-3xl md:text-4xl font-bold text-white w-fit mx-auto px-8 rounded-2xl backdrop-blur-2xl pt-2 pb-1 bg-[#1368b4] mb-12 text-center">
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
            <div className='my-6' id='driving'>
              {/* <img src="./envc1.webp" alt="" /> */}
              <div className="mx-auto bg-white">
                {/* Header Section with Background */}
                <div className='mb-6'>
                  <img src="./ESG/Environment/net-zero.webp" alt="" />
                </div>

                {/* Subtitle */}
                <p className="text-gray-700 text-xl mb-8 px-4">
                  Tata Chemicals is advancing the Tata Group's 'Driving Net Zero' ambition through multiple initiatives
                </p>

                {/* Three Column Content */}
                <div className="gap-8 px-4">
                  {/* Energy Efficiency Improvements */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-teal-600 mb-2">Energy Efficiency Improvements</h2>
                      <div className="w-16 h-1 bg-orange-400 mb-"></div>
                    </div>

                    <div className="space-y-2 text-gray-700 text-lg leading-relaxed mb-6">
                      <p>
                        Upgraded the evaporators at the Mithapur vacuum salt plant, which reduced specific steam consumption by approximately 18%. This upgrade has lowered annual CO₂ emissions by an estimated 198,820 tonnes. We also installed Variable Frequency Drives (VFDs) and Variable Speed Drives (VSDs) across the facility, further reducing emissions by about 85,000 tonnes of CO₂ equivalent each year.
                      </p>

                      <p>
                        Installing Electric Calciner technology in Kenya that will reduce the carbon footprint, by replacing HFO with renewable power.
                      </p>
                    </div>
                  </div>

                  {/* Renewable Energy Investments */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-teal-600 mb-2">Renewable Energy Investments</h2>
                      <div className="w-16 h-1 bg-orange-400 mb-"></div>
                    </div>

                    <div className="space-y-2 text-gray-700 text-lg leading-relaxed">
                      <p>
                        Commissioning a 2 MW solar power plant at Mithapur township, expected to avoid approximately 1,100 tonnes of CO₂e emissions annually.
                      </p>

                      <p>
                        Installing 5 MW solar plant in Kenya to maximise the renewable energy.
                      </p>
                    </div>
                  </div>

                  {/* Transition to Low-Emission Fuels */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-teal-600 mb-2">Transition to Low-Emission Fuels</h2>
                      <div className="w-16 h-1 bg-orange-400 mb-"></div>
                    </div>

                    <div className="space-y-2 text-gray-700 text-lg leading-relaxed">
                      <p>
                        Conducted trials in India for the use of biomass in current boilers in FY2024-25. The Company plans to do some more trials in FY2025-26 using different types of biomass to scale it up for replacing the coal. Work is in progress to establish a sustainable biomass supply chain.
                      </p>

                      <p>
                        Piloting to replace coke with biochar in Mithapur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-6'>
              {/* <img src="./envc2.webp" className='w-full' alt="" /> */}
              <div className=" mx-auto ">
                {/* Circular Economy Section */}
                <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
                  <div className="bg-blue-900 text-white p-6">
                    <h1 className="text-2xl font-bold mb-2">Pioneering Circular Economy</h1>
                    <p className="text-blue-100 text-lg">
                      Advancing the Group's circular economy goals through targeted actions across waste, water
                      and resource management
                    </p>
                  </div>

                  <div className="flex">
                    {/* Left Content */}
                    <div className="flex-1 p-6">
                      {/* Waste Management */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className="rounded-lg mr-4">
                            {/* <Recycle className="w-6 h-6 text-blue-600" /> */}
                            <img src="./ESG/Environment/icon1_no_bg.png" className='w-16 h-16' alt="" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Waste Management</h3>
                            <div className="w-8 h-1 bg-red-500 mt-1"></div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Implemented a comprehensive waste management strategy to minimise waste generation, maximise recycling
                          and reuse and ensure the safe disposal of waste. Our approach emphasises on-site segregation of waste, enabling
                          responsible management practices such as 100% recycling of plastic waste, reutilisation of fly ash and safe disposal
                          across all locations.
                        </p>
                      </div>

                      {/* Water Stewardship */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className="rounded-lg mr-4">
                            <img src="./ESG/Environment/icon2_no_bg.png" className='w-16 h-16' alt="" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Water Stewardship</h3>
                            <div className="w-8 h-1 bg-red-500 mt-1"></div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Implemented comprehensive measures to reduce water usage, ensuring that all our water sources are metered
                          and monitored regularly. At Tata Chemicals, we have set stringent annual targets to lower our water consumption
                          and review progress periodically.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mt-3">
                          To maintain high standards, we utilise advanced treatment systems that ensure discharged water meets
                          regulatory norms.
                        </p>
                      </div>

                      {/* Resource Optimisation */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="rounded-lg mr-4">
                            <img src="./ESG/Environment/icon3_no_bg.png" className='w-16 h-16' alt="" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Resource Optimisation</h3>
                            <div className="w-8 h-1 bg-red-500 mt-1"></div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                          Utilised undersized limestone in cement production process at Mithapur, this reduces the requirement of fresh
                          limestone in the process.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          In US plant, recovered sodium carbonate decahydrate (DECA) is being used in processing plants as a source
                          of soda ash liquor makeup. Thereby reducing the consumption of trona.
                        </p>
                      </div>
                    </div>

                    {/* Right Content - ZLD Card */}
                    <div className="w-80 bg-blue-900 text-white p-6">
                      <h3 className="text-xl font-bold mb-4">A step towards Zero Liquid Discharge (ZLD)</h3>
                      <div className="bg-white/10 rounded-lg mb-4">
                        <img
                          src="./ESG/Environment/zld.webp"
                          alt="Industrial facility"
                          className="w-full object-cover rounded"
                        />
                      </div>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        In FY 2025, Rallis operations at Dahej SEZ, continued to develop the capability for Zero Liquid discharge.
                        The treated water is utilised across various industrial activities, such as in utilities, recycling of condensate water in the
                        production and gardening purposes, with an average of 84% of total treated being recycled.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Biodiversity Section */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 mt-6">
                    <h2 className="text-2xl font-bold text-[#1368b4]">Biodiversity</h2>
                  </div>

                  <div className="flex">
                    {/* Left Content */}
                    <div className="flex-1 p-6">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        As a part of our commitment to biodiversity, we have initiated a three-season biodiversity impact assessment at
                        Mithapur. This initiative aligns with Tata Chemicals' overriding efforts to promote ecological balance and preserve the rich
                        natural heritage of the region.
                      </p>

                      <div className="flex items-start">
                        <div className="mr-6">
                          <h4 className="font-bold text-gray-800 mb-2">Conserving marine life: Saved 979 sharks at Gujarat coast</h4>
                          <div className="w- h-24rounded-lg flex items-center justify-center">
                            <img src="./ESG/Environment/shark_no_bg.webp" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='md:w-1/2 flex'>
                      <div className="flex flex-col h-full bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full">
                        <div className="bg-gradient-to-r from-[#1368b4] to-transparent px-4 rounded-t-md mb-5">
                          <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 mb-3">
                            Case Study
                          </div>
                          <h3 className="font-semibold text-2xl sm:text-3xl">
                            At Tata Chemicals Europe, Conserving <br />
                            and Enriching Biodiversity is a Priority
                          </h3>
                        </div>

                        <div className="bg-white text-black rounded-br-4xl mt-0 flex-grow flex flex-col">
                          <div className='p-6'>
                            <p className="w-full mb-4 text-[#007bb4] text-xl font-semibold leading-7">
                              The Biodiversity Restoration Project at Cledford Lagoons represents a transformation of the British Salt site. It has been used for industrial purposes for over a century. This initiative aims to convert the area into a wildlife reserve, increasing biodiversity habitats and creating publicly accessible green space.
                            </p>
                            <p className="w-full mb-4 text-xl font-medium leading-7">
                              It also supports local housing developments by creating Biodiversity Net Gain (BNG) units, helping developers meet the UK's 10% biodiversity increase requirement.
                            </p>
                            <p className="w-full text-xl font-medium leading-7">
                              In partnership with Green Earth Development Group (GEDG), the site is being restored, using surplus soil from construction projects, avoiding landfill and protecting local water sources. Feedback from the community has been implemented to foster local ownership and £1 per soil delivery is donated to a Community Fund to support local causes. The project commits to managing the site for 30 years, ensuring rare habitats thrive.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;