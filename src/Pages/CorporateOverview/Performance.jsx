import React, { useState, useEffect } from 'react'
import Awards from '../../Components/Awards'

const Performance = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
                            Performance Review
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#2ca9a1] to-[#40b2a2] mx-auto rounded-full mb-8"></div>

                        {/* Quick Navigation */}
                        <div className="flex justify-center flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection('performance-overview')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => scrollToSection('awards-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Awards
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='marginal'>
                {/* Performance Overview */}
                <div
                    id="performance-overview"
                    data-animate
                    className={`scroll-mt-12 mb-12 transition-all duration-1000 delay-100 transform ${isVisible['performance-overview'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden">
                        <div className="relative rounded-2xl overflow-hidden p-5">
                            <img
                                src="CorporateOverview/AboutChemicals/07-Page-IMG.webp"
                                alt="Performance Review"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Awards Section */}
                <div
                    id="awards-section"
                    data-animate
                    className={`scroll-mt-40 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 transition-all duration-1000 delay-500 transform ${isVisible['awards-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="m-semi-bold text-[#1368b4] text-3xl mb-8 text-center">
                        Awards and Recognitions
                    </h2>
                    <Awards />
                </div>
            </div>
        </div>
    )
}

export default Performance