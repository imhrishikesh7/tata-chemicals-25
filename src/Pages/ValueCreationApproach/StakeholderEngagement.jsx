import React, { useState, useEffect } from 'react';

const StakeholderEngagement = () => {
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

    const steps = [
        {
            number: 1,
            title: "Mapping",
            description: "Identify and categorise stakeholders based on impact and influence",
            color: "bg-[#a088ad]",
            textColor: "text-[#a088ad]"
        },
        {
            number: 2,
            title: "Assessment",
            description: "Prioritise stakeholders by analysing interests and business relevance",
            color: "bg-[#aeb936]",
            textColor: "text-[#aeb936]"
        },
        {
            number: 3,
            title: "Engagement",
            description: "Conduct structured interactions to integrate feedback into strategy",
            color: "bg-[#40b2a2]",
            textColor: "text-[#40b2a2]"
        },
        {
            number: 4,
            title: "Monitoring",
            description: "Regularly review engagement effectiveness and adapt approaches",
            color: "bg-[#fdb840]",
            textColor: "text-[#fdb840]"
        }
    ];


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
                            Stakeholder Engagement
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-8xl text-[#1368b4]'>We Listen, Understand, Deliver. </p>
                            <p className='text-xl mt-5'>
                                Tata Chemicals acknowledges the importance of fostering robust partnerships with stakeholders
                                to ensure holistic growth and long-term value creation. We have open dialogues with Communities
                                / Society, Employees, Shareholders, Customers, Suppliers and Government. This helps
                                identify pressing issues and develop strategies to mitigate them efficiently. As a responsible
                                corporate citizen, we believe in upholding transparency and ethical integrity and will continue to
                                keep stakeholder engagement as the cornerstone of our growth strategy.
                            </p>
                        </div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('Customers')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Customers
                            </button>
                            <button
                                onClick={() => scrollToSection('Employees')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Employees
                            </button>
                            <button
                                onClick={() => scrollToSection('Communities')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Communities / Society
                            </button>
                            <button
                                onClick={() => scrollToSection('Shareholders')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Shareholders
                            </button>
                            <button
                                onClick={() => scrollToSection('Suppliers')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Suppliers
                            </button>
                            <button
                                onClick={() => scrollToSection('Legend')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Legend
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                data-animate
                className={`transition-all duration-1000 delay-100 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-12 text-center">
                                Stakeholder Identification Process
                            </h1>

                            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="flex flex-col items-center text-center max-w-xs">
                                        {/* Step Circle */}
                                        <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                                                <span className={`font-bold text-xl ${step.textColor}`}>
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Step Label */}
                                        <div className={`${step.color} px-3 py-1 rounded-full mb-4`}>
                                            <span className="text-white text-lg font-medium">
                                                Step {step.number}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl m-semi-bold text-gray-800 mb-3">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                        {index < steps.length - 1 && (
                                            <div className="hidden lg:block absolute transform translate-x-48 mt-8">
                                                <svg width="40" height="20" viewBox="0 0 40 20" className="text-gray-300">
                                                    <path d="M0 10 L35 10 M30 5 L35 10 L30 15" stroke="currentColor" strokeWidth="2" fill="none" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-10 space-y-10'>
                        <img src="ValueCreationApproach/Stakeholder/1.webp" alt="" id='Customers'/>
                            <img src="ValueCreationApproach/Stakeholder/2.webp" alt="" id='Employees'/>
                            <img src="ValueCreationApproach/Stakeholder/4.webp" alt="" id='Communities'/>
                            <img src="ValueCreationApproach/Stakeholder/5.webp" alt="" id='Shareholders'/>
                            <img src="ValueCreationApproach/Stakeholder/6.webp" alt="" id='Suppliers'/>
                            <img src="ValueCreationApproach/Stakeholder/7.webp" alt=""/>
                            <img src="ValueCreationApproach/Stakeholder/3.webp" alt="" id='Legend'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakeholderEngagement;