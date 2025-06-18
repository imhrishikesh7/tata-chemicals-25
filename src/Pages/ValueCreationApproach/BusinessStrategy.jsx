import React, { useState, useEffect } from 'react';
import StrategyDashboard from '../../Components/StrategyDashbord';
import { div, img } from 'framer-motion/client';

const BusinessStrategy = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [activeTab, setActiveTab] = useState('excel');

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

    // Strategy data
    const strategyData = [
        {
            id: 'excel',
            number: '01',
            title: 'Excel',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                    <img src="ValueCreationApproach/BusinessStategy/20-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/Excel.webp" alt="" />
                    <img src="ValueCreationApproach/BusinessStategy/21-Page-IMG.webp" alt="" className='mt-10' />
                    <img src="ValueCreationApproach/BusinessStategy/21-Page-IMG-2.webp" alt="" className='mt-10' />
                    <img src="ValueCreationApproach/BusinessStategy/People.webp" alt="" className='mt-10'/>
                </div>
            )
        },
        {
            id: 'embed',
            number: '02',
            title: 'Embed',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-1">
                    <img src="ValueCreationApproach/BusinessStategy/22-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/22-Page-IMG-2.webp" alt="" />
                </div>
            )
        },
        {
            id: 'expand',
            number: '03',
            title: 'Expand',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG.webp" alt="" />
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG-2.webp" alt="" className='mt-10' />
                </div>
            )
        }
    ];

    const activeStrategyData = strategyData.find(strategy => strategy.id === activeTab);

    const getButtonColor = (id) => {
        switch (id) {
            case 'excel': return 'bg-[#1368b4]';
            case 'embed': return 'bg-[#40b2a2]';
            case 'expand': return 'bg-[#a088ad]';
            default: return 'bg-[#1368b4]';
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
                            Business Strategy
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#1368b4] m-semi-bold'>Leading through Sustainability, Customer Centricity and Operational Excellence</p>
                            <p className='text-xl mt-5'>
                                The integration of sustainable practices and operational excellence forms a robust foundation that allows Tata Chemicals to
                                consistently provide high-quality products and services to customers, minimise operational expenses and maintain resilience through
                                functional excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                {/* Strategy Section */}
                <div className="text-center mt-8 mb-12">
                    <div className="inline-block bg-[#432c87] text-white px-8 py-3 rounded-xl text-lg font-semibold mb-2">
                        Strategy – Chemistry of Sustainable Growth
                    </div>
                    <div className="px-8 py-4 text-gray-700 text-lg m-semi-bold max-w-4xl mx-auto">
                        Leading through Sustainability, Customer Centricity and Operational Excellence
                    </div>
                </div>

                {/* Strategy Cards Navigation - Improved Layout */}
                <div className="flex justify-center mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full px-4">
                        {strategyData.map((strategy) => (
                            <button
                                key={strategy.id}
                                onClick={() => {
                                    setActiveTab(strategy.id);
                                    scrollToSection('strategy-section');
                                }}
                                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 h-48 w-full ${activeTab === strategy.id
                                    ? `bg-gradient-to-r ${getButtonColor(strategy.id)} text-white shadow-xl`
                                    : 'bg-white/20 text-gray-700 hover:bg-white/30'
                                    }`}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex items-start justify-between">
                                        <div className="text-4xl font-bold opacity-60">
                                            {strategy.number}
                                        </div>
                                        {activeTab === strategy.id && (
                                            <div className="flex-shrink-0">
                                                {strategy.icon}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-left flex-1 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-3">{strategy.title}</h3>
                                        <p className={`text-sm leading-relaxed ${activeTab === strategy.id ? 'text-white/90' : 'text-gray-600'
                                            }`}>
                                            {strategy.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/3.webp" alt="" />
                </div>
                <div
                    id="strategy-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['strategy-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        {/* Content Display */}
                        <div className="min-h-[500px] transition-all duration-500">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className={`text-6xl font-bold bg-gradient-to-r ${getButtonColor(activeTab)} bg-clip-text text-transparent`}>
                                    {activeStrategyData?.number}
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-[#1368b4] mb-2">
                                        {activeStrategyData?.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="opacity-100 transition-opacity duration-300">
                                {activeStrategyData?.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessStrategy;