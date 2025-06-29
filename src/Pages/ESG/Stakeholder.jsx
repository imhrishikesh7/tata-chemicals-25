import React, { useState, useEffect } from 'react';

const Stakeholder = () => {
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
        <div className="min-h-screen bg-gradient-to-br from-[#3da8a4] via-[#3088ae] to-[#2469b2] scroll-smooth">
            {/* Hero Section */}
            <div className="relative overflow-hidden mt-6">
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
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-center text-white mb-6">
                            Engaging with Our Shareholders:
                            Information and Grievance Redressal
                        </h1>
                        <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-white'>Tata Chemicals prioritizes proactive shareholder engagement through continuous disclosures, offering investors clear insights into its
                                business, operations, and governance. The Company also utilizes digital platforms to enhance shareholder services and has a robust
                                grievance redressal system for timely resolution of complaints and to enhance investor confidence. This commitment underscores its
                                dedication to prioritizing shareholder interests.</p>
                        </div>


                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="message-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['message-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-transparent backdrop-blur-sm rounded-2xl mb-8 p-8 md:p-12 shadow-xl border border-white/50">
                        <div className='mb-8'>
                            <img src="./ESG/54-IMG-1.webp" alt="" />
                        </div>
                    </div>
                    <div className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className='mb-8'>
                            <img src="./ESG/55-IMG-2.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stakeholder;
