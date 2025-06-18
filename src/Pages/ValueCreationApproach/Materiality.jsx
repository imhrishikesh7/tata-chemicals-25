import React, { useState, useEffect } from 'react';

const Materiality = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

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

    // Smooth scroll utility function
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
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="relative container mx-auto px-6 py-20">
                    <div
                        id="hero-title"
                        data-animate
                        className={`transition-all duration-1000 transform ${isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            Materiality Assessment
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>Double Materiality enables to identify ESG issues that impact financial outcomes and arise from
                                business operations through an Impact-Risk-Opportunity (IRO) lens to prioritise what matters most.</p>
                        </div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('ceo-quote')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                The Assessment Covers
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Materiality Identification
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Factors to identify, assess and prioritise IROs
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Materiality Matrix
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Material Topics
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id=""
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                The Assessment Covers
                            </h1>
                            <img src="ValueCreationApproach/Materiality/1.png" alt="" className='' />
                            <p className='text-lg'>We completed a Double Materiality Assessment to understand how sustainability-relevant drives intersect with our strategy, operations
                                and externalities.
                                Under the IRO framework, ESG issues were evaluated across value chain and established their importance based on feedback from
                                stakeholders, regulatory needs and potential business consequences. The review was in accordance with European Sustainability
                                Reporting Standards (ESRS) and the Global Reporting Initiative (GRI). </p>
                        </div>
                        <div>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Stakeholder Identification Process
                            </h1>
                            <img src="ValueCreationApproach/Materiality/2.png" alt="" />
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Factors to identify, assess and prioritise IROs
                            </h1>
                            <img src="ValueCreationApproach/Materiality/3.png" alt="" />
                            <p className='text-lg mt-10'>
                                We adopted a data-based approach to our Double Materiality Assessment, in line with ESRS and GRI guidelines. The analysis tested
                                financial materiality by determining how our business performance is impacted by ESG factors and impact materiality by setting out our
                                environmental and social presence in countries where we operate. We engaged with main stakeholders including top-level management,
                                Institutional investors, customers, employees, suppliers in India, UK, Africa and US and with local communities in India whose inputs were
                                incorporated into the prioritisation of ESG issues using the Impact-Risk-Opportunity (IRO) framework.
                            </p>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Materiality Matrix
                            </h1>
                            <img src="ValueCreationApproach/Materiality/35-Page-IMG.png" alt="" />
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                            Material Topics
                            </h1>
                            <img src="ValueCreationApproach/Materiality/3a668b86-d7cc-4da0-afda-1a3e04018a80.png" alt="" />
                            <img src="ValueCreationApproach/Materiality/c01f265a-11f7-49e7-ae0e-ad23488d138d.png" alt="" />
                            <img src="ValueCreationApproach/Materiality/f1762a2b-eeba-4bf3-b3db-564eeb51b7bb.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materiality;