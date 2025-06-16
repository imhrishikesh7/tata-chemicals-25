import React, { useState, useEffect } from 'react';

const CEO = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        // Smooth scroll behavior for the entire page
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

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
                            CEO's Message
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('ceo-quote')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Vision Statement
                            </button>
                            <button
                                onClick={() => scrollToSection('message-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Full Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20">

                {/* CEO Quote Section with Image */}
                <div
                    id="ceo-quote"
                    data-animate
                    className={`transition-all duration-1000 delay-200 transform ${isVisible['ceo-quote'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="grid lg:grid-cols-10 gap-12 items-center">
                        {/* CEO Image */}
                        <div className="lg:col-span-3">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#ed1a3b]/20 to-[#ff4757]/20 rounded-3xl blur-xl"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30">
                                    <img 
                                        src="CorporateOverview/CEO/CEO.webp" 
                                        alt="CEO" 
                                        className="w-full rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="lg:col-span-7">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 relative">
                                {/* Quote mark decoration */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white text-2xl font-bold">"</span>
                                </div>
                                
                                <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#1368b4] font-medium italic mb-6 pl-8">
                                    Safety remains our first priority and our efforts are to create a zero harm work place. Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth.
                                </blockquote>
                                
                                <div className="border-t-2 border-gradient-to-r from-[#ed1a3b] to-transparent pt-4 pl-8">
                                    <p className='text-2xl text-[#1368b4] m-bold'>
                                    R. Mukundan
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700">
                                        Chief Executive Officer
                                    </p>
                                    <p className="text-base text-gray-600">
                                        Tata Chemicals Limited
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Section */}
                <div
                    id="message-section"
                    data-animate
                    className={`transition-all duration-1000 delay-300 transform ${isVisible['message-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1368b4] mb-8">
                            Dear Shareholders,
                        </h2>
                        
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p className="text-xl font-medium text-gray-800 mb-8">
                                I hope this message finds you and your families well. Thank you for your unwavering trust and support for Tata Chemicals.
                            </p>

                            {/* Performance Overview Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 my-8">
                                <h3 className="text-xl font-bold text-[#1368b4] mb-4">FY2025 Performance Overview</h3>
                                <div className="grid md:grid-cols-3 gap-4 mb-4">
                                    <div className="bg-white/60 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#432c87]">+6%</div>
                                        <p className="text-sm text-gray-600">Soda Ash Volume Growth</p>
                                    </div>
                                    <div className="bg-white/60 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#ed1a3b]">8.3%</div>
                                        <p className="text-sm text-gray-600">Global Soda Ash Demand Growth</p>
                                    </div>
                                    <div className="bg-white/60 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#1368b4]">+205 KT</div>
                                        <p className="text-sm text-gray-600">Volume Increase</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    Looking to the year passed by, Global Soda Ash demand grew by 8.3% year-on-year (5.3 mn MT), driven by an 18% increase in China and a 4.5% rise in India. However, capacity increased by 8.9% (6.5 mn MT), leading to oversupplied markets with margin erosion due to price declines of over 25%.
                                </p>
                            </div>

                            <p className="text-lg">
                                Our operations were impacted by fluctuating energy and feedstock costs, shipping costs and logistical hurdles. We seamlessly met customer needs through teamwork, efficient operations and a resilient supply chain. Tata Chemicals is focused on driving operational excellence to improve its resilience aided by synergies from our multi-geography presence.
                            </p>

                            {/* Strategic Transformation Card */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 my-8">
                                <h3 className="text-xl font-bold text-[#1368b4] mb-4">Strategic Transformation</h3>
                                <p className="text-gray-700 mb-4">
                                    During the year, UK soda ash Lostock plant ceased operations due to lower product prices and high gas costs resulting in sustained negative margins. We will now pivot UK towards higher value added businesses of food and pharma grade salt and bicarbonates.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-green-700 font-semibold">Pivoting to Higher Value Products</span>
                                </div>
                            </div>

                            {/* Sustainability Focus */}
                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200/50 my-8">
                                <h3 className="text-xl font-bold text-[#432c87] mb-4">Sustainability & Innovation</h3>
                                <p className="text-gray-700 mb-4">
                                    <span className="font-semibold text-[#ed1a3b]">Sustainability</span> is a fundamental driver of industrial transformation and our vision is aligned to <span className="font-semibold text-[#432c87]">Project Aalingana</span>, Tata Group's flagship endeavour for a greener sustainable future.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-[#1368b4] mb-2">Sustainable Applications:</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Solar glass</li>
                                            <li>• EV batteries</li>
                                            <li>• Biodegradable packaging</li>
                                            <li>• Industrial flue gas treatment</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1368b4] mb-2">Technology Integration:</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• AI and ML optimization</li>
                                            <li>• SAP HANA implementation</li>
                                            <li>• TCS Datom Data Framework</li>
                                            <li>• Zero Trust security architecture</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Future Outlook */}
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200/50 my-8">
                                <h3 className="text-xl font-bold text-[#1368b4] mb-4">FY2026 Outlook</h3>
                                <p className="text-gray-700 mb-4">
                                    The outlook for the company's portfolio is expected to remain stable in FY 2026. Global demand for soda ash is expected to remain flat with India forecasted to grow by 5.8%. Bicarb, Salt and specialty portfolio which serve the pharma, food and feed segments will continue to show healthy growth rates.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="text-2xl font-bold text-[#ed1a3b]">5.8%</div>
                                    <span className="text-gray-600">Expected India Growth</span>
                                </div>
                            </div>

                            <p className="text-lg font-medium text-gray-800 border-l-4 border-[#ed1a3b] pl-6 my-8">
                                Safety remains our first priority and our efforts are to create a zero harm work place. Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth.
                            </p>

                            <p className="text-xl font-semibold text-[#1368b4] text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                                On behalf of Tata Chemicals, I thank you all for your continued support in our ongoing journey of transformation to deliver chemistry of sustainable growth.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom padding with scroll to top */}
                <div className="h-20 flex justify-center">
                    <button
                        onClick={() => scrollToSection('hero-title')}
                        className="px-8 py-4 bg-gradient-to-r from-[#1368b4] to-[#0f4c75] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                    >
                        ↑ Back to Top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CEO;